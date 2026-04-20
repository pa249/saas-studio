import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">— Contact</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Have something
                <br />
                <span className="text-gradient">worth building?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I respond to every serious inquiry within 24 hours. Tell me about the project,
                the deadline, and what "done" looks like — I'll tell you honestly whether I'm the right fit.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@pyrothrex.dev"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  data-cursor-hover
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email me at</p>
                    <p className="font-medium text-foreground">hello@pyrothrex.dev</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  data-cursor-hover
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Schedule a call</p>
                    <p className="font-medium text-foreground">Book on Calendly</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="card-surface p-8">
                <div className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <motion.div
                      animate={{
                        boxShadow: focusedField === 'name' 
                          ? '0 0 0 2px hsl(var(--primary) / 0.3)' 
                          : '0 0 0 0px transparent'
                      }}
                      className="rounded-md"
                    >
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-secondary border-border transition-all duration-300"
                        maxLength={100}
                      />
                    </motion.div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <motion.div
                      animate={{
                        boxShadow: focusedField === 'email' 
                          ? '0 0 0 2px hsl(var(--primary) / 0.3)' 
                          : '0 0 0 0px transparent'
                      }}
                      className="rounded-md"
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-secondary border-border transition-all duration-300"
                        maxLength={255}
                      />
                    </motion.div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <motion.div
                      animate={{
                        boxShadow: focusedField === 'message' 
                          ? '0 0 0 2px hsl(var(--primary) / 0.3)' 
                          : '0 0 0 0px transparent'
                      }}
                      className="rounded-md"
                    >
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-secondary border-border resize-none transition-all duration-300"
                        maxLength={1000}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          Sending...
                        </motion.span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
