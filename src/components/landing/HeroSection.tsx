import { motion } from "framer-motion";
import { Play, Shield, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import { GetEarlyAccessDialog } from "@/components/landing/GetEarlyAccessDialog";
import { DemoVideoDialog } from "@/components/landing/DemoVideoDialog";

const headlineWords = ["See", "What's", "Working", "In", "Your", "Classroom"];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden bg-[#fafbff]">
      {/* ── Base gradient ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, #fafbff 0%, #f4f2ff 40%, #eef0ff 70%, hsl(var(--card)) 100%)
          `,
        }}
      />

      {/* ── Mesh gradient layer ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 120% 80% at 5% 15%, hsla(243, 75%, 59%, 0.14) 0%, transparent 50%),
          radial-gradient(ellipse 90% 100% at 95% 85%, hsla(244, 76%, 67%, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 70% 60% at 50% 5%, hsla(189, 94%, 53%, 0.07) 0%, transparent 50%),
          radial-gradient(ellipse 60% 60% at 75% 55%, hsla(243, 75%, 59%, 0.09) 0%, transparent 50%),
          radial-gradient(ellipse 50% 40% at 25% 70%, hsla(189, 94%, 53%, 0.05) 0%, transparent 50%)
        `,
      }} />

      {/* ── Aurora animated background ── */}
      <div className="aurora-bg" />

      {/* ── Morphing gradient blobs ── */}
      <div className="pointer-events-none absolute top-[5%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-primary/[0.18] via-sangam-indigo-light/[0.12] to-transparent blur-[80px] blob-1" />
      <div className="pointer-events-none absolute top-[20%] -right-[15%] w-[700px] h-[700px] bg-gradient-to-bl from-sangam-indigo-light/[0.15] via-primary/[0.08] to-transparent blur-[100px] blob-2" />
      <div className="pointer-events-none absolute bottom-[5%] left-[15%] w-[450px] h-[450px] bg-gradient-to-tr from-accent/[0.1] via-primary/[0.08] to-transparent blur-[70px] blob-3" />
      <div className="pointer-events-none absolute top-[55%] right-[5%] w-[350px] h-[350px] bg-gradient-to-tl from-primary/[0.1] via-accent/[0.06] to-transparent blur-[60px] blob-1" />

      {/* ── Radial spotlight from top ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, hsla(243, 75%, 59%, 0.1), transparent 65%)',
        }}
      />

      {/* ── Sweeping light beams ── */}
      <div className="hero-beam top-0 left-[20%]" />
      <div className="hero-beam-2 top-0 left-[60%]" />

      {/* ── Animated grid ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Noise texture ── */}
      <div className="noise-overlay" />

      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 dot-pattern opacity-15" />

      {/* ── Bottom fade to next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent pointer-events-none" />

      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="eyebrow-badge"
            >
              AI-Powered Teaching Intelligence
            </motion.span>

            {/* Headline with word-by-word reveal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.08] tracking-[-0.02em] mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="gradient-text inline-block font-extrabold"
              >
                In Real Time
              </motion.span>
            </h1>

            {/* Subheadline — punchier, shorter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-foreground/60 max-w-[560px] mx-auto lg:mx-0 mb-10 leading-[1.6]"
            >
              Turn classroom data into action. Get AI insights that show exactly where students struggle—and what to do about it.
            </motion.p>

            {/* CTA Buttons — stronger hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4"
            >
              <GetEarlyAccessDialog>
                <Button size="lg" className="btn-primary text-base px-10 py-6 font-semibold group relative overflow-hidden shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.5)] min-w-[200px]">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-sangam-indigo-light to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_infinite]" />
                </Button>
              </GetEarlyAccessDialog>
              <DemoVideoDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 font-medium gap-2 group border-2 border-border hover:border-muted-foreground/30 hover:bg-muted/50 transition-all"
                >
                  <Play size={16} className="fill-current group-hover:scale-110 transition-transform" />
                  Watch 3-Min Demo
                </Button>
              </DemoVideoDialog>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="text-xs text-muted-foreground mb-8 text-center lg:text-left"
            >
              No credit card required &middot; Free for 14 days &middot; Cancel anytime
            </motion.p>

            {/* Trust Indicators — larger, more prominent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm"
            >
              {[
                { icon: Shield, label: "FERPA Compliant", highlight: "FERPA" },
                { icon: Users, label: "Trusted by 50+ Districts", highlight: "50+" },
                { icon: Star, label: "4.9/5 · 500+ Reviews", fill: true, highlight: "4.9" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <item.icon size={20} className={`text-accent ${item.fill ? "fill-accent" : ""}`} />
                  <span className="text-foreground/70 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Community photos */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=160&h=160&q=80",
                  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=160&h=160&q=80",
                  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=160&h=160&q=80",
                  "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=160&h=160&q=80",
                ].map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.08, type: "spring", stiffness: 200 }}
                    className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-background shadow-sm"
                  >
                    <img
                      src={src}
                      alt="Community member"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-sangam-indigo-light/25" />
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/70">
                  347 teachers joined this week
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <DashboardPreview />

            {/* Photo card — sits below the dashboard so heatmap stays clear */}
            <div className="hidden lg:flex mt-4 rounded-2xl overflow-hidden border border-border shadow-float bg-card tilt-card items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&h=600&q=80"
                alt="Students and educator collaborating"
                loading="lazy"
                decoding="async"
                className="w-[140px] h-[90px] object-cover flex-shrink-0"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">Real classrooms. Real outcomes.</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Insights that feel human—because they are.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
