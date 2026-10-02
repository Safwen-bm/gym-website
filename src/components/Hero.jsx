import { Link } from "react-scroll";

const stats = [["24/7", "open access"], ["38", "coaches on the floor"], ["4,200", "members training"]];

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      {/* banner photo: faded on the left, bottom and edges so the headline stays readable */}
      <img
        src="/banner.png"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] opacity-45 [mask-image:linear-gradient(to_right,transparent_5%,black_60%),linear-gradient(to_top,transparent_0%,black_30%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(255,31,31,0.3),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* the heartbeat line */}
      <svg viewBox="0 0 1600 300" preserveAspectRatio="none" className="absolute inset-x-0 top-1/2 -z-10 h-56 w-full -translate-y-1/2" aria-hidden="true">
        <path className="pulse-line" fill="none" stroke="#ff1f1f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
          d="M0 170H520L580 170 640 60 720 260 800 20 880 250 940 150 1010 170H1600" />
      </svg>

      <div className="hero-in mx-auto w-full max-w-7xl px-6">
        <p className="mb-6 max-w-md text-lg text-white/80">Strength, conditioning and recovery under one roof. Coached by people who still lift.</p>
        <h1 className="text-[clamp(5rem,17vw,15rem)]">Hit your</h1>
        <h1 className="outline-text -mt-1 text-[clamp(5rem,17vw,15rem)]">redline</h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link to="cta" smooth offset={-80} className="btn cursor-pointer">Start your free week</Link>
          <Link to="programs" smooth offset={-80} className="cursor-pointer font-semibold underline decoration-red decoration-2 underline-offset-8 hover:text-red">See the programs</Link>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
          {stats.map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-4xl font-black md:text-5xl">{n}</dt>
              <dd className="text-sm text-white/70">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}