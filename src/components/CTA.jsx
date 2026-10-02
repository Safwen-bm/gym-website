import { useState } from "react";

export default function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="cta" className="relative isolate overflow-hidden bg-red py-32 text-ink">
      {/* offer photo, tinted into the red */}
      <img src="/offer.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50 mix-blend-multiply grayscale" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red/60 via-transparent to-red/80" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-[clamp(3.5rem,11vw,10rem)] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.35)]">Your first week is on us</h2>
        <p className="mx-auto mt-6 max-w-xl text-xl font-semibold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">Seven days of full access, a movement screen and your first training plan. No card needed.</p>
        {sent ? (
          <p className="mt-10 font-display text-4xl font-black uppercase text-white" role="status">You're in. Check your inbox.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <label className="sr-only" htmlFor="cta-email">Email address</label>
            <input id="cta-email" type="email" required placeholder="Your email" className="flex-1 border-2 border-ink bg-white px-5 py-4 text-lg text-ink placeholder-ink/50 focus:outline-none focus:ring-4 focus:ring-ink/30" />
            <button className="btn btn-light">Claim my week</button>
          </form>
        )}
      </div>
    </section>
  );
}