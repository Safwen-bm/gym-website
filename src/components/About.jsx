import React from "react";

function About() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* CINEMATIC BACKGROUND BLOBS & SPARKS */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] bg-red-700 rounded-full blur-4xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-1/5 -right-1/4 w-[600px] h-[600px] bg-orange-600 rounded-full blur-3xl opacity-25 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float-slow opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div className="relative">
          <img
            src="/about.png"
            alt="About Gym"
            className="rounded-3xl border-8 border-red-900 shadow-2xl transform transition-transform duration-700 hover:scale-110 hover:shadow-red-600/70"
          />
          {/* Floating sparks on image */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-float-slow opacity-60"></div>
          <div className="absolute bottom-6 right-6 w-2 h-2 bg-orange-500 rounded-full animate-float-slow opacity-50"></div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 animate-fade-in">
          <h1 className="title-fire text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight drop-shadow-3xl">
            WE DON'T TRAIN
          </h1>
          <h1 className="title-fire mt-[-2rem] text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight drop-shadow-3xl">
            WE TRANSFORM
          </h1>

          <p className="mt-8 md:mt-12 text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed tracking-wide drop-shadow-lg">
            This isn't fitness. This is evolution. Every session is war. Every rep is a step toward immortality.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-12">
            <a
              href="#contact"
              className="relative inline-block px-12 py-6 md:px-16 md:py-8 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest text-white bg-gradient-to-r from-red-700 to-orange-600 rounded-xl shadow-2xl hover:scale-110 hover:shadow-red-600/70 transition-all duration-500 overflow-hidden group"
            >
              <span className="relative z-10">EVOLVE NOW</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-xl"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
