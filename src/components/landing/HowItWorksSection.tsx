import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, BarChart2, Sparkles, Workflow, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    headline: "Teach & Deliver",
    copy: "Build lessons with guided templates—embed videos, quizzes, and scaffolded mastery pathways. Sangam captures meaningful signals as students engage: mastery scores, confusion points, and engagement trends.",
  },
  {
    number: "02",
    icon: BarChart2,
    headline: "Insight Engine",
    copy: "Every lesson becomes part of a growing intelligence system. Sangam surfaces which approaches improve mastery across classrooms—not just in yours, but across your school and district. All data is anonymized and aggregated.",
  },
  {
    number: "03",
    icon: Sparkles,
    headline: "Adapt & Improve",
    copy: "Sangam AI suggests improvements based on real outcomes. Fork proven lessons, customize them for your classroom, and re-release. Each adaptation preserves performance history, attribution, and what actually moved the needle.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative overflow-hidden section-padding bg-card" ref={ref} aria-labelledby="hiw-heading">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8 orb-1" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-sangam-indigo-light/10 to-primary/8 orb-2" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="eyebrow-badge">
            <Workflow size={14} />
            How It Works
          </span>
          <h2 id="hiw-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Steps to{" "}
            <span className="gradient-text">Smarter Teaching</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Teach → Data → Insights → Adapt. Sangam turns everyday teaching into a feedback loop that compounds intelligence across classrooms.
          </p>
        </motion.div>

        {/* Quick visual flow — the 3-step overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-14 max-w-2xl mx-auto"
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-sangam-indigo-light/10 border border-primary/15">
                <step.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">{step.headline}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-primary/40 flex-shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Detailed step cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) + 0.2 }}
              className="group relative glass-card rounded-2xl overflow-hidden card-hover-glow tilt-card"
            >
              {/* Gradient top bar */}
              <div className="pointer-events-none h-1 bg-gradient-to-r from-primary to-sangam-indigo-light opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-sangam-indigo-light flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-sangam-indigo-light/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-sangam-indigo-light/20 transition-colors">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
