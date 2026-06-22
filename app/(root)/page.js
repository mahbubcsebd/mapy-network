import CTASection from '../components/CTASection';
import Features from '../components/Features';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import MapSection from '../components/MapSection';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <MapSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
