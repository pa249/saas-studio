import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    number: "01",
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "CSS3", "Framer Motion", "Three.js"],
    number: "02",
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Supabase"],
    number: "03",
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Vite", "Figma", "Vercel"],
    number: "04",
  },
  {
    title: "Craft & Detail",
    skills: ["Motion Design", "Accessibility", "SEO", "Performance"],
    number: "05",
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

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">— Toolkit</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            The instruments
            <span className="text-muted-foreground"> behind the work.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A focused stack chosen for stability, speed, and fidelity — not novelty.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-card/80 backdrop-blur-sm p-8 group relative transition-colors duration-500 hover:bg-card"
              data-cursor-hover
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-heading font-semibold text-foreground text-lg">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">
                  {category.number}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium bg-background/50 text-foreground/80 rounded-md border border-border/60 transition-colors hover:border-primary/40 hover:text-foreground cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              {/* hover accent line */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
