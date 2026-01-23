import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Lock, 
  Sparkles, 
  Monitor, 
  Rocket,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Rocket,
    title: "SaaS MVP Development",
    description:
      "Turn your idea into a working product. I build MVPs that validate your concept and help you get to market fast.",
    features: ["User research", "Core feature development", "Launch-ready product"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    description:
      "Custom dashboards that give you insights and control. Built for scale with clean, intuitive interfaces.",
    features: ["Analytics visualization", "User management", "Data exports"],
  },
  {
    icon: Lock,
    title: "Authentication & Onboarding",
    description:
      "Secure login systems with smooth onboarding flows that convert visitors into engaged users.",
    features: ["Social login", "Multi-step flows", "Role management"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Add AI-powered features to your product using OpenAI, Claude, or custom models for enhanced functionality.",
    features: ["Chat interfaces", "Content generation", "Smart automation"],
  },
  {
    icon: Monitor,
    title: "Web to Desktop Apps",
    description:
      "Transform your web application into a native desktop experience using Electron.",
    features: ["Cross-platform", "Auto-updates", "Offline support"],
  },
];

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
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end development services for startups and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface-hover p-6 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-surface p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Need something custom?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Let's discuss your specific requirements and find the best solution.
            </p>
            <Button variant="hero" asChild>
              <a href="#contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
