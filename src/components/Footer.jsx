import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "./Logo";

const links = [["Home", "home"], ["Programs", "programs"], ["About", "about"], ["Pricing", "pricing"], ["Contact", "contact"]];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-ink pt-20">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,31,31,0.28),transparent_70%)]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm font-display text-4xl font-black uppercase leading-[0.95]">Train past your limit.</p>
          <Link to="cta" smooth offset={-80} className="btn mt-8 cursor-pointer">Start your free week</Link>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h3 className="mb-5 text-2xl text-red">Explore</h3>
          <ul className="space-y-3 text-lg text-white/70">
            {links.map(([label, id]) => (
              <li key={id}>
                <Link to={id} smooth offset={-80} className="cursor-pointer transition hover:text-white hover:underline hover:decoration-red hover:decoration-2 hover:underline-offset-4">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-2xl text-red">Visit</h3>
          <address className="space-y-3 text-lg not-italic text-white/70">
            <p>12 Rue de la Force<br />Tunis</p>
            <p>Open 24/7 for members<br />Staffed 6:00 to 22:00</p>
            <p>+216 00 000 000</p>
          </address>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 text-2xl text-red">Follow</h3>
          <div className="flex gap-3">
            {[[FaGithub, "https://github.com/Safwen-bm", "GitHub"], [FaLinkedin, "https://www.linkedin.com/in/safwen-ben-mabrouk-494721362", "LinkedIn"]].map(([Icon, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="flex h-12 w-12 items-center justify-center border border-white/20 text-2xl transition hover:border-red hover:bg-red">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* oversized wordmark, cropped by the bottom edge */}
      <div className="mt-16 select-none overflow-hidden" aria-hidden="true">
        <p className="outline-text -mb-[0.14em] text-center font-display text-[clamp(5rem,26vw,26rem)] font-black uppercase leading-[0.8] opacity-40 [-webkit-text-stroke:2px_#ff1f1f]">Redline</p>
      </div>

      <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Redline Gym. Crafted by <a href="https://github.com/Safwen-bm" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">SafOne</a>.</p>
          <Link to="home" smooth className="cursor-pointer font-semibold text-white/70 hover:text-red">Back to top &uarr;</Link>
        </div>
      </div>
    </footer>
  );
}