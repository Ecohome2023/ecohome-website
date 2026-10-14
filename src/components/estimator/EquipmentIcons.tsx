// Icons for "What do you have now?" and "What are you looking to replace?".
import { stroke } from "./HomeIcons";

const INK = "#14283a", RED = "#e6002f", CYAN = "#0ad2ff", BLUE = "#1f6fe0";

function Flame({ cx, cy, s = 1, fill = RED }: { cx: number; cy: number; s?: number; fill?: string }) {
  return (
    <path
      transform={`translate(${cx} ${cy}) scale(${s})`}
      d="M0 -7 C3 -3 5 -1 5 2.5 C5 5.5 2.8 7.5 0 7.5 C-2.8 7.5 -5 5.5 -5 2.5 C-5 0 -3 -1.5 -2.5 -4 C-1 -2.5 -0.5 -2 0 -7 Z"
      fill={fill} stroke={INK} strokeWidth={1.4 / s} strokeLinejoin="round"
    />
  );
}

function Snowflake({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const arms = [0, 60, 120].map((a) => {
    const t = (a * Math.PI) / 180, dx = Math.cos(t) * r, dy = Math.sin(t) * r;
    return <path key={a} d={`M${cx - dx} ${cy - dy} L${cx + dx} ${cy + dy}`} />;
  });
  const tips = [0, 60, 120, 180, 240, 300].map((a) => {
    const t = (a * Math.PI) / 180, k = 0.5, b = r * 0.38;
    const px = cx + Math.cos(t) * r * k, py = cy + Math.sin(t) * r * k;
    const l = t + 0.75, rr = t - 0.75;
    return <path key={a} d={`M${px + Math.cos(l) * b} ${py + Math.sin(l) * b} L${px} ${py} L${px + Math.cos(rr) * b} ${py + Math.sin(rr) * b}`} />;
  });
  return <g stroke={BLUE} strokeWidth="2" strokeLinecap="round" fill="none">{arms}{tips}</g>;
}

// A round white badge so the symbol stands out from the mountains.
function Badge({ cx, cy, r, children }: { cx: number; cy: number; r: number; children: React.ReactNode }) {
  return <g><circle cx={cx} cy={cy} r={r} fill="#fff" {...stroke} />{children}</g>;
}

function Furnace({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y="17" width="14" height="28" rx="1" fill="#fff" {...stroke} />
      <path d={`M${x + 3} 21.5 H${x + 11} M${x + 3} 24.5 H${x + 11}`} stroke={INK} strokeWidth="1.4" />
      <rect x={x + 3} y="30" width="8" height="10" rx="1" fill={INK} />
      <Flame cx={x + 7} cy={35} s={0.55} />
    </g>
  );
}

function Condenser({ x, w = 20 }: { x: number; w?: number }) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y="28" width={w} height="17" rx="1.5" fill="#fff" {...stroke} />
      <circle cx={cx} cy="36.5" r="5.8" fill={CYAN} {...stroke} />
      <path d={`M${cx} 31 V42 M${cx - 5.5} 36.5 H${cx + 5.5}`} stroke={INK} strokeWidth="1.4" />
      <circle cx={cx} cy="36.5" r="1.4" fill={INK} />
    </g>
  );
}

function SwampCooler({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y="27" width="18" height="18" rx="1" fill="#fff" {...stroke} />
      <rect x={x + 3} y="30" width="12" height="12" fill="#cdeffa" stroke={INK} strokeWidth="1.2" />
      {[0, 1, 2, 3].map((i) => <path key={i} d={`M${x + 5.4 + i * 2.4} 30 V42`} stroke={INK} strokeWidth="1" />)}
      <path d={`M${x - 1} 27 H${x + 19}`} stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

function Arrows({ x }: { x: number }) {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2.2">
      <path d={`M${x} 26 V16 M${x - 3} 19 L${x} 16 L${x + 3} 19`} stroke={RED} />
      <path d={`M${x + 7} 16 V26 M${x + 4} 23 L${x + 7} 26 L${x + 10} 23`} stroke={BLUE} />
    </g>
  );
}

function Boiler({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y="20" width="13" height="25" rx="5" fill="#fff" {...stroke} />
      <circle cx={x + 6.5} cy="28" r="3" fill={CYAN} stroke={INK} strokeWidth="1.3" />
      <path d={`M${x + 6.5} 28 L${x + 8} 26.5`} stroke={INK} strokeWidth="1.2" />
      <Flame cx={x + 6.5} cy={38} s={0.5} />
    </g>
  );
}

function Radiator({ x }: { x: number }) {
  return (
    <g>
      {[0, 1, 2, 3].map((i) => <rect key={i} x={x + i * 5} y="28" width="4" height="15" rx="2" fill="#fff" {...stroke} strokeWidth={1.5} />)}
      <path d={`M${x - 1} 43 H${x + 20}`} stroke={INK} strokeWidth="1.8" />
      <path d={`M${x + 2} 43 V45 M${x + 17} 43 V45`} stroke={INK} strokeWidth="1.8" />
    </g>
  );
}

const ICONS: Record<string, Record<string, React.ReactNode>> = {
  setup: {
    furnace_central_ac: <><Furnace x={17} /><Condenser x={33} /></>,
    furnace_no_ac: <Furnace x={25} />,
    furnace_swamp_cooler: <><Furnace x={17} /><SwampCooler x={34} /></>,
    heat_pump: <><Condenser x={14} w={22} /><Arrows x={41} /></>,
    boiler_radiant: <><Boiler x={17} /><Radiator x={34} /></>,
    not_sure: (
      <Badge cx={32} cy={31} r={12}>
        <text x="32" y="37.5" textAnchor="middle" fontSize="18" fontWeight="900" fill={RED} fontFamily="Archivo, Arial, sans-serif">?</text>
      </Badge>
    ),
  },
  replace: {
    system: <><Badge cx={22} cy={32} r={10}><Flame cx={22} cy={32} s={0.9} /></Badge><Badge cx={42} cy={32} r={10}><Snowflake cx={42} cy={32} r={6.5} /></Badge></>,
    ac: <Badge cx={32} cy={31} r={12}><Snowflake cx={32} cy={31} r={8} /></Badge>,
    furnace: <Badge cx={32} cy={31} r={12}><Flame cx={32} cy={31} s={1.1} /></Badge>,
  },
};

export const hasEquipmentIcons = (key: string) => key in ICONS;

export function EquipmentIcon({ qkey, value, className }: { qkey: string; value: string; className?: string }) {
  return (
    <svg viewBox="0 8 64 40" className={className} aria-hidden="true">
      {ICONS[qkey]?.[value]}
    </svg>
  );
}
