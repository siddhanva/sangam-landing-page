import {
  Navigation,
  HeroSection,
  SocialProofBar,
  WaveDivider,
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
      <SocialProofBar />

      {/* Wave transition into Problem section */}
      <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
      <ProblemSection />

      {/* Wave transition into How It Works */}
      <WaveDivider flip toColor="hsl(var(--card))" />
      <HowItWorksSection />

      {/* Wave transition into Analytics */}
      <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
      <AnalyticsSection />

      {/* Wave transition into Collaboration */}
      <WaveDivider flip toColor="hsl(var(--card))" />
      <CollaborationSection />

      {/* Wave transition into Competitive */}
      <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
      <CompetitiveSection />

      {/* Wave transition into Testimonials */}
      <WaveDivider flip toColor="hsl(var(--card))" />
      <TestimonialsSection />

      {/* Wave transition into Pricing */}
      <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
      <PricingSection />

      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
