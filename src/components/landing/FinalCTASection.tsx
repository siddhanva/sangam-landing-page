import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Shield, Lock, Key, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetEarlyAccessDialog } from "@/components/landing/GetEarlyAccessDialog";

const trustBadges = [
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: CheckCircle, label: "FERPA Certified" },
  { icon: Lock, label: "COPPA Compliant" },
  { icon: Key, label: "256-bit Encryption" },
];

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative section-padding overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, hsl(243 75% 59%) 0%, hsl(244 76% 67%) 50%, hsl(243 75% 55%) 100%)",
      }}
    >
      {/* Animated aurora bg */}
      <div className="absolute inset-0 opacity-40" style={{
        background: "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 50% 20%, rgba(34,211,238,0.08) 0%, transparent 60%)",
        backgroundSize: "200% 200%",
        animation: "aurora-shift 15s ease-in-out infinite",
      }} />

      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 orb-1" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl orb-3" />
      </div>

      {/* Animated floating shapes */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 left-[10%] w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
      />
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 right-[15%] w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
      />
      <motion.div
        animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 right-[8%] w-10 h-10 rounded-lg bg-white/8 backdrop-blur-sm border border-white/15"
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold tracking-wider uppercase mb-8"
          >
            ✨ Get Started Today
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Make Teaching Better?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 leading-relaxed">
            Join our pilot community of innovative educators and start turning your classroom data into shared intelligence.
          </p>
          <p className="text-sm md:text-base text-primary-foreground/70 mb-10 italic">
            Built for students, by students.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <GetEarlyAccessDialog>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 animate-glow-pulse"
              >
                Get Early Access
              </Button>
            </GetEarlyAccessDialog>
            <Button
              size="lg"
              className="bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/20 font-semibold text-base px-8 py-6 gap-2 transition-all hover:-translate-y-0.5"
            >
              <Play size={18} className="fill-current" />
              See Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-primary-foreground/90"
              >
                <badge.icon size={14} />
                <span className="text-xs font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
