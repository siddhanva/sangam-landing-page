import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is Sangam different from other learning management systems?",
    answer:
      "Sangam is the first LMS that learns from teaching itself. Unlike traditional LMS platforms that just store and deliver content, Sangam analyzes real classroom data to give teachers AI-powered recommendations based on what's actually working across classrooms. Every lesson taught makes the system smarter for all teachers.",
  },
  {
    question: "Is my student data safe?",
    answer:
      "Absolutely. Sangam is fully FERPA and COPPA compliant. We only share aggregated, anonymized analytics—no student PII is ever exposed. Sharing is always opt-in, and our AI recommendations are transparent and explainable. We also maintain SOC 2 Type II certification and 256-bit encryption.",
  },
  {
    question: "What does 'Fork & Adapt' mean?",
    answer:
      "Fork & Adapt is Sangam's signature feature. When you find a lesson that improved mastery in a similar classroom, you can 'fork' it—like branching code in software—customize it for your students, and release your own version. Sangam preserves the full performance lineage so every adaptation makes the network smarter, and every teacher gets credit.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most teachers see actionable insights within their first week. The AI recommendations become increasingly powerful as more data flows in—our pilot teachers typically see a 22% improvement in student mastery within the first two months. Setup takes less than 15 minutes.",
  },
  {
    question: "Can I try Sangam for free?",
    answer:
      "Yes! Our Free tier includes 5 lessons with basic analytics and school-level sharing. Our Professional plan also offers a 14-day free trial with no credit card required, so you can experience the full power of AI recommendations and district-wide sharing before committing.",
  },
  {
    question: "How does Sangam work with my existing tools?",
    answer:
      "Sangam integrates with popular SIS platforms and existing LMS tools. For Enterprise customers, we offer custom integrations, a dedicated account manager, and full onboarding support to ensure a seamless transition. Our API makes it easy to connect with your current workflow.",
  },
];

const FAQItem = ({ question, answer, index, isInView }: { question: string; answer: string; index: number; isInView: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.05 * index + 0.2 }}
      className="border-b border-border/60 last:border-none"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <h3
          className="text-base md:text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors"
          itemProp="name"
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-muted/80 flex items-center justify-center"
        >
          <ChevronDown size={18} className="text-muted-foreground" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed pr-12" itemProp="text">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden section-padding bg-card" ref={ref} itemScope itemType="https://schema.org/FAQPage">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-primary/8 to-sangam-indigo-light/6" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full blur-3xl bg-gradient-to-tl from-sangam-indigo-light/8 to-primary/6" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="eyebrow-badge">
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Sangam. Can't find what you're looking for?{" "}
            <a href="mailto:sshankar97@gatech.edu" className="text-primary hover:underline font-medium">
              Contact us
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

