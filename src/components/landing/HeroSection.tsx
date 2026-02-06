import { motion } from "framer-motion";
import { Play, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-bl from-accent/20 to-primary/10 rounded-full blur-3xl" />

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-4"
            >
              Collaborative Intelligence for Better Teaching
            </motion.span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Empower Every Teacher With{" "}
              <span className="gradient-text">Real Classroom Insights</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Sangam is the first LMS built to learn from teaching itself—turning real classroom results into shared instructional intelligence that helps teachers improve faster, together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="btn-primary text-base px-8 py-6 font-semibold">
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 font-semibold gap-2"
              >
                <Play size={18} className="fill-current" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-accent" />
                <span>FERPA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-accent" />
                <span>Used by 50+ Districts</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-accent fill-accent" />
                <span>4.9★ Teacher Rating</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
