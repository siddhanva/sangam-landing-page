import { motion } from "framer-motion";
import { Play, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import { GetEarlyAccessDialog } from "@/components/landing/GetEarlyAccessDialog";

const headlineWords = ["Empower", "Every", "Teacher", "With"];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Aurora animated background */}
      <div className="aurora-bg" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-primary/20 to-sangam-indigo-light/20 rounded-full blur-3xl orb-1" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-bl from-sangam-indigo-light/20 to-primary/10 rounded-full blur-3xl orb-2" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl orb-3" />

      {/* Floating glassmorphism shapes */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[20%] right-[5%] w-16 h-16 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[25%] left-[3%] w-12 h-12 rounded-full bg-sangam-indigo-light/5 backdrop-blur-sm border border-sangam-indigo-light/10 hidden lg:block"
      />

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
              ✨ Collaborative Intelligence for Better Teaching
            </motion.span>

            {/* Headline with word-by-word reveal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden lg:block" />
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="gradient-text inline-block"
              >
                Real Classroom Insights
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Sangam is the first LMS built to learn from teaching itself—turning real classroom results into shared instructional intelligence that helps teachers improve faster, together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <GetEarlyAccessDialog>
                <Button size="lg" className="btn-primary text-base px-8 py-6 font-semibold group relative overflow-hidden">
                  <span className="relative z-10">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-sangam-indigo-light to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_infinite]" />
                </Button>
              </GetEarlyAccessDialog>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 font-semibold gap-2 group"
              >
                <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              {[
                { icon: Shield, label: "FERPA Compliant" },
                { icon: Users, label: "Used by 50+ Districts" },
                { icon: Star, label: "4.9★ Teacher Rating", fill: true },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon size={16} className={`text-accent ${item.fill ? "fill-accent" : ""}`} />
                  <span>{item.label}</span>
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
                ].map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.08, type: "spring", stiffness: 200 }}
                    className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-background shadow-sm"
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
              <p className="text-sm text-muted-foreground">
                Designed with real educators & students.
              </p>
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
