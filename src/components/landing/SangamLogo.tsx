interface SangamLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const SangamLogo = ({ className = "", size = "md", showText = true }: SangamLogoProps) => {
  const sizes = {
    sm: { icon: 24, text: "text-lg", gap: "gap-1.5" },
    md: { icon: 30, text: "text-2xl", gap: "gap-2" },
    lg: { icon: 40, text: "text-3xl", gap: "gap-2.5" },
  };

  const { icon, text, gap } = sizes[size];

  return (
    <span className={`inline-flex items-center ${gap} ${className}`}>
      {/* Icon mark — three flowing paths meeting at a point ("Sangam" = confluence) */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sangam-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(243 75% 59%)" />
            <stop offset="100%" stopColor="hsl(244 76% 67%)" />
          </linearGradient>
          <linearGradient id="sangam-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(244 76% 67%)" />
            <stop offset="100%" stopColor="hsl(189 94% 53%)" />
          </linearGradient>
        </defs>

        {/* Outer ring — represents the ecosystem */}
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="url(#sangam-grad-1)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.3"
        />

        {/* Three converging arcs — represent collaboration / confluence */}
        {/* Top stream */}
        <path
          d="M12 8C14 14 17 17 20 20"
          stroke="url(#sangam-grad-1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left stream */}
        <path
          d="M6 26C12 24 16 22 20 20"
          stroke="url(#sangam-grad-1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right stream */}
        <path
          d="M34 26C28 24 24 22 20 20"
          stroke="url(#sangam-grad-2)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Center confluence point */}
        <circle cx="20" cy="20" r="3.5" fill="url(#sangam-grad-1)" />
        <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.9" />

        {/* Outward ripple — represents impact / growth */}
        <circle
          cx="20"
          cy="20"
          r="8"
          stroke="url(#sangam-grad-2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className={`${text} font-bold gradient-text tracking-tight`}>
          Sangam
        </span>
      )}
    </span>
  );
};

