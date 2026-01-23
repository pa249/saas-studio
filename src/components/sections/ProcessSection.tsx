import { motion } from "framer-motion";
import { 
  MessageSquare, 
  PenTool, 
  Code2, 
  RefreshCw, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Planning",
    description:
      "We start by understanding your project goals, target audience, and technical requirements. Clear communication ensures we're aligned from day one.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Prototyping",
    description:
      "I create wireframes and interactive prototypes that map out the user experience, ensuring the solution is intuitive before writing code.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "With a clear plan in place, I build your project using modern technologies — clean, maintainable code that's ready for production.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Review & Iterate",
    description:
      "We review the work together and refine based on your feedback. This iterative process ensures the final result meets your expectations.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Once polished, we launch your project. I provide documentation and support to ensure everything runs smoothly post-launch.",
  },
];

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeInOut" as const,
    },
  },
};

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, collaborative process that delivers results.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block origin-top"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on line */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 500, damping: 15 }}
                />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`card-surface p-6 cursor-pointer ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <motion.span 
                      className="text-3xl font-bold text-primary/30 font-heading"
                      whileHover={{ color: 'hsl(var(--primary))' }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>

                {/* Empty space for alignment */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : (
                  <div className="hidden md:block order-first" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
