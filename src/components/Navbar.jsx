import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Features", "Offer", "About", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "h-16 md:h-20 bg-black/90 backdrop-blur-xl border-b border-red-900/40 shadow-2xl shadow-red-900/20"
            : "h-20 md:h-24 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6 md:px-10">
          {/* LOGO */}
          <Link to="main" smooth className="cursor-pointer">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 md:h-16 transition-all duration-500 hover:scale-110 logo-img"
            />
          </Link>

          {/* DESKTOP MENU — SLIM & DEADLY */}
          <ul className="hidden lg:flex items-center gap-10 xl:gap-12 text-sm xl:text-base uppercase tracking-widest font-bold">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase() === "home" ? "main" : item.toLowerCase()}
                  smooth
                  spy
                  offset={-80}
                  className="relative py-2 text-gray-300 hover:text-red-500 transition-all duration-300"
                  activeClass="text-red-500"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-400 hover:w-full active:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER — PURE EVIL */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          >
            <span className="block w-8 h-0.5 bg-red-600 transition-all duration-500 group-hover:bg-red-400"></span>
            <span className="block w-8 h-0.5 bg-red-600 transition-all duration-500"></span>
            <span className="block w-8 h-0.5 bg-red-600 transition-all duration-500 group-hover:bg-red-400"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU — FULL-SCREEN DEMON MODE */}
      <div
        className={`fixed inset-0 bg-black/98 backdrop-blur-2xl z-50 transition-opacity duration-700 flex items-center justify-center ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 text-5xl font-bold text-red-600 hover:text-red-400 transition"
        >
          ×
        </button>

        <ul className="space-y-10 text-center">
          {navItems.map((item, i) => (
            <li
              key={item}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            >
              <Link
                to={item.toLowerCase() === "home" ? "main" : item.toLowerCase()}
                smooth
                spy
                offset={-80}
                onClick={() => setMobileOpen(false)}
                className="text-5xl md:text-7xl font-black tracking-wider text-gray-400 hover:text-red-500 transition-all duration-500 hover:scale-110 block"
                activeClass="text-red-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;