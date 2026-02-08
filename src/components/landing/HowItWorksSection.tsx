import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, BarChart2, Lightbulb, Sparkles, GitFork, Workflow } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    headline: "Teach With Confidence",
    copy: "Build and deliver lessons using our LMS. Embed videos, quizzes, and scaffolded mastery pathways—with guided templates that save time and boost consistency.",
  },
  {
    number: "02",
    icon: BarChart2,
    headline: "Data That Matters",
    copy: "As lessons run, Sangam gathers meaningful signals: mastery scores, engagement trends, and confusion points. All data is anonymized and aggregated to protect student privacy.",
  },
  {
    number: "03",
    icon: Lightbulb,
    headline: "Lessons That Learn",
    copy: "Every lesson becomes part of a growing intelligence system. Sangam surfaces which approaches improve mastery, effective adaptations, and retention trends across classrooms.",
  },
  {
    number: "04",
    icon: Sparkles,
    headline: "Smart Recommendations",
    copy: "Sangam AI suggests improvements based on outcomes, not guesswork. Example: 'Teachers with similar classes saw 22% better mastery by adding a visual model here.'",
  },
  {
    number: "05",
    icon: GitFork,
    headline: "Fork & Adapt",
    copy: "Customize proven lessons by forking them. Modify activities, adjust examples, and re-release. Each fork preserves performance history and attribution.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative overflow-hidden section-padding bg-card" ref={ref}>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8 orb-1" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-sangam-indigo-light/10 to-primary/8 orb-2" />
      </div>

      {/* Floating accent shapes */}
      <div className="pointer-events-none absolute top-[15%] right-[8%] w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 rotate-12 hidden lg:block orb-3" />
      <div className="pointer-events-none absolute bottom-[20%] left-[5%] w-10 h-10 rounded-full bg-sangam-indigo-light/5 border border-sangam-indigo-light/10 hidden lg:block orb-1" />

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow-badge">
            <Workflow size={14} />
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Collaborative Intelligence{" "}
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sangam turns everyday teaching into a powerful feedback loop—surfacing what works, who it works for, and how to adapt it for your classroom.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="relative flex gap-6 md:gap-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[30px] md:left-[40px] top-20 w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-primary/40 to-sangam-indigo-light/20 hidden sm:block" />
              )}

              {/* Step number circle */}
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-gradient-to-br from-primary to-sangam-indigo-light flex items-center justify-center shadow-lg">
                  <span className="text-lg md:text-xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content card */}
              <div className="group flex-1 glass-card rounded-xl p-6 card-hover-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-sangam-indigo-light/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-sangam-indigo-light/20 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.headline}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
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
