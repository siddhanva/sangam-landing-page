import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, BarChart2, Lightbulb, Sparkles, GitFork } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: BookOpen,
    headline: "Teach With Confidence",
    copy: "Build and deliver lessons using our LMS. Embed videos, quizzes, and scaffolded mastery pathways—with guided templates that save time and boost consistency.",
  },
  {
    number: "2",
    icon: BarChart2,
    headline: "Data That Matters",
    copy: "As lessons run, Sangam gathers meaningful signals: mastery scores, engagement trends, and confusion points. All data is anonymized and aggregated to protect student privacy.",
  },
  {
    number: "3",
    icon: Lightbulb,
    headline: "Lessons That Learn",
    copy: "Every lesson becomes part of a growing intelligence system. Sangam surfaces which approaches improve mastery, effective adaptations, and retention trends across classrooms.",
  },
  {
    number: "4",
    icon: Sparkles,
    headline: "Smart Recommendations",
    copy: "Sangam AI suggests improvements based on outcomes, not guesswork. Example: 'Teachers with similar classes saw 22% better mastery by adding a visual model here.'",
  },
  {
    number: "5",
    icon: GitFork,
    headline: "Fork & Adapt",
    copy: "Customize proven lessons by forking them. Modify activities, adjust examples, and re-release. Each fork preserves performance history and attribution.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Collaborative Intelligence in Action
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
                <div className="absolute left-[30px] md:left-[40px] top-20 w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-primary/30 to-accent/30 hidden sm:block" />
              )}

              {/* Step number circle */}
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                  <span className="text-2xl md:text-3xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 bg-muted/30 rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
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
