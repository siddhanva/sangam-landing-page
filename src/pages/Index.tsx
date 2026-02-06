import {
  Navigation,
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  AnalyticsSection,
  CollaborationSection,
  CompetitiveSection,
  TestimonialsSection,
  PricingSection,
  FinalCTASection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <AnalyticsSection />
      <CollaborationSection />
      <CompetitiveSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
