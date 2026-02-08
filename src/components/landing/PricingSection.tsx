import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetEarlyAccessDialog } from "@/components/landing/GetEarlyAccessDialog";

const plans = [
  {
    name: "Free",
    subtitle: "Pilot",
    price: "$0",
    period: "/teacher",
    features: [
      "5 lessons",
      "Basic analytics",
      "School-level sharing",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    subtitle: "Most Popular",
    price: "$15",
    period: "/teacher/month",
    features: [
      "Unlimited lessons",
      "Advanced analytics",
      "District-wide sharing",
      "AI recommendations",
      "Priority support",
    ],
    cta: "Get Early Access",
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "Custom",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "Training & onboarding",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative overflow-hidden bg-muted/50 section-padding" ref={ref}>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-sangam-indigo-light/8" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full blur-3xl bg-gradient-to-tl from-sangam-indigo-light/10 to-primary/8" />
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
            <CreditCard size={14} />
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. Scale with confidence. Volume discounts for districts.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`group relative rounded-2xl p-8 card-hover-glow overflow-hidden tilt-card ${
                plan.highlighted
                  ? "glass-card gradient-border-glow shadow-float scale-[1.03]"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary via-sangam-indigo-light to-accent" />
              )}

              {plan.highlighted && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground text-xs font-semibold rounded-full shadow-md">
                  <Sparkles size={12} />
                  {plan.subtitle}
                </span>
              )}

              <div className="text-center mb-8 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "gradient-text" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted
                        ? "bg-gradient-to-br from-primary/20 to-sangam-indigo-light/20"
                        : "bg-accent/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary" : "text-accent"}`} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.cta === "Get Early Access" ? (
                <GetEarlyAccessDialog>
                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground hover:opacity-90 shadow-lg"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </GetEarlyAccessDialog>
              ) : (
                <Button
                  className={`w-full font-semibold ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground hover:opacity-90 shadow-lg"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
