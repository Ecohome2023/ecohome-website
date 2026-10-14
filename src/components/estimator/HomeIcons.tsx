// Home-type icons for the instant pricing form. Each sits in front of the
// snowcapped Wasatch peaks, with a pine or two, for a Utah feel.

function Peaks() {
  return (
    <g>
      <path d="M2 44 L22 14 L31 26 L42 8 L62 44 Z" fill="#cdeffa" />
      <path d="M22 14 L27.5 22 L24 20.5 L21 23 L17.5 21 Z" fill="#fff" stroke="#14283a" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M42 8 L48.5 18 L44.5 16 L41.5 19 L37.5 15.5 Z" fill="#fff" stroke="#14283a" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M2 44 L22 14 L31 26 L42 8 L62 44" fill="none" stroke="#14283a" strokeWidth="1.6" strokeLinejoin="round" />
    </g>
  );
}

function Pine({ x }: { x: number }) {
  return (
    <g>
      <path d={`M${x} 30 L${x + 4} 37 L${x + 2} 37 L${x + 5} 42 L${x - 5} 42 L${x - 2} 37 L${x - 4} 37 Z`} fill="#0a617d" stroke="#14283a" strokeWidth="1.2" strokeLinejoin="round" />
      <path d={`M${x} 42 V45`} stroke="#14283a" strokeWidth="1.6" />
    </g>
  );
}

const stroke = { stroke: "#14283a", strokeWidth: 1.8, strokeLinejoin: "round" as const };

export function HomeIcon({ kind, className }: { kind: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
      <Peaks />
      {kind === "Single Family" && (
        <g>
          <Pine x={53} />
          <rect x="39" y="17" width="3.5" height="7" fill="#fff" {...stroke} />
          <path d="M18 29 L32 17 L46 29" fill="#e6002f" {...stroke} />
          <rect x="21" y="28" width="22" height="17" fill="#fff" {...stroke} />
          <rect x="29" y="35" width="6" height="10" fill="#0ad2ff" {...stroke} />
          <rect x="24" y="32" width="4" height="4" fill="#0ad2ff" {...stroke} />
          <rect x="36" y="32" width="4" height="4" fill="#0ad2ff" {...stroke} />
        </g>
      )}
      {kind === "Townhome" && (
        <g>
          {[12, 25, 38].map((x) => (
            <g key={x}>
              <path d={`M${x} 26 L${x + 7} 18 L${x + 14} 26`} fill="#e6002f" {...stroke} />
              <rect x={x} y="26" width="14" height="19" fill="#fff" {...stroke} />
              <rect x={x + 4.5} y="37" width="5" height="8" fill="#0ad2ff" {...stroke} />
              <rect x={x + 5} y="29.5" width="4" height="4" fill="#0ad2ff" {...stroke} />
            </g>
          ))}
        </g>
      )}
      {kind === "Condo/apartment" && (
        <g>
          <Pine x={11} />
          <Pine x={53} />
          <rect x="21" y="13" width="22" height="32" fill="#fff" {...stroke} />
          <rect x="19" y="11" width="26" height="3.5" fill="#e6002f" {...stroke} />
          {[17, 24, 31].map((y) => [25, 30, 35].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="3.5" height="4" fill="#0ad2ff" stroke="#14283a" strokeWidth="1.2" />))}
          <rect x="29" y="38" width="6" height="7" fill="#0ad2ff" {...stroke} />
        </g>
      )}
      {kind === "Mobile/Manufactured" && (
        <g>
          <Pine x={54} />
          <path d="M9 30 L12 25 H45 L48 30" fill="#e6002f" {...stroke} />
          <rect x="9" y="30" width="39" height="11" fill="#fff" {...stroke} />
          <rect x="13" y="33" width="5" height="4" fill="#0ad2ff" {...stroke} />
          <rect x="22" y="33" width="5" height="8" fill="#0ad2ff" {...stroke} />
          <rect x="31" y="33" width="5" height="4" fill="#0ad2ff" {...stroke} />
          <rect x="40" y="33" width="5" height="4" fill="#0ad2ff" {...stroke} />
          <path d="M12 41 V45 M20 41 V45 M37 41 V45 M45 41 V45" stroke="#14283a" strokeWidth="2" />
          <path d="M5 45 H52" stroke="#14283a" strokeWidth="1.6" />
        </g>
      )}
    </svg>
  );
}
