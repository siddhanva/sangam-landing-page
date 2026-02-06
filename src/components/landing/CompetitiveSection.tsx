import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

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
    <section className="bg-muted/50 section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Sangam Wins
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-border"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 bg-foreground text-primary-foreground">
            <div className="p-4 font-semibold">Competitor</div>
            <div className="p-4 font-semibold">What They Do</div>
            <div className="p-4 font-semibold">What Sangam Does</div>
          </div>

          {/* Data rows */}
          {competitors.map((row, index) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * (index + 2) }}
              className={`grid grid-cols-3 ${
                index % 2 === 0 ? "bg-card" : "bg-muted/30"
              }`}
            >
              <div className="p-4 font-medium text-foreground flex items-center gap-2">
                {row.name}
              </div>
              <div className="p-4 text-muted-foreground flex items-center gap-2">
                <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                {row.whatTheyDo}
              </div>
              <div className="p-4 text-foreground flex items-center gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
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
          className="text-center text-lg md:text-xl font-medium text-primary mt-12 max-w-3xl mx-auto"
        >
          Sangam strengthens schools by making instructional improvement measurable, collaborative, and continuous.
        </motion.p>
      </div>
    </section>
  );
};
