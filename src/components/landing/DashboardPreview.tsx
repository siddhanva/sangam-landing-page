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
    <div className="relative">
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
        className="bg-card rounded-2xl shadow-float p-6 border border-border tilt-card"
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-foreground">Mastery Dashboard</h3>
            <p className="text-sm text-muted-foreground">Week of Feb 3, 2026</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
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
                    className={`flex-1 h-8 rounded ${getHeatmapColor(value)} flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-medium text-primary-foreground">
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

      {/* AI Insight card — positioned below the dashboard so the heatmap stays visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-4 bg-card rounded-xl shadow-elevated p-4 border border-border"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <span className="text-accent text-sm">✨</span>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">AI Insight</p>
            <p className="text-[11px] text-muted-foreground">
              Adding visual models here improved mastery by 22%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
