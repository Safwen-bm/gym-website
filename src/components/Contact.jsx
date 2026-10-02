import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-6xl md:text-8xl">Come see the floor</h2>
          <dl className="mt-10 space-y-6 text-xl">
            <div><dt className="text-white/50">Address</dt><dd>12 Rue de la Force, Tunis</dd></div>
            <div><dt className="text-white/50">Hours</dt><dd>Open 24/7 for members. Staffed 6:00 to 22:00.</dd></div>
            <div><dt className="text-white/50">Phone</dt><dd>+216 00 000 000</dd></div>
          </dl>
        </Reveal>
        <Reveal delay={120}>
          {sent ? (
            <p className="font-display text-5xl font-black uppercase" role="status">Message sent. We reply within a day.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
              <input className="field" placeholder="Your name" aria-label="Your name" required />
              <input className="field" type="email" placeholder="Your email" aria-label="Your email" required />
              <textarea className="field resize-none" rows="4" placeholder="What are you training for?" aria-label="Message" />
              <button className="btn">Send message</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
