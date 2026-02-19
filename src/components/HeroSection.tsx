import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sri Gayatri Photo Studio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Sri Gayatri Photo Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
        >
          Capturing Timeless
          <br />
          <span className="text-gradient-gold">Stories Through Light</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 font-sans"
        >
          Professional photography by Ganesh Siliveru — turning your most
          precious moments into timeless memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-gold transition-all duration-300 uppercase"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-primary text-primary font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase"
          >
            Book a Session
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
