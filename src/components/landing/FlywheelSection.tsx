import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sparkles, GitFork, Zap } from "lucide-react";

const highlights = [
  { icon: Users, text: "Contribute", sub: "Teach a lesson — Sangam captures what worked automatically" },
  { icon: Sparkles, text: "Compound", sub: "AI finds patterns across classrooms no single teacher could see" },
  { icon: GitFork, text: "Fork & Adapt", sub: "Take what works, customize it for your students, share it back" },
];

export const FlywheelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden section-padding bg-card" ref={ref} aria-labelledby="flywheel-heading">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8 orb-1" />
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-tl from-accent/8 to-primary/10 orb-2" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="eyebrow-badge">
            <Zap size={14} />
            Collective Intelligence
          </span>
          <h2 id="flywheel-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Every Teacher Makes It{" "}
            <span className="gradient-text">Better for All</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sangam isn't a static tool — it's a living network that gets smarter with every classroom.
          </p>
        </motion.div>

        {/* ── 3 highlight pills ── */}
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.12 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/10 mb-3 group-hover:from-primary/20 group-hover:to-sangam-indigo-light/20 transition-colors">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-base font-semibold text-foreground mb-1">{h.text}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Fork & Adapt callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-primary/10 overflow-hidden relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-sangam-indigo-light" />
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-elevated">
                <GitFork className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Fork It. Make It Yours. <span className="gradient-text">Share It Back.</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              See a lesson that boosted mastery by 30% in a similar classroom? Fork it with one click, adapt it
              for your students, and release your version. Sangam preserves the full performance lineage — so every
              fork makes the whole network smarter, and every teacher gets credit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
