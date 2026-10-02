const words = ["Squat", "Press", "Pull", "Sprint", "Carry", "Recover", "Repeat"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden bg-red py-4 text-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="mx-6 font-display text-4xl font-black uppercase">{w}<span className="ml-12 text-white">/</span></span>
        ))}
      </div>
    </div>
  );
}
