// Hero.js
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-primary">
      
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-screen flex items-center">
        <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          
          {/* Left Line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Text Content */}
          <div className="pt-10">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Maha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
              Full-Stack Developer specializing in building scalable web applications,
              secure APIs, and optimized databases for high-performance digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 xs:bottom-10 w-full flex justify-center items-center z-20">
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