import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Palette, 
  Smartphone, 
  Zap,
  Code2,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive web applications with React, Next.js, and TypeScript. Clean code that scales.",
    features: ["React & Next.js", "TypeScript", "Performance optimization"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin UIs",
    description:
      "Custom dashboards and admin panels with data visualization, filtering, and intuitive user interfaces.",
    features: ["Data visualization", "Interactive tables", "Real-time updates"],
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description:
      "Turning designs into pixel-perfect, responsive interfaces. From Figma to production-ready code.",
    features: ["Figma to code", "Responsive design", "Animation & motion"],
  },
  {
    icon: Smartphone,
    title: "Responsive Websites",
    description:
      "Fast, SEO-friendly websites that look great on every device. Marketing sites, portfolios, and landing pages.",
    features: ["Mobile-first", "SEO optimized", "Fast loading"],
  },
  {
    icon: Zap,
    title: "Interactive Experiences",
    description:
      "Engaging micro-interactions, animations, and interactive elements that enhance user experience.",
    features: ["Framer Motion", "Custom animations", "Smooth transitions"],
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web development services focused on quality, performance, and user experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="card-surface-hover p-6 group flex flex-col cursor-pointer"
              data-cursor-hover
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <service.icon className="w-6 h-6 text-primary" />
              </motion.div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="card-surface p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 cursor-pointer"
            data-cursor-hover
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Let's discuss how I can help bring your vision to life.
            </p>
            <Button variant="hero" asChild className="group">
              <a href="#contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
