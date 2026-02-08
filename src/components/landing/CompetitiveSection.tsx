import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Minus, Trophy, Clock, Unplug, GraduationCap, BarChart3, AlertTriangle } from "lucide-react";

/* ─── Problem pain points ─── */
const problems = [
  {
    icon: Clock,
    stat: "10+ hrs/week",
    headline: "Wasted on Reinvention",
    copy: "Teachers rebuild lessons others have already perfected—trial and error instead of shared evidence.",
  },
  {
    icon: Unplug,
    stat: "0 visibility",
    headline: "Isolated Classrooms",
    copy: "Quality depends on luck, not data. There's no system to learn from what's working across the hall—or across the district.",
  },
  {
    icon: GraduationCap,
    stat: "Generic PD",
    headline: "One-Size-Fits-All Training",
    copy: "Professional development is disconnected from real student outcomes and classroom-specific needs.",
  },
  {
    icon: BarChart3,
    stat: "Delivery ≠ Insight",
    headline: "LMS Tools Miss the Point",
    copy: "Current platforms deliver content but don't learn from results or help teachers improve over time.",
  },
];

/* ─── Comparison matrix ─── */
const dimensions = [
  "AI-Driven Recommendations",
  "Cross-Classroom Insights",
  "Compounding Network Effect",
  "Fork & Adapt Lessons",
  "Real-Time Mastery Analytics",
  "Teacher Attribution",
  "FERPA & COPPA Compliant",
  "Price Per Teacher",
];

const competitors = [
  { name: "Sangam", highlight: true, values: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "$15/mo"] },
  { name: "Canvas / Schoology", highlight: false, values: ["✗", "✗", "✗", "✗", "Partial", "✗", "✓", "$$$"] },
  { name: "Teachers Pay Teachers", highlight: false, values: ["✗", "✗", "✗", "✗", "✗", "Partial", "N/A", "Per resource"] },
  { name: "AI Tutor Platforms", highlight: false, values: ["Partial", "✗", "✗", "✗", "Partial", "✗", "Varies", "$$$"] },
];

function CellIcon({ value }: { value: string }) {
  if (value === "✓") {
    return (
      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-accent" />
      </div>
    );
  }
  if (value === "✗") {
    return (
      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-destructive/60" />
      </div>
    );
  }
  if (value === "Partial" || value === "Varies" || value === "N/A") {
    return (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center">
          <Minus className="w-3.5 h-3.5 text-yellow-600/70" />
        </div>
        <span className="text-xs text-muted-foreground">{value}</span>
      </div>
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export const CompetitiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-muted/50 section-padding" ref={ref} aria-labelledby="compete-heading">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -right-20 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/12 to-sangam-indigo-light/10 orb-2" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-sangam-indigo-light/10 to-primary/10 orb-1" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="eyebrow-badge">
            <AlertTriangle size={14} />
            The Problem &amp; Our Edge
          </span>
          <h2 id="compete-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Teaching Shouldn't Feel This{" "}
            <span className="gradient-text">Isolated</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg text-muted-foreground">
            Existing EdTech delivers content but ignores outcomes. Teachers are left reinventing the wheel in isolation—and students pay the price.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.headline}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i + 0.3 }}
              className="group relative glass-card rounded-xl p-5 card-hover-glow overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary to-sangam-indigo-light opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-sangam-indigo-light/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-sangam-indigo-light/20 transition-colors">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary/70 uppercase tracking-wider">{problem.stat}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{problem.headline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.copy}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Competitive Comparison ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            How Sangam{" "}
            <span className="gradient-text">Compares</span>
          </h3>
          <p className="text-base text-muted-foreground mt-3">
            Others deliver content. Sangam learns from outcomes and compounds intelligence across classrooms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border shadow-float bg-card/60 backdrop-blur-sm"
        >
          {/* Header row */}
          <div className="grid grid-cols-5 min-w-[700px]">
            <div className="p-4 font-semibold text-sm text-muted-foreground bg-muted/30 border-b border-border">
              Capability
            </div>
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className={`p-4 font-semibold text-sm border-b border-border text-center ${
                  comp.highlight
                    ? "bg-gradient-to-b from-primary/10 to-primary/5 text-primary"
                    : "bg-muted/30 text-foreground"
                }`}
              >
                {comp.name}
                {comp.highlight && (
                  <span className="block text-[10px] font-normal text-accent mt-0.5">★ Our Platform</span>
                )}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {dimensions.map((dimension, rowIdx) => (
            <motion.div
              key={dimension}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.04 * rowIdx + 0.35 }}
              className={`grid grid-cols-5 min-w-[700px] transition-colors hover:bg-primary/[0.03] ${
                rowIdx < dimensions.length - 1 ? "border-b border-border/40" : ""
              }`}
            >
              <div className="p-4 text-sm font-medium text-foreground">{dimension}</div>
              {competitors.map((comp) => (
                <div
                  key={`${comp.name}-${dimension}`}
                  className={`p-4 flex items-center justify-center ${comp.highlight ? "bg-primary/[0.03]" : ""}`}
                >
                  <CellIcon value={comp.values[rowIdx]} />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
