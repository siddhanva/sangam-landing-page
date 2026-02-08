import { motion } from "framer-motion";

export const DashboardPreview = () => {
  // Mastery heatmap data
  const heatmapData = [
    [85, 92, 78, 88, 95, 72, 89],
    [90, 85, 82, 91, 88, 84, 87],
    [75, 88, 94, 79, 86, 92, 81],
    [88, 91, 85, 90, 83, 87, 94],
    [82, 76, 89, 85, 91, 88, 79],
  ];

  const getHeatmapColor = (value: number) => {
    if (value >= 90) return "bg-accent";
    if (value >= 80) return "bg-primary";
    if (value >= 70) return "bg-primary/60";
    return "bg-primary/30";
  };

  return (
    <div className="relative" role="img" aria-label="Sangam dashboard showing student mastery heatmap with AI-generated insights">
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary/30 to-sangam-indigo-light/30 rounded-2xl blur-sm"
      />
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tr from-sangam-indigo-light/30 to-primary/30 rounded-full blur-sm"
      />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-card rounded-[20px] p-6 border border-border tilt-card"
        style={{
          filter: "drop-shadow(0 25px 50px rgba(99, 102, 241, 0.18))",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 20px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-foreground">Mastery Dashboard</h3>
            <p className="text-sm text-muted-foreground">Week of Feb 3, 2026</p>
          </div>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-emerald-500 text-white rounded-full uppercase tracking-wider">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-white inline-block"
              />
              Live
            </span>
          </div>
        </div>

        {/* Mastery Heatmap */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
            Student Mastery by Objective
          </p>
          <div className="grid gap-1">
            {heatmapData.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex gap-1"
              >
                {row.map((value, j) => (
                  <motion.div
                    key={j}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 + j * 0.03 }}
                    className={`flex-1 h-8 rounded-md ${getHeatmapColor(value)} flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]`}
                  >
                    <span className="text-[10px] font-semibold text-primary-foreground">
                      {value}%
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Chart Preview */}
        <div className="bg-muted/50 rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
            Lesson Performance Trend
          </p>
          <svg viewBox="0 0 300 80" className="w-full h-16">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,60 Q30,50 60,45 T120,35 T180,40 T240,25 T300,20"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <motion.path
              d="M0,60 Q30,50 60,45 T120,35 T180,40 T240,25 T300,20 V80 H0 Z"
              fill="url(#areaGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </svg>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            { label: "Avg Mastery", value: "87%", change: "+5%" },
            { label: "Engagement", value: "94%", change: "+12%" },
            { label: "Completion", value: "91%", change: "+8%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <span className="text-xs font-medium text-accent">{stat.change}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Insight bubble — floats alongside the dashboard like a living tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
        className="absolute -right-4 top-[40%] z-10 hidden sm:block"
      >
        <motion.div
          animate={{
            x: [0, 8, -4, 6, 0],
            y: [0, -10, 6, -8, 0],
            rotate: [0, 2, -1, 1.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-card/95 backdrop-blur-md rounded-2xl shadow-float p-4 border border-border max-w-[200px]"
        >
          <div className="flex items-start gap-3">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-6 flex-shrink-0"
            >
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ai-grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5b52e6" />
                    <stop offset="100%" stopColor="#7168ea" />
                  </linearGradient>
                  <linearGradient id="ai-grad-teal" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7168ea" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="27" stroke="url(#ai-grad-indigo)" strokeWidth="2.5" fill="none" opacity="0.3"/>
                <path d="M19 13C22 22 27 27 32 32" stroke="url(#ai-grad-indigo)" strokeWidth="3.8" strokeLinecap="round" fill="none"/>
                <path d="M9 42C19 39 25 35 32 32" stroke="url(#ai-grad-indigo)" strokeWidth="3.8" strokeLinecap="round" fill="none"/>
                <path d="M55 42C45 39 39 35 32 32" stroke="url(#ai-grad-teal)" strokeWidth="3.8" strokeLinecap="round" fill="none"/>
                <circle cx="32" cy="32" r="5.5" fill="url(#ai-grad-indigo)"/>
                <circle cx="32" cy="32" r="2.2" fill="white" opacity="0.9"/>
                <circle cx="32" cy="32" r="13" stroke="url(#ai-grad-teal)" strokeWidth="1.5" fill="none" opacity="0.25"/>
              </svg>
            </motion.div>
            <div>
              <p className="text-xs font-semibold text-foreground">AI Insight</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Adding visual models here improved mastery by 22%
              </p>
            </div>
          </div>
          {/* Bubble tail */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-card/95 border-l border-b border-border rotate-45" />
        </motion.div>
      </motion.div>
    </div>
  );
};
