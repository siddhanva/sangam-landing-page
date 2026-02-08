import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, BarChart3 } from "lucide-react";

const features = [
  "Live Mastery Heatmaps",
  "Lesson Performance Metrics",
  "Student Group Insights",
  "Actionable Signals, Not Noise",
];

const tabs = ["Mastery", "Engagement", "Performance"];

export const AnalyticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="relative overflow-hidden bg-muted/50 section-padding" ref={ref} aria-labelledby="analytics-heading">
      {/* Background personality */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/12 to-sangam-indigo-light/10 orb-2" />
        <div className="absolute -bottom-28 -left-24 w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr from-sangam-indigo-light/10 to-primary/10 orb-1" />
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
            <BarChart3 size={14} />
            Analytics
          </span>
          <h2 id="analytics-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Analytics That Actually{" "}
            <span className="gradient-text">Change How You Teach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            See patterns across your classroom in seconds. Get specific, actionable recommendations—not endless charts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Sangam surfaces high-impact insights at a glance—mastery heatmaps, lesson performance, and actionable signals that show where students struggle and how other teachers solved the same challenge.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) + 0.2 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-sangam-indigo-light/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-sangam-indigo-light/30 transition-colors">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative glass-card rounded-2xl shadow-float p-6 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sangam-indigo-light to-accent opacity-70" />
            {/* Tabs */}
            <div className="flex gap-1 mb-6 p-1 bg-muted/50 rounded-lg w-fit">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === index
                      ? "bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[300px]">
              {activeTab === 0 && <MasteryChart />}
              {activeTab === 1 && <EngagementChart />}
              {activeTab === 2 && <PerformanceChart />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MasteryChart = () => {
  const data = [
    [95, 88, 72, 91, 85],
    [82, 94, 87, 76, 90],
    [88, 79, 93, 85, 81],
    [91, 86, 84, 92, 78],
  ];
  const labels = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"];
  const students = ["Student 1", "Student 2", "Student 3", "Student 4"];

  const getColor = (val: number) => {
    if (val >= 90) return "bg-accent";
    if (val >= 80) return "bg-primary";
    if (val >= 70) return "bg-primary/60";
    return "bg-primary/30";
  };

  return (
    <div>
      <div className="flex gap-2 mb-2 ml-20">
        {labels.map((label) => (
          <div key={label} className="flex-1 text-xs text-center text-muted-foreground">
            {label}
          </div>
        ))}
      </div>
      {data.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="w-16 text-xs text-muted-foreground text-right">
            {students[i]}
          </span>
          {row.map((val, j) => (
            <motion.div
              key={j}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * i + 0.05 * j }}
              className={`flex-1 h-12 rounded-lg ${getColor(val)} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}
              title={`${students[i]} - ${labels[j]}: ${val}%`}
            >
              <span className="text-xs font-semibold text-primary-foreground">
                {val}%
              </span>
            </motion.div>
          ))}
        </motion.div>
      ))}
      <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-accent" /> 90%+</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary" /> 80-89%</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary/60" /> 70-79%</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary/30" /> &lt;70%</span>
      </div>
    </div>
  );
};

const EngagementChart = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <svg viewBox="0 0 400 200" className="w-full">
        <defs>
          <linearGradient id="engGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="40" y1={40 + i * 35} x2="380" y2={40 + i * 35} stroke="hsl(var(--border))" strokeWidth="1" />
        ))}
        <motion.path
          d="M40,160 L80,140 L120,120 L160,100 L200,110 L240,80 L280,60 L320,70 L360,50 L380,55 L380,180 L40,180 Z"
          fill="url(#engGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.path
          d="M40,160 L80,140 L120,120 L160,100 L200,110 L240,80 L280,60 L320,70 L360,50 L380,55"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        {[[40, 160], [80, 140], [120, 120], [160, 100], [200, 110], [240, 80], [280, 60], [320, 70], [360, 50], [380, 55]].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="hsl(var(--card))"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * i + 0.5 }}
          />
        ))}
        <text x="40" y="195" className="text-xs" fill="hsl(var(--muted-foreground))">Week 1</text>
        <text x="200" y="195" className="text-xs" fill="hsl(var(--muted-foreground))">Week 5</text>
        <text x="360" y="195" className="text-xs" fill="hsl(var(--muted-foreground))">Week 10</text>
      </svg>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Engagement increased <span className="font-semibold text-accent">35%</span> over 10 weeks
      </p>
    </div>
  );
};

const PerformanceChart = () => {
  const data = [
    { label: "Your Class", value: 87, gradient: true },
    { label: "School Avg", value: 72, gradient: false },
    { label: "District Avg", value: 68, gradient: false },
    { label: "Top 10%", value: 94, gradient: true },
  ];

  return (
    <div className="space-y-6 py-4">
      {data.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-foreground">{item.label}</span>
            <span className="text-sm font-bold text-foreground">{item.value}%</span>
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${item.gradient ? "bg-gradient-to-r from-primary to-sangam-indigo-light" : "bg-primary/50"}`}
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
            />
          </div>
        </motion.div>
      ))}
      <p className="text-center text-sm text-muted-foreground mt-6">
        Performance compared to similar demographics
      </p>
    </div>
  );
};
