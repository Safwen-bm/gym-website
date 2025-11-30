function Pricing() {
  const plans = [
    { name: "Basic", price: "$50", features: ["Access to Gym", "1 Trainer Session/week"] },
    { name: "Pro", price: "$90", features: ["Access to Gym", "3 Trainer Sessions/week", "Nutrition Plan"] },
    { name: "Elite", price: "$150", features: ["Unlimited Gym Access", "Daily Trainer Sessions", "Nutrition Plan", "Online Support"] },
  ];

  return (
    <section id="pricing" className="relative py-32 bg-black overflow-hidden">
      <h2 className="title-fire text-center mb-20 text-6xl md:text-7xl animate-gradient-text">CHOOSE YOUR PLAN</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-8">
        {plans.map((p, i) => (
          <div key={i} className="card-hell p-8 rounded-3xl hover:scale-105 transition-all duration-500 shadow-2xl">
            <h3 className="text-4xl font-black text-red-600 text-center mb-4">{p.name}</h3>
            <p className="text-gray-300 text-3xl text-center mb-6">{p.price}</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              {p.features.map((f, idx) => (
                <li key={idx} className="text-lg">{f}</li>
              ))}
            </ul>
            <button className="btn-fire w-full py-4 text-2xl">Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
