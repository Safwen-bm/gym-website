export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#ff1f1f" />
        <g fill="#fff">
          <rect x="5" y="15" width="22" height="2" rx="1" />
          <rect x="7" y="7.5" width="4" height="17" rx="1.2" />
          <rect x="21" y="7.5" width="4" height="17" rx="1.2" />
          <rect x="2.5" y="11" width="2.5" height="10" rx="1" />
          <rect x="27" y="11" width="2.5" height="10" rx="1" />
        </g>
      </svg>
      <span className="font-display text-3xl font-black uppercase leading-none tracking-tight">Redline</span>
    </span>
  );
}
