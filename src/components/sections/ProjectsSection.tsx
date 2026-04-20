import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/project-dashboard.jpg";
import authImg from "@/assets/project-auth.jpg";
import aiImg from "@/assets/project-ai.jpg";

const projects = [
  {
    title: "Lumen Analytics",
    category: "Dashboard · Data Viz",
    description:
      "A real-time analytics surface where every chart, filter, and animation was tuned for clarity over decoration.",
    problem: "Operators were drowning in raw numbers — needed signal, not noise.",
    features: ["Streaming charts", "Composable filters", "CSV / PDF export", "Native dark UI"],
    tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    image: dashboardImg,
  },
  {
    title: "Atlas Onboarding",
    category: "Auth · Onboarding Flow",
    description:
      "A multi-step authentication and onboarding flow designed to feel like a single, weightless gesture from sign-up to first action.",
    problem: "Friction in onboarding was killing activation before users ever saw the product.",
    features: ["Social sign-in", "Progressive forms", "Role-based access", "Persistent sessions"],
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Zod"],
    image: authImg,
  },
  {
    title: "Vesper Chat",
    category: "AI Interface · Streaming UI",
    description:
      "A conversational AI interface where streaming response, code rendering, and motion are choreographed to feel inevitable, not engineered.",
    problem: "Most AI UIs treat streaming as a technical detail — it should feel like a presence.",
    features: ["Token-by-token streaming", "Threaded history", "Syntax highlighting", "Adaptive layout"],
    tech: ["React", "OpenAI API", "Framer Motion", "TypeScript"],
    image: aiImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">— Selected Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Three projects,
            <span className="text-muted-foreground"> fully considered.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Not a portfolio dump — a small set of builds that show how I think about interface,
            interaction, and the thousand small choices in between.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="card-surface overflow-hidden group transition-all duration-500 hover:border-primary/30"
              data-cursor-hover
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image/Preview */}
                <motion.div
                  className="relative h-64 lg:h-auto min-h-[340px] overflow-hidden bg-background"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1600}
                    height={1024}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r" />

                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-background/85 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="flex gap-4">
                      <Button variant="hero" size="lg" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button variant="hero-outline" size="lg" className="gap-2">
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Project Details */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                  </motion.div>

                  <h3 className="font-heading text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6 pl-4 border-l border-primary/40">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">The problem</p>
                    <p className="text-sm text-foreground/80 italic">{project.problem}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">What I built</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                          className="px-3 py-1 text-xs bg-secondary/60 text-foreground/80 rounded-md border border-border/60"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-muted-foreground"
                        >
                          {tech} ·
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" className="group/btn shrink-0">
                      Case study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
