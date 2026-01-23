import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
    glowColor: "group-hover:shadow-blue-500/20",
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "CSS3", "Framer Motion", "Responsive Design"],
    color: "from-purple-500 to-pink-500",
    glowColor: "group-hover:shadow-purple-500/20",
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Supabase"],
    color: "from-green-500 to-emerald-500",
    glowColor: "group-hover:shadow-green-500/20",
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "VS Code", "Figma", "Vercel"],
    color: "from-orange-500 to-amber-500",
    glowColor: "group-hover:shadow-orange-500/20",
  },
  {
    title: "Other Skills",
    skills: ["Electron", "AI APIs", "SEO", "Performance Optimization"],
    color: "from-primary to-purple-500",
    glowColor: "group-hover:shadow-primary/20",
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
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className={`card-surface-hover p-6 group cursor-pointer transition-shadow duration-300 hover:shadow-xl ${category.glowColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <h3 className="font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'hsl(var(--primary) / 0.15)',
                    }}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
