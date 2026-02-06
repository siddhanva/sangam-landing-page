import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Unplug, GraduationCap, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: Clock,
    headline: "10+ Hours Lost Every Week",
    copy: "Teachers reinvent lessons others have already perfected—wasting time on trial and error.",
  },
  {
    icon: Unplug,
    headline: "Quality Depends on Luck",
    copy: "Instruction effectiveness varies by classroom, not by evidence or shared knowledge.",
  },
  {
    icon: GraduationCap,
    headline: "Generic Professional Development",
    copy: "PD is disconnected from real student outcomes and classroom-specific needs.",
  },
  {
    icon: BarChart3,
    headline: "LMS Tools Focus on Delivery, Not Insight",
    copy: "Current platforms deliver content but don't learn from results or help teachers improve.",
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-muted/50 section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Teaching Shouldn't Feel This Isolated
          </h2>
          <p className="text-lg text-muted-foreground">
            Even in the digital age, teachers face challenges that keep them from doing their best work.
          </p>
        </motion.div>

        {/* Problem cards grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.headline}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.copy}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xl md:text-2xl font-medium text-primary mt-16 max-w-3xl mx-auto"
        >
          There's a better way. Real classroom data should help teachers teach better—not just grade faster.
        </motion.p>
      </div>
    </section>
  );
};
