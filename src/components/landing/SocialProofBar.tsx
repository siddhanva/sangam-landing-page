import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { LogoMarquee } from "./LogoMarquee";

const stats = [
  { value: 50, suffix: "+", label: "Partner Districts" },
  { value: 10000, suffix: "+", label: "Educators Onboarded" },
  { value: 2, suffix: "M+", label: "Lessons Delivered" },
  { value: 22, suffix: "%", label: "Avg Mastery Improvement" },
];

function useAnimatedCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, index, isInView }: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  isInView: boolean;
}) {
  const animatedValue = useAnimatedCounter(value, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="text-center px-6 py-4 group"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform">
        {value >= 1000000
          ? (animatedValue / 1000000).toFixed(animatedValue >= value ? 0 : 1) + suffix.replace("+", "M+").replace("M+M+", "M+")
          : value >= 1000
          ? Math.floor(animatedValue / 1000) + "K" + suffix
          : animatedValue + suffix}
      </div>
      <p className="text-sm md:text-base text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

export const SocialProofBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="section-divider" />

      <div className="py-12 md:py-16 bg-card relative">
        {/* Subtle bg accent */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-sangam-indigo-light/[0.02]" />

        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling partner logos marquee */}
      <LogoMarquee />

      <div className="section-divider" />
    </section>
  );
};
