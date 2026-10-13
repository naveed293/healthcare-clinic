import {
  BlogSection,
  BlueCta,
  FaqSection,
  FeaturesSection,
  HomeHero,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  VirtualStrip,
  VisionSection,
  WhyChoose,
} from "../components/Sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <VirtualStrip />
      <WhyChoose />
      <ServicesSection />
      <VisionSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection compact />
      <FaqSection />
      <BlueCta />
    </>
  );
}
