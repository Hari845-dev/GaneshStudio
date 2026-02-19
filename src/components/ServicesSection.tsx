import { motion } from "framer-motion";
import { Heart, Users, User, Building2, Plane, Video } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Complete coverage of your wedding day — from getting ready to the grand finale. Candid, cinematic, and traditional styles.",
    features: ["Full day coverage", "300+ edited photos", "Premium album", "Online gallery"],
  },
  {
    icon: Users,
    title: "Event Coverage",
    description: "Professional documentation of corporate events, parties, conferences, and cultural celebrations.",
    features: ["Multi-hour coverage", "200+ edited photos", "Quick turnaround", "Digital delivery"],
  },
  {
    icon: User,
    title: "Portrait Sessions",
    description: "Studio and outdoor portrait sessions for individuals, families, and professionals.",
    features: ["1-2 hour session", "50+ edited photos", "Multiple outfits", "Retouching included"],
  },
  {
    icon: Building2,
    title: "Commercial Photography",
    description: "Brand and product photography that elevates your business. Perfect for catalogs, e-commerce, and advertising.",
    features: ["Product styling", "High-res images", "Commercial license", "Quick delivery"],
  },
  {
    icon: Plane,
    title: "Pre-Wedding Shoots",
    description: "Romantic pre-wedding and engagement shoots at stunning locations with creative concepts.",
    features: ["Location scouting", "Concept planning", "100+ edited photos", "Highlight video"],
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    description: "Cinematic wedding films and event videos that bring your story to life with emotion and artistry.",
    features: ["4K filming", "Highlight reel", "Full ceremony film", "Drone footage"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Comprehensive photography and videography services tailored to your vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-xl bg-surface border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-gold/10 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
