import { readFileSync } from "node:fs";
import { join } from "node:path";

// The city, city-service and county heroes show photos in a tall 4:5 frame with
// object-cover. A wide (landscape) photo in that frame is cropped at the sides and
// drawn much wider than the frame, so the browser needs a bigger file than the
// frame's width to keep it sharp. This reads the photo's real size at build time
// and returns a `sizes` value that asks for enough pixels.

const cache = new Map<string, number>();

// Width / height of an image in /public, read from the JPEG or PNG header.
function aspect(src: string): number {
  const hit = cache.get(src);
  if (hit) return hit;
  let ratio = 0.8;
  try {
    const b = readFileSync(join(process.cwd(), "public", src));
    if (b[0] === 0x89 && b[1] === 0x50) {
      ratio = b.readUInt32BE(16) / b.readUInt32BE(20); // PNG IHDR
    } else if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i < b.length) {
        if (b[i] !== 0xff) { i++; continue; }
        const m = b[i + 1];
        // Start-of-frame markers carry the height and width
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
          ratio = b.readUInt16BE(i + 7) / b.readUInt16BE(i + 5);
          break;
        }
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch {}
  cache.set(src, ratio);
  return ratio;
}

// frameWidth: the frame's width on desktop, in CSS px. frameRatio: height / width.
export function heroSizes(src: string, frameWidth = 520, frameRatio = 5 / 4) {
  const f = Math.max(1, aspect(src) * frameRatio);
  return `(min-width: 1024px) ${Math.round(frameWidth * f)}px, ${Math.round(100 * f)}vw`;
}
