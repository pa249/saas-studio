import { motion } from "framer-motion";
import { Code2, Palette, Zap, Monitor } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building performant, accessible interfaces with React & TypeScript",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description: "Translating designs into pixel-perfect, responsive experiences",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimizing for speed, accessibility, and smooth interactions",
  },
  {
    icon: Monitor,
    title: "Modern Tooling",
    description: "Leveraging cutting-edge frameworks and development practices",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm <span className="text-foreground font-semibold">Pyrothrex</span> — a frontend-focused web developer 
            passionate about crafting beautiful, interactive digital experiences. I combine clean 
            code with thoughtful design to build websites that are fast, accessible, and engaging.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong foundation in modern JavaScript frameworks and a keen eye for UI/UX, 
            I specialize in turning complex requirements into intuitive interfaces. Whether it's 
            a marketing site, web application, or interactive dashboard — I focus on performance 
            and attention to detail.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-surface p-6 text-center group cursor-pointer"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              </motion.div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
