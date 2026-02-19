import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import weddingImg from "@/assets/portfolio-wedding.jpg";
import preweddingImg from "@/assets/portfolio-prewedding.jpg";
import fashionImg from "@/assets/portfolio-fashion.jpg";
import eventsImg from "@/assets/portfolio-events.jpg";
import portraitsImg from "@/assets/portfolio-portraits.jpg";
import commercialImg from "@/assets/portfolio-commercial.jpg";

const categories = [
  { id: "weddings", label: "Weddings", image: weddingImg, description: "Capturing the magic of your special day with elegance and emotion." },
  { id: "prewedding", label: "Pre-Wedding", image: preweddingImg, description: "Romantic pre-wedding shoots that tell your love story." },
  { id: "fashion", label: "Fashion", image: fashionImg, description: "High-fashion editorial photography with dramatic flair." },
  { id: "events", label: "Events", image: eventsImg, description: "Comprehensive event coverage from intimate to grand." },
  { id: "portraits", label: "Portraits", image: portraitsImg, description: "Professional portraits that capture your personality." },
  { id: "commercial", label: "Commercial", image: commercialImg, description: "Product and brand photography that sells." },
];

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Finest Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            A curated collection of our most memorable projects across various genres.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/5]"
              onClick={() => setLightbox(cat.image)}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{cat.label}</h3>
                <p className="text-sm text-muted-foreground font-sans">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Portfolio preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
