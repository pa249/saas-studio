import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description:
      "A comprehensive analytics dashboard for SaaS businesses to track metrics, manage users, and visualize growth data in real-time.",
    problem: "SaaS founders struggle to get a unified view of their key metrics across different tools.",
    features: ["Real-time analytics", "User management", "Revenue tracking", "Custom reports"],
    tech: ["React", "TypeScript", "Supabase", "Recharts"],
    image: "dashboard",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Auth & Onboarding System",
    category: "Authentication",
    description:
      "A complete authentication system with multi-step onboarding, role-based access control, and team invitations.",
    problem: "Most apps lose users during signup because of poor onboarding experiences.",
    features: ["Social login", "Multi-step onboarding", "Role-based access", "Team management"],
    tech: ["Next.js", "Supabase Auth", "Tailwind", "Zod"],
    image: "auth",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "AI Content Assistant",
    category: "AI Integration",
    description:
      "An AI-powered writing assistant that helps users generate, edit, and optimize content for various platforms.",
    problem: "Creating consistent, high-quality content is time-consuming and requires expertise.",
    features: ["AI generation", "Tone adjustment", "SEO optimization", "Template library"],
    tech: ["React", "OpenAI API", "Node.js", "PostgreSQL"],
    image: "ai",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

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
            Real products built with a focus on user experience and business outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface-hover overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image/Preview */}
                <div
                  className={`relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <div className="w-3/4 aspect-video rounded-lg bg-card border border-border shadow-2xl overflow-hidden">
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
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-6 p-4 bg-secondary/50 rounded-lg border-l-2 border-primary">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Problem solved: </span>
                      {project.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground border border-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" className="group/btn">
                      View Details
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
