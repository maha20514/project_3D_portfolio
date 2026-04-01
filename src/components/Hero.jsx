// Hero.js
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-primary overflow-hidden">
      
      {/* 3D Canvas - Background */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Text Content - Always visible on top */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-16 md:pt-0`}>
          
          {/* Left purple line */}
          <div className="hidden sm:flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>

          {/* Main Text */}
          <div className="max-w-2xl">
            <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
              Hi, I'm <span className="text-[#915EFF]">Maha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100`}>
              Full-Stack Developer specializing in building scalable web applications,
              secure APIs, and optimized databases for high-performance digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive position */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;