import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* LEFT: Name + Title */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="text-white text-[22px] font-bold cursor-pointer">
                Maha Ali 
                <span className="text-secondary text-[18px] font-medium ml-2 hidden md:inline">
                  | Full-Stack Developer
                </span>
              </p>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[15px] order-3 lg:order-2">
            <a 
              href="#about" 
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* RIGHT: Social Links + Resume */}
          <div className="flex items-center gap-6 order-2 lg:order-3 flex-wrap justify-center">
            <a
              href="https://github.com/maha20514"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maha-aledresi-32a043205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mahaali1121997@gmail.com"
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://wa.me/966559204224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              WhatsApp
            </a>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1PnqRawz9s2TjXy1Bl0j0mPClinApTPMP/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#A78BFF] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/30"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-secondary text-xs">
            © {new Date().getFullYear()} Maha Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;