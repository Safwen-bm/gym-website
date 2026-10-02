import { Link } from "react-scroll";
import Reveal from "./Reveal";

const plans = [
  { name: "Base", price: 50, note: "For lifters who know the plan", features: ["24/7 gym access", "1 coached session a week", "Mobility classes"] },
  { name: "Pro", price: 90, note: "Most members pick this", featured: true, features: ["Everything in Base", "3 coached sessions a week", "Nutrition plan", "Sauna and cold plunge"] },
  { name: "Elite", price: 150, note: "Maximum support", features: ["Everything in Pro", "Daily coaching", "Monthly body scan", "Priority booking", "Online coach chat"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white/[0.03] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-6xl md:text-8xl">Pick your plan</h2>
          <p className="mt-4 text-xl text-white/60">Month to month. Cancel any time. First week free on every plan.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-end">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`flex flex-col p-8 ${p.featured ? "bg-red text-white md:pb-14 md:pt-12" : "border border-white/15"}`}>
                <h3 className="text-5xl">{p.name}</h3>
                <p className={p.featured ? "text-white/90" : "text-white/55"}>{p.note}</p>
                <p className="mt-6 font-display text-7xl font-black">${p.price}<span className="text-2xl font-bold opacity-70"> / month</span></p>
                <ul className="mt-6 flex-1 space-y-3 text-lg">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3"><span className={p.featured ? "text-ink" : "text-red"}>&#10003;</span>{f}</li>
                  ))}
                </ul>
                <Link to="contact" smooth offset={-80} className={`btn mt-8 cursor-pointer ${p.featured ? "btn-light" : ""}`}>Join {p.name}</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
