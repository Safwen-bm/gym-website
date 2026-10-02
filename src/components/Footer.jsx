import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <Logo />
          <p className="mt-3 text-white/50">Train past your limit.</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-8 text-white/70">
          {["Home", "Programs", "About", "Pricing", "Contact"].map((i) => (
            <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-red">{i}</a></li>
          ))}
        </ul>
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/Safwen-bm" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-red"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/safwen-ben-mabrouk-494721362" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-red"><FaLinkedin /></a>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-white/40">&copy; {new Date().getFullYear()} Redline Gym. Crafted by <a href="https://github.com/Safwen-bm" className="text-red hover:underline">SafOne</a>.</p>
    </footer>
  );
}
