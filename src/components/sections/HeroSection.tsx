import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-3d.jpg";

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic backdrop image (LCP) */}
      <motion.img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textRevealVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-card/60 backdrop-blur-md border border-border"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium text-foreground/80 tracking-wide uppercase">
              Available for select projects · Q2
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textRevealVariants}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight"
            >
              Crafted web experiences,
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-6">
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textRevealVariants}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-gradient italic font-serif" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>engineered</span>
              <span className="text-foreground"> with intent.</span>
            </motion.h1>
          </div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textRevealVariants}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Pyrothrex</span> — a frontend developer
            building precise, performant interfaces for teams who care about every pixel,
            every interaction, every millisecond.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textRevealVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#projects">
                See Selected Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="group">
              <a href="#contact">
                <span className="relative">
                  Start a Project
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textRevealVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
          >
            <span>React · Next.js</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>TypeScript</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>Three.js</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>Motion Design</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
