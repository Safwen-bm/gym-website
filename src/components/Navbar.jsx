import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";

const items = [["Home", "home"], ["Programs", "programs"], ["About", "about"], ["Pricing", "pricing"], ["Contact", "contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-white/10" : ""}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="home" smooth className="cursor-pointer" aria-label="Redline home"><Logo /></Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {items.map(([label, id]) => (
            <li key={id}>
              <Link to={id} smooth spy offset={-80} activeClass="!text-red" className="cursor-pointer font-medium text-white/70 transition hover:text-white">{label}</Link>
            </li>
          ))}
          <li><Link to="cta" smooth offset={-80} className="btn cursor-pointer !px-6 !py-2.5 !text-lg">Free week</Link></li>
        </ul>

        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
          <span className={`h-0.5 w-8 bg-red transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 bg-red transition-all ${open ? "w-0" : "w-5"}`} />
          <span className={`h-0.5 w-8 bg-red transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 px-6 pb-8 lg:hidden">
          {[...items, ["Free week", "cta"]].map(([label, id]) => (
            <li key={id}>
              <Link to={id} smooth offset={-80} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 font-display text-4xl font-black uppercase">{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
