import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Flag, School, Target, TrendingUp } from "lucide-react";

const milestones = [
  {
    icon: Rocket,
    date: "Fall 2025",
    title: "Founded at Georgia Tech",
    description: "Team formed around a shared frustration with isolated teaching workflows.",
    completed: true,
  },
  {
    icon: Flag,
    date: "Winter 2026",
    title: "First Pilot Launched",
    description: "3 schools, 40 teachers. Validated core insight-sharing loop with real classrooms.",
    completed: true,
  },
  {
    icon: School,
    date: "Spring 2026",
    title: "District Partnerships",
    description: "Expanded to 5 districts. Launched AI recommendation engine v1.",
    completed: true,
  },
  {
    icon: Target,
    date: "Summer 2026",
    title: "Seed Round & Scale",
    description: "Target: 25 districts, 2,000+ teachers. Launch Fork & Adapt marketplace.",
    completed: false,
  },
  {
    icon: TrendingUp,
    date: "2027",
    title: "Series A & National Expansion",
    description: "Goal: 200+ districts, full AI-driven curriculum intelligence platform.",
    completed: false,
  },
];

export const TractionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden section-padding bg-card" ref={ref}>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8 orb-1" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tl from-sangam-indigo-light/10 to-primary/8 orb-2" />
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
            <TrendingUp size={14} />
            Traction & Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building{" "}
            <span className="gradient-text">Momentum</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From a Georgia Tech dorm room to real classrooms—here's where we've been and where we're going.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-sangam-indigo-light/30 to-primary/10 md:-translate-x-px" />

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * index }}
                className={`relative flex items-start gap-4 md:gap-0 mb-10 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"} ml-12 md:ml-0`}>
                  <div className={`glass-card rounded-xl p-5 card-hover-glow inline-block ${isLeft ? "md:ml-auto" : "md:mr-auto"} max-w-sm`}>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${milestone.completed ? "text-accent" : "text-primary/60"}`}>
                      {milestone.date}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.12 * index + 0.1, type: "spring", stiffness: 200 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      milestone.completed
                        ? "bg-gradient-to-br from-primary to-sangam-indigo-light"
                        : "bg-card border-2 border-dashed border-primary/40"
                    }`}
                  >
                    <milestone.icon className={`w-5 h-5 ${milestone.completed ? "text-primary-foreground" : "text-primary/60"}`} />
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

