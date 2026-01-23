import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "UI/UX",
    skills: ["Modern SaaS UI", "Responsive Design", "Figma", "Framer Motion"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools",
    skills: ["Git", "Electron", "AI APIs", "Vercel"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Product",
    skills: ["MVP Building", "Onboarding Flows", "Dashboards", "Analytics"],
    color: "from-primary to-purple-500",
  },
];

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
            Skills & Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface-hover p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
