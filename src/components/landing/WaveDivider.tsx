interface WaveDividerProps {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
  className?: string;
}

export const WaveDivider = ({
  flip = false,
  fromColor = "hsl(var(--background))",
  toColor = "hsl(var(--card))",
  className = "",
}: WaveDividerProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] lg:h-[80px]"
      >
        <defs>
          <linearGradient id={`wave-grad-${flip ? "flip" : "normal"}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
            <stop offset="50%" stopColor="hsl(var(--sangam-indigo-light))" stopOpacity="0.04" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={toColor}
        />
        <path
          d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,55 1440,50 L1440,80 L0,80 Z"
          fill={`url(#wave-grad-${flip ? "flip" : "normal"})`}
        />
      </svg>
    </div>
  );
};

