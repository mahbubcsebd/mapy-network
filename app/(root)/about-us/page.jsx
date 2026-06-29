import ContentRow from '@/app/components/ContentRow';

const ABOUT_FEATURES = [
  {
    title: 'Our Vision',
    description:
      'To revolutionize the way Caribbean residents and businesses interact with money by providing a secure and efficient digital payment solution.',
    imageSrc: '/images/about-us/about_us_1.png',
  },
  {
    title: 'Our Mission',
    description:
      'We aim to make digital transactions more accessible, bridging the gap between traditional banking and the future of digital finance in the Caribbean.',
    imageSrc: '/images/about-us/about_us_2.png',
  },
  {
    title: 'Why Choose Us',
    description:
      'Localized for the Caribbean market, emphasis on convenience for residents and tourists alike, partnership with trusted financial institutions in the region.',
    imageSrc: '/images/about-us/about_us_3.png',
  },
];

export const metadata = {
  title: 'About Us | mPay Network',
  description: 'Empowering and securing your financial future through seamless mobile payments.',
};

export default function AboutUsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-28">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 bg-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 uppercase">
            About Us
          </h1>
        </div>
      </section>

      {/* Feature Rows */}
      <div className="flex flex-col pb-20">
        {ABOUT_FEATURES.map((feature, index) => (
          <ContentRow
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.title}
            imageFirst={index % 2 === 0} // Even index: image on left
            isAlternate={index % 2 !== 0} // Odd index: alternate background
          />
        ))}
      </div>
    </main>
  );
}
