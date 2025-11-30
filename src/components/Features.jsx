import React from "react";

function Features() {
  const powers = [
    { img: "/1.svg", title: "RAW POWER" },
    { img: "/2.svg", title: "MUSCLE CONTROL" },
    { img: "/3.svg", title: "EXPLOSIVE MOBILITY" },
    { img: "/4.svg", title: "ENDLESS STAMINA" },
  ];

  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      {/* Background glowing shapes */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-[-10%] w-[700px] h-[700px] bg-red-700 rounded-full blur-4xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float-slow opacity-50"></div>
      </div>

      {/* Section Title */}
      <h1 className="title-fire text-center mb-24 text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-gradient-text drop-shadow-3xl">
        CHOOSE YOUR WEAPON
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        {powers.map((p, i) => (
          <div
            key={i}
            className="group relative card-hell transform transition duration-700 hover:scale-110 hover:-translate-y-6 hover:rotate-1 hover:shadow-2xl hover:shadow-red-700/60"
          >
            {/* Floating sparks */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-float-slow opacity-50"></div>
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-orange-500 rounded-full animate-float-slow opacity-50"></div>

            {/* Feature Image */}
            <div className="relative p-10 sm:p-12 bg-black/20 rounded-2xl overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-contain transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glow Overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-red-800 via-orange-700 to-transparent opacity-30 rounded-2xl animate-pulse-slow"></span>
            </div>

            {/* Feature Title */}
            <div className="p-6 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-600 drop-shadow-2xl animate-gradient-text">
                {p.title}
             </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
