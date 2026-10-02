import Reveal from "./Reveal";

const points = [
  ["Real coaching", "Every member gets a movement screen and a plan in week one, not a laminated card."],
  ["Honest numbers", "We track your lifts, not your likes. Progress reviews every six weeks."],
  ["No gym ego", "Beginners train beside pros. Racks are never reserved for anyone."],
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-6xl md:text-8xl">We don't sell memberships.<br /><span className="text-red">We build lifters.</span></h2>
          <p className="mt-8 max-w-lg text-xl text-white/70">Redline started in a 40 square meter garage with one rack and a rule: show up, lift heavy, leave better than you came. Today it is the same rule with more room.</p>
        </Reveal>
        <div className="divide-y divide-white/15 border-y border-white/15 self-center">
          {points.map(([t, b], i) => (
            <Reveal key={t} delay={i * 120} className="py-8">
              <h3 className="text-4xl">{t}</h3>
              <p className="mt-3 max-w-md text-lg text-white/65">{b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
