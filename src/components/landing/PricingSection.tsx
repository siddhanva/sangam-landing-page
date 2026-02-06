import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="pricing" className="bg-muted/50 section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
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
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-card border-2 border-accent shadow-float"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  {plan.subtitle}
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold ${
                  plan.highlighted
                    ? "btn-primary"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
