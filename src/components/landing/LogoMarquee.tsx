const partners = [
  "Google for Education",
  "Microsoft Education",
  "Canvas LMS",
  "Clever",
  "ClassLink",
  "Schoology",
  "Khan Academy",
  "Curriculum Associates",
  "Renaissance",
  "Illuminate Education",
];

export const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden py-6 bg-muted/30">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-muted/30 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-muted/30 to-transparent" />

      <div className="marquee-track">
        {/* Duplicate the list for seamless loop */}
        {[...partners, ...partners].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 mx-8 flex items-center gap-2 text-muted-foreground/50 select-none"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary/15 to-sangam-indigo-light/15 flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary/60">
                {name.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

