import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Trophy } from "lucide-react";

const competitors = [
  {
    name: "Canvas / Schoology",
    whatTheyDo: "Deliver assignments",
    whatSangamDoes: "Learn from outcomes and recommend improvements",
  },
  {
    name: "Teachers Pay Teachers",
    whatTheyDo: "Sell static resources",
    whatSangamDoes: "Show performance data and adaptation history",
  },
  {
    name: "AI Tutor Platforms",
    whatTheyDo: "Teach students directly",
    whatSangamDoes: "Amplify teacher effectiveness with real classroom insights",
  },
];

export const CompetitiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-muted/50 section-padding" ref={ref}>
      {/* Subtle background accents */}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow-badge">
            <Trophy size={14} />
            Competitive Edge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Sangam{" "}
            <span className="gradient-text">Wins</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-float bg-card/60 backdrop-blur-sm"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground">
            <div className="p-5 font-semibold">Competitor</div>
            <div className="p-5 font-semibold">What They Do</div>
            <div className="p-5 font-semibold">What Sangam Does</div>
          </div>

          {/* Data rows */}
          {competitors.map((row, index) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * (index + 2) }}
              className={`grid grid-cols-3 transition-colors duration-200 hover:bg-primary/5 ${
                index % 2 === 0 ? "bg-card/80" : "bg-muted/20"
              } ${index < competitors.length - 1 ? "border-b border-border/50" : ""}`}
            >
              <div className="p-5 font-medium text-foreground flex items-center gap-2">
                {row.name}
              </div>
              <div className="p-5 text-muted-foreground flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-destructive/70" />
                </div>
                {row.whatTheyDo}
              </div>
              <div className="p-5 text-foreground flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                {row.whatSangamDoes}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl font-semibold mt-12 max-w-3xl mx-auto gradient-text"
        >
          Sangam strengthens schools by making instructional improvement measurable, collaborative, and continuous.
        </motion.p>
      </div>
    </section>
  );
};
