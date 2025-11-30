import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-25%] left-[-15%] w-[900px] h-[900px] bg-red-700 rounded-full blur-4xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600 rounded-full blur-3xl opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float-slow opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="title-fire text-5xl mb-6 animate-gradient-text">IRON ELITE</h2>
          <p className="text-gray-400">
            The ultimate fitness experience. Transform your body. Elevate your mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl text-red-600 font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-4">
            {["Home", "Features", "Offer", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-red-400 transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials / Newsletter — ONLY REAL ONES */}
        <div>
          <h3 className="text-2xl text-red-600 font-bold mb-6 uppercase tracking-wider">Connect</h3>
          <div className="flex justify-center md:justify-start gap-8 mb-6 text-3xl">
            <a 
              href="https://github.com/Safwen-bm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-400 transition duration-300"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/safwen-ben-mabrouk-494721362" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-gray-400 mb-4">Subscribe for exclusive offers:</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="input-hell flex-1"
            />
            <button className="btn-fire text-xl px-8 py-4">
              <span>SUBSCRIBE</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Iron Elite. All rights reserved. Crafted by{" "}
        <a 
          href="https://github.com/Safwen-bm" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-600 hover:text-red-400 transition duration-300"
        >
          SafOne
        </a>.
      </div>
    </footer>
  );
}

export default Footer;