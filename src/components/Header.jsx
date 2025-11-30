import React from "react";

function Header() {
  return (
    <header
      id="main"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center hero-overlay"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      {/* BACKGROUND BLOBS & PARTICLES */}
      <div className="absolute inset-0 -z-20">
        {/* Large Glowing Blobs */}
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-red-700 rounded-full blur-4xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-1/5 -right-1/3 w-[800px] h-[800px] bg-orange-600 rounded-full blur-3xl opacity-25 animate-pulse-slow"></div>

        {/* Tiny Floating Sparks */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float-slow`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}

        {/* Background grid lines / lens flare (optional) */}
        <div className="absolute inset-0 bg-[url('/grid-overlay.png')] bg-center bg-cover opacity-10"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-6xl animate-fade-in">
        {/* Main Titles */}
        <h1 className="title-fire text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none animate-gradient-text drop-shadow-2xl">
          UNLEASH
        </h1>
        <h1 className="title-fire text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none animate-gradient-text drop-shadow-2xl mt-[-1.5rem]">
          THE BEAST
        </h1>

        {/* Subtitle */}
        <p className="mt-6 md:mt-10 text-xl md:text-3xl lg:text-4xl font-extrabold tracking-widest text-gray-200 drop-shadow-lg">
          NO PAIN. NO GLORY. NO EXCUSES.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-12 relative group inline-block">
          <a
            href="#contact"
            className="relative px-12 py-6 md:px-16 md:py-8 text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-red-700 via-red-800 to-orange-600 rounded-2xl shadow-[0_0_25px_rgba(255,0,0,0.7)] hover:scale-110 transition-transform duration-500 overflow-hidden"
          >
            <span className="relative z-10">JOIN THE IRON ELITE</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500"></span>
            {/* Pulsating glow behind button */}
            <span className="absolute -inset-1 bg-red-600 blur-2xl opacity-30 animate-pulse-slow rounded-2xl"></span>
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-14 h-24 border-4 border-red-600 rounded-full flex justify-center items-start animate-bounce relative overflow-hidden">
          <div className="w-4 h-12 bg-red-600 rounded-full mt-4"></div>
          {/* tiny sparks */}
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-float-slow opacity-50"></div>
        </div>
        <span className="text-red-500 font-bold uppercase tracking-widest drop-shadow-lg">
          SCROLL
        </span>
      </div>
    </header>
  );
}

export default Header;
