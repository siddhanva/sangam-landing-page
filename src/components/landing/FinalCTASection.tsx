import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Shield, Lock, Key, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        background: "linear-gradient(135deg, hsl(243 75% 59%) 0%, hsl(244 76% 67%) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Make Teaching Better?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Join our pilot community of innovative educators and start turning your classroom data into shared intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8 py-6"
            >
              Get Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-white font-semibold text-base px-8 py-6 gap-2"
            >
              <Play size={18} className="fill-current" />
              See Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <badge.icon size={16} />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
