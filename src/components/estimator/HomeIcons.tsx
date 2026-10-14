// Home-type icons for the instant pricing form. Each sits in front of the
// snowcapped Wasatch peaks, with a pine or two, for a Utah feel.

function Peaks() {
  // A long, gentle ridgeline like the Wasatch Front: two snowcapped peaks on
  // either side of the home, with a low ridge running behind it.
  const ridge = "M0 44 L6 38 L12 30 L17 24 L21 27 L26 29 L33 31 L40 30 L47 31 L54 29 L59 26 L64 21 L69 25 L74 32 L80 40";
  return (
    <g>
      <path d={`${ridge} L80 44 Z`} fill="#dcc3a1" />
      <path d="M17 24 L20.3 26.5 L19 26.4 L17.6 28.2 L15.8 26.9 L13.7 28 Z" fill="#fff" stroke="#14283a" strokeWidth="1" strokeLinejoin="round" />
      <path d="M64 21 L68.4 24.5 L66.6 24.3 L64.8 26 L62.8 24.5 L60 25 Z" fill="#fff" stroke="#14283a" strokeWidth="1" strokeLinejoin="round" />
      <path d={ridge} fill="none" stroke="#14283a" strokeWidth="1.6" strokeLinejoin="round" />
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
    <svg viewBox="0 0 80 48" className={className} aria-hidden="true">
      <Peaks />
      <g transform="translate(8 0)">
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
      </g>
    </svg>
  );
}
