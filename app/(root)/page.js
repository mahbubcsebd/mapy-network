import AlternatingFeatures from '../components/AlternatingFeatures';
import CTASection from '../components/CTASection';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <AlternatingFeatures />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
