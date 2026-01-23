import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Analytics Dashboard",
    category: "Web Application",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, user management, and custom reporting features.",
    problem: "Complex data needs to be presented in an intuitive, actionable format.",
    features: ["Real-time charts", "Data filtering", "Export options", "Dark mode"],
    tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    image: "dashboard",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Authentication System",
    category: "Web Application",
    description:
      "A complete authentication system with multi-step onboarding, role-based access control, and seamless user experience.",
    problem: "Users need a secure yet frictionless way to access protected content.",
    features: ["Social login", "Multi-step forms", "Role management", "Session handling"],
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Zod"],
    image: "auth",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "AI Chat Interface",
    category: "Interactive UI",
    description:
      "An AI-powered chat interface with streaming responses, conversation history, and a polished user experience.",
    problem: "AI interactions should feel natural and responsive to users.",
    features: ["Streaming responses", "Chat history", "Code highlighting", "Mobile responsive"],
    tech: ["React", "OpenAI API", "Framer Motion", "TypeScript"],
    image: "ai",
    color: "from-purple-500/20 to-pink-500/20",
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
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my approach to building modern web experiences.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="card-surface-hover overflow-hidden group"
              data-cursor-hover
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image/Preview */}
                <motion.div
                  className={`relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex gap-4">
                      <Button variant="hero" size="lg" className="gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                      <Button variant="hero-outline" size="lg" className="gap-2">
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="w-3/4 aspect-video rounded-lg bg-card border border-border shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-6 bg-secondary flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-2 w-1/3 bg-muted rounded" />
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-2/3 bg-muted rounded" />
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-primary/20 rounded" />
                        <div className="h-12 bg-primary/10 rounded" />
                        <div className="h-12 bg-primary/15 rounded" />
                      </div>
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
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </motion.div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-6 p-4 bg-secondary/50 rounded-lg border-l-2 border-primary">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Challenge: </span>
                      {project.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      What I Built
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                          className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-lg"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground border border-border rounded transition-colors hover:border-primary/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" className="group/btn">
                      Details
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
