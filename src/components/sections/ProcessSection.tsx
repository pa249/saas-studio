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
    title: "Understand the Problem",
    description:
      "We start by diving deep into your business goals, target users, and the specific problem you're solving. No code until we're aligned.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design the Solution",
    description:
      "I create wireframes and prototypes that map out the user journey, ensuring the solution is intuitive and achieves your goals.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build the MVP",
    description:
      "With a clear plan in place, I build a functional MVP focused on core features — fast, clean, and ready to test with real users.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Iterate with Feedback",
    description:
      "We gather user feedback and refine the product together. This cycle ensures we're building something people actually want.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Ship & Support",
    description:
      "Once polished, we launch your product. I provide ongoing support to ensure smooth operation and help with future iterations.",
  },
];

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
            A proven process that ensures we build the right thing, the right way.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                {/* Content */}
                <div
                  className={`card-surface p-6 ${
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
                    <span className="text-3xl font-bold text-primary/30 font-heading">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

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
