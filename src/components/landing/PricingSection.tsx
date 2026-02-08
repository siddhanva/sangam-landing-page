import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetEarlyAccessDialog } from "@/components/landing/GetEarlyAccessDialog";

const plans = [
  {
    name: "Free",
    subtitle: "Pilot",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "/teacher",
    features: [
      "5 lessons",
      "Basic mastery analytics",
      "School-level sharing",
      "Community support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    subtitle: "Most Popular",
    monthlyPrice: "$15",
    annualPrice: "$12",
    period: "/teacher/month",
    features: [
      "Unlimited lessons",
      "Advanced analytics & heatmaps",
      "District-wide sharing",
      "AI recommendations",
      "Priority support",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "Custom",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Custom integrations (SIS, LMS)",
      "Dedicated account manager",
      "Training & onboarding",
      "SLA guarantees",
    ],
    cta: "Request Demo",
    highlighted: false,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="relative overflow-hidden bg-muted/50 section-padding" ref={ref} aria-labelledby="pricing-heading">
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
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="eyebrow-badge">
            <CreditCard size={14} />
            Pricing
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free. Scale with confidence. Volume discounts for districts.
          </p>
        </motion.div>

        {/* Billing cycle toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="flex items-center p-1 rounded-full bg-muted/80 border border-border/50">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                billingCycle === "annual"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent/15 text-accent">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => {
            const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className={`group relative rounded-[20px] p-8 card-hover-glow overflow-hidden tilt-card ${
                  plan.highlighted
                    ? "glass-card gradient-border-glow shadow-float md:scale-[1.05] z-10"
                    : "bg-card border-2 border-border hover:border-muted-foreground/20 shadow-card"
                }`}
              >
                {/* "Most Popular" badge */}
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground text-xs font-semibold rounded-full shadow-lg tracking-wide uppercase">
                    <Sparkles size={12} />
                    Most Popular
                  </span>
                )}

                {plan.highlighted && (
                  <span className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary via-sangam-indigo-light to-accent" />
                )}

                <div className="text-center mb-8 pt-4">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-bold tracking-tight ${plan.highlighted ? "gradient-text" : "text-foreground"}`}>
                      {price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-base">{plan.period}</span>
                    )}
                  </div>
                  {plan.highlighted && billingCycle === "annual" && (
                    <p className="text-xs text-accent font-medium mt-2">
                      Billed annually · Save $36/year per teacher
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-gradient-to-br from-primary/20 to-sangam-indigo-light/20"
                          : "bg-accent/20"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary" : "text-accent"}`} />
                      </div>
                      <span className="text-foreground/80 text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.cta === "Start Free Trial" && plan.highlighted ? (
                  <GetEarlyAccessDialog>
                    <Button
                      className="w-full font-semibold text-base py-5 bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </GetEarlyAccessDialog>
                ) : (
                  <GetEarlyAccessDialog>
                    <Button
                      className={`w-full font-semibold text-base py-5 transition-all ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-primary to-sangam-indigo-light text-primary-foreground hover:opacity-90 shadow-lg"
                          : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </GetEarlyAccessDialog>
                )}

                {plan.highlighted && (
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    No credit card required
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
