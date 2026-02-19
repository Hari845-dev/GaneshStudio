import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul",
    role: "Wedding Client",
    review: "Ganesh captured our wedding beautifully. Every photo tells a story, every moment is frozen in perfection. We couldn't have asked for a better photographer!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Fashion Shoot",
    review: "The fashion shoot was an incredible experience. Ganesh has an eye for detail and knows exactly how to bring out the best in every frame. Absolutely stunning work!",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Corporate Event",
    review: "Professional, punctual, and incredibly talented. The event coverage exceeded our expectations. The team was unobtrusive yet captured every important moment.",
    rating: 5,
  },
  {
    name: "Meera & Vikram",
    role: "Pre-Wedding Shoot",
    review: "Our pre-wedding shoot was magical! Ganesh made us feel so comfortable and the photos turned out breathtaking. Every couple should experience this!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Clients <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Our clients' words mean the world to us. Here's what they have to say.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">"{t.review}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary font-sans">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
