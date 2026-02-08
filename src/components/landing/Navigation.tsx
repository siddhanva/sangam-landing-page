import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sparkles, Workflow, CreditCard, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetEarlyAccessDialog } from "@/components/landing/GetEarlyAccessDialog";
import { SangamLogo } from "@/components/landing/SangamLogo";

const navLinks = [
  { label: "Features", href: "#features", icon: Sparkles },
  { label: "How It Works", href: "#how-it-works", icon: Workflow },
  { label: "Pricing", href: "#pricing", icon: CreditCard },
  { label: "About", href: "#about", icon: Info },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_30px_-4px_rgba(91,82,230,0.08)] border-b border-white/60"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX,
          opacity: isScrolled ? 1 : 0,
          background: "linear-gradient(90deg, #5b52e6, #7168ea, #22d3ee)",
        }}
      />

      {/* Subtle top-edge glow when scrolled */}
      {isScrolled && (
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      )}

      <div className="container-custom">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SangamLogo size="md" />
          </motion.a>

          {/* Desktop Navigation — floating pill container */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl transition-all duration-500 ${
              isScrolled
                ? "bg-muted/60 border border-border/40 shadow-sm"
                : "bg-transparent"
            }`}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                const isHovered = hoveredLink === link.label;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* Animated sliding pill */}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/[0.1] to-sangam-indigo-light/[0.06] border border-primary/15 shadow-[0_0_12px_-4px_rgba(91,82,230,0.2)]"
                        transition={{ type: "spring", stiffness: 500, damping: 32 }}
                      />
                    )}

                    {/* Active indicator dot */}
                    {isActive && !isHovered && (
                      <motion.div
                        layoutId="nav-active-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}

                    <span className={`relative z-10 flex items-center gap-1.5 transition-all duration-200 ${
                      isHovered
                        ? "text-primary"
                        : isActive
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}>
                      <link.icon
                        size={14}
                        className={`transition-all duration-300 ${
                          isHovered ? "text-primary scale-110 rotate-6" : isActive ? "text-primary/70" : "text-muted-foreground/60"
                        }`}
                      />
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <GetEarlyAccessDialog>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="btn-primary font-semibold px-6 gap-2 group relative overflow-hidden shadow-[0_2px_12px_-2px_rgba(91,82,230,0.35)] hover:shadow-[0_4px_20px_-2px_rgba(91,82,230,0.5)] transition-shadow duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Early Access
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-sangam-indigo-light to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_infinite]" />
                </Button>
              </motion.div>
            </GetEarlyAccessDialog>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2.5 text-foreground hover:bg-primary/5 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/30"
          >
            <div className="container-custom py-5 flex flex-col gap-1.5">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 24 }}
                    className={`flex items-center gap-3 font-medium py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-gradient-to-br from-primary to-sangam-indigo-light shadow-md"
                        : "bg-gradient-to-br from-primary/10 to-sangam-indigo-light/10"
                    }`}>
                      <link.icon size={16} className={isActive ? "text-white" : "text-primary"} />
                    </div>
                    <span>{link.label}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </motion.a>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col gap-3 pt-4 mt-2 border-t border-border/30"
              >
                <GetEarlyAccessDialog>
                  <Button className="btn-primary w-full font-semibold gap-2">
                    Get Early Access
                    <ArrowRight size={14} />
                  </Button>
                </GetEarlyAccessDialog>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
