import ContentRow from '@/app/components/ContentRow';

const MERCHANT_FEATURES = [
  {
    title: 'Store Specific QR Codes',
    description: 'Have your store specific QR code or generate one for each terminal.',
    imageSrc: '/images/merchants/merchant_1.png',
  },
  {
    title: 'Instant Payments, In Person or Online',
    description: 'Accept payments either in person or online and get credited instantly.',
    imageSrc: '/images/merchants/merchant_2.png',
  },
  {
    title: 'Fraud-Free Payment Experience',
    description: 'Seamless payment experience with zero fraud and zero risk.',
    imageSrc: '/images/merchants/merchant_3.png',
  },
  {
    title: 'Expand with Cardless Payments',
    description: 'Grow your business by expanding your online presence by accepting cardless payments.',
    imageSrc: '/images/merchants/merchant_4.png',
  },
  {
    title: 'Low Cost Local & Caribbean Transactions',
    description:
      'Low cost fee structure allows the merchant to accept all local payments and within the Caribbean participating countries without paying exorbitant fees demanded by banks or credit card companies.',
    imageSrc: '/images/merchants/merchant_5.png',
  },
  {
    title: '24/7 Wallet to Bank Transfers',
    description:
      'Transfer money from your wallet to your bank account 24x7 instantly. Only fees paid are those charged by your bank.',
    imageSrc: '/images/merchants/merchant_6.png',
  },
  {
    title: 'Detailed Store Management',
    description:
      'Manage your branches and terminals. Add cashiers, terminals and control the operations of your store.',
    imageSrc: '/images/merchants/merchant_7.png',
  },
  {
    title: 'Detailed Sales & Income Reports',
    description: 'Detailed reporting features for daily sales, income and discount movements.',
    imageSrc: '/images/merchants/merchant_8.png',
  },
];

export const metadata = {
  title: 'Merchants | mPay Network',
  description: 'Empowering and securing your financial future through seamless mobile payments.',
};

export default function MerchantsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-28">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 bg-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 mb-6 uppercase">
            Merchants
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto mb-16">
            Empowering and securing your financial future through seamless mobile payments.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-12">
            What all can you do with the Wallet?
          </h2>
        </div>
      </section>

      {/* Feature Rows */}
      <div className="flex flex-col pb-20">
        {MERCHANT_FEATURES.map((feature, index) => (
          <ContentRow
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.title}
            imageFirst={index % 2 !== 0} // Alternate image side (left/right)
            isAlternate={index % 2 !== 0} // Alternate background
          />
        ))}
      </div>
    </main>
  );
}
