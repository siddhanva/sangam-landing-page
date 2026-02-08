import {
  Navigation,
  HeroSection,
  WaveDivider,
  HowItWorksSection,
  FlywheelSection,
  AnalyticsSection,
  CollaborationSection,
  CompetitiveSection,
  PricingSection,
  FinalCTASection,
  FAQSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        <HeroSection />

        {/* 1. Features */}
        <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
        <AnalyticsSection />

        <WaveDivider flip toColor="hsl(var(--card))" />
        <CollaborationSection />

        {/* 2. How It Works */}
        <WaveDivider toColor="hsl(var(--card))" />
        <HowItWorksSection />

        {/* Collective Intelligence + Fork & Adapt */}
        <WaveDivider toColor="hsl(var(--card))" />
        <FlywheelSection />

        {/* 3. Pricing */}
        <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
        <PricingSection />

        {/* FAQ */}
        <WaveDivider flip toColor="hsl(var(--card))" />
        <FAQSection />

        {/* 4. About */}
        <WaveDivider toColor="hsl(var(--muted) / 0.5)" />
        <CompetitiveSection />

        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
