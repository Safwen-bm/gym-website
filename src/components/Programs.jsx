import { useState } from "react";
import Reveal from "./Reveal";

const programs = [
  { name: "Strength", tag: "Barbell, rack, platform", body: "Progressive lifting blocks written by our powerlifting and weightlifting coaches. You log it, we adjust it.", meta: "4 sessions a week" },
  { name: "Conditioning", tag: "Engines, sleds, rowers", body: "Intervals and circuits that build the kind of fitness that lasts past the last rep. Scaled to your level.", meta: "45 minute classes" },
  { name: "Mobility", tag: "Move well, lift longer", body: "Guided joint work and flexibility sessions that keep your hips, shoulders and back training pain free.", meta: "Daily at 7:00" },
  { name: "Recovery", tag: "Sauna, cold plunge, massage", body: "Heat, cold and bodywork on site, so the hard days actually turn into progress.", meta: "Included from Pro" },
];

export default function Programs() {
  const [active, setActive] = useState(0);
  return (
    <section id="programs" className="bg-bone py-28 text-ink">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-3xl text-6xl md:text-8xl">Four ways to get stronger</h2>
        </Reveal>

        <div className="mt-16 border-t-2 border-ink">
          {programs.map((p, i) => {
            const open = active === i;
            return (
              <div key={p.name} className="border-b-2 border-ink">
                <button onClick={() => setActive(i)} aria-expanded={open}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className={`font-display text-5xl font-black uppercase transition-colors md:text-7xl ${open ? "text-red" : "group-hover:text-red"}`}>{p.name}</span>
                  <span className="hidden text-lg font-medium md:block">{p.tag}</span>
                  <span className={`text-4xl font-black transition-transform ${open ? "rotate-45 text-red" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                      <p className="max-w-xl text-xl leading-snug">{p.body}</p>
                      <span className="w-fit bg-ink px-4 py-2 font-display text-xl font-extrabold uppercase text-white">{p.meta}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
