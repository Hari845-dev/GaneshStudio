import { motion } from "framer-motion";
import { Award, Camera, Heart, Users } from "lucide-react";
import aboutImg from "@/assets/about-photographer.jpg";

const stats = [
  { icon: Camera, value: "8+", label: "Years Experience" },
  { icon: Heart, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Users, value: "1000+", label: "Events Covered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutImg}
                alt="Ganesh Siliveru - Photographer"
                className="w-full h-[500px] md:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">About Me</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ganesh <span className="text-gradient-gold">Siliveru</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              With over 8 years of experience in wedding and editorial photography,
              I specialize in storytelling through natural light and emotion. Every
              frame I capture is crafted to preserve the authenticity and beauty of
              your most cherished moments.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              As the founder of Sri Gayatri Photo Studio, my philosophy is simple —
              photography is not just about taking pictures, it's about freezing
              feelings in time. From intimate portraits to grand celebrations, I
              bring passion, precision, and artistry to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-lg bg-surface-light"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-sans">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
