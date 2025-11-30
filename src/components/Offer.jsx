import React from "react";

function Offer() {
  return (
    <section
      id="offer"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden hero-overlay"
      style={{ backgroundImage: "url('/offer.png')" }}
    >
      {/* CINEMATIC BLOBS */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-red-700 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-1/5 -right-1/4 w-[700px] h-[700px] bg-orange-600 rounded-full blur-2xl opacity-25 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float-slow opacity-50"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 px-6 max-w-4xl animate-fade-in">
        {/* LIMITED OFFER BADGE */}
        <div className="inline-block px-12 py-4 text-3xl sm:text-4xl md:text-5xl font-black text-white bg-red-800 rounded-lg animate-pulse shadow-2xl shadow-red-600/50 mb-10">
          LIMITED HELL OFFER
        </div>

        {/* MAIN OFFER */}
        <h1 className="title-fire text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] animate-gradient-text drop-shadow-3xl">
          70% OFF
        </h1>
        <h1 className="title-fire mt-[-2rem] text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] animate-gradient-text drop-shadow-3xl">
          FIRST MONTH
        </h1>

        {/* SUBTITLE */}
        <p className="mt-8 md:mt-12 text-xl sm:text-2xl md:text-3xl text-gray-300 tracking-widest drop-shadow-lg">
          Only for the brave who dare to transform.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-12">
          <a
            href="#contact"
            className="relative inline-block px-12 py-6 md:px-16 md:py-8 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest text-white bg-gradient-to-r from-red-700 to-orange-600 rounded-xl shadow-2xl hover:scale-110 hover:shadow-red-600/70 transition-all duration-500 overflow-hidden group"
          >
            <span className="relative z-10">TAKE IT OR STAY WEAK</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></span>
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-14 h-24 border-4 border-red-600 rounded-full flex justify-center items-start animate-bounce">
          <div className="w-4 h-12 bg-red-600 rounded-full mt-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
