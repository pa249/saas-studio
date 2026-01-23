import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Building production-ready SaaS applications from scratch",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "Focus on solving real problems, not just writing code",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "MVPs that validate ideas and iterate quickly",
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Every feature designed with the end user in mind",
  },
];

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
            I'm a developer who thinks like a founder. I don't just build features — 
            I build products that solve real problems and deliver measurable value.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With experience in full-stack development and a deep understanding of SaaS 
            business models, I help startups and businesses launch web applications that 
            are built to scale. My focus is on clean code, intuitive UX, and shipping 
            products that users actually want to use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
