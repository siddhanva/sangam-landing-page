import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Search, ShieldCheck, Handshake } from "lucide-react";

const features = [
  {
    icon: Lock,
    headline: "You Control Visibility",
    copy: "Share lessons within your school, district, or across the Sangam network. Every lesson includes performance snapshots, mastery rates, engagement stats, and teacher ratings.",
  },
  {
    icon: Search,
    headline: "Discover What Actually Works",
    copy: "Browse lessons by subject, grade, mastery improvement, and engagement. See real classroom data before you adopt or adapt.",
  },
  {
    icon: ShieldCheck,
    headline: "FERPA & COPPA Compliant",
    copy: "Aggregated analytics only. No student PII is ever shared. Opt-in sharing. Clear, transparent AI recommendations you can trust and understand.",
  },
];

export const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden section-padding bg-card" ref={ref} aria-labelledby="collab-heading">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/3 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8" />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tl from-sangam-indigo-light/10 to-primary/8" />
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
            <Handshake size={14} />
            Collaboration & Trust
          </span>
          <h2 id="collab-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Collaboration,{" "}
            <span className="gradient-text">Designed for Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            You control what you share. Schools benefit from collective intelligence. Student privacy is non-negotiable.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="group glass-card rounded-2xl overflow-hidden card-hover-glow tilt-card"
            >
              {/* Gradient top bar */}
              <div className="pointer-events-none h-1 bg-gradient-to-r from-primary to-sangam-indigo-light opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Card content */}
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/10 mb-4 group-hover:from-primary/20 group-hover:to-sangam-indigo-light/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
