import React from "react";

function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* CINEMATIC BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] bg-red-700 rounded-full blur-4xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-1/5 -right-1/4 w-[600px] h-[600px] bg-orange-600 rounded-full blur-3xl opacity-25 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float-slow opacity-50"></div>
      </div>

      {/* Section Title */}
      <h1 className="title-fire text-center mb-20 text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-gradient-text drop-shadow-3xl">
        ENTER THE ARENA
      </h1>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto bg-zinc-900/50 border-4 border-red-900 rounded-3xl p-12 shadow-2xl backdrop-blur-sm transform transition-transform duration-700 hover:scale-[1.02]">
        <input
          type="text"
          placeholder="YOUR NAME"
          className="input-hell mb-8"
          required
        />
        <input
          type="email"
          placeholder="YOUR EMAIL"
          className="input-hell mb-8"
          required
        />
        <textarea
          placeholder="WHY DO YOU DESERVE THIS?"
          className="input-hell mb-10 resize-none"
          rows="6"
        ></textarea>

        <button
          type="submit"
          className="btn-fire w-full text-3xl sm:text-4xl py-8 md:py-10 relative overflow-hidden group"
        >
          <span className="relative z-10">SEND YOUR SOUL</span>
          <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl"></span>
        </button>
      </form>

      {/* EXTRA FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-red-500 rounded-full animate-float-slow opacity-40`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i + 12}
            className={`absolute w-2 h-2 bg-orange-500 rounded-full animate-float-slow opacity-35`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
