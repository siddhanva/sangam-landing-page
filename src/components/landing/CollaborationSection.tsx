import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Search, ShieldCheck } from "lucide-react";

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
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Collaboration, Designed for Trust
          </h2>
          <p className="text-lg text-muted-foreground">
            Teachers control sharing. Schools benefit from collective intelligence. Students' privacy is always protected.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.headline}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
