export function Mountains({ className }: { className?: string }) {
  // Wasatch-style ridgeline, echoing the van wrap
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={className} aria-hidden>
      <path fill="#7fe8ff" d="M0 150 L120 96 L210 132 L330 52 L430 118 L520 84 L640 140 L760 64 L860 110 L980 40 L1090 120 L1190 88 L1300 132 L1440 70 V220 H0Z" opacity=".55" />
      <path fill="#2cd8ff" d="M0 180 L140 138 L260 168 L380 110 L500 160 L620 126 L760 172 L900 118 L1020 160 L1160 124 L1290 166 L1440 128 V220 H0Z" />
    </svg>
  );
}
