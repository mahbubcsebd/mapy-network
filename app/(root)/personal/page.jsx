import ContentRow from '@/app/components/ContentRow';

const PERSONAL_FEATURES = [
  {
    title: 'Take Control of Your Finances',
    description:
      'You are in total control of your finances. You decide how much to send, where to send and who to send to. You can also transfer the money instantly to your bank account. All of this happens seamlessly with zero fraud. No more carrying money or credit cards which are subject to fraud and penalties.',
    imageSrc: '/images/personal/personal_01.png',
  },
  {
    title: 'Instant Merchant Payments',
    description:
      'You are in total control of your finances. You decide how much to send, where to send and who to send to. You can also transfer the money instantly to your bank account. All of this happens seamlessly with zero fraud. No more carrying money or credit cards which are subject to fraud and penalties.',
    imageSrc: '/images/personal/personal_02.png',
  },
  {
    title: 'Safe & Secure Transfers',
    description:
      'Want to send your kids their monthly allowance? Much safer to give them an e-wallet for this specific amount rather than money.',
    imageSrc: '/images/personal/personal_03.png',
  },
  {
    title: 'Secure Online Shopping',
    description:
      'Shop online without sharing your financial information. Scan the checkout QR code and the payment to merchant is made instantly.',
    imageSrc: '/images/personal/personal_04.png',
  },
  {
    title: 'Quick Bill Payments & Top-ups',
    description:
      "Pay utility bills like electricity, water, gas or top up your mobile instantly. It's as easy as entering your utility bill information and paying through the wallet.",
    imageSrc: '/images/personal/personal_05.png',
  },
  {
    title: 'Quick Merchant Payments',
    description:
      "Want to purchase a well known from the comfort of your home? It's as easy as scanning the smart QR code and purchasing instantly. Your wallet shows you where to eat.",
    imageSrc: '/images/personal/personal_06.png',
  },
  {
    title: '24/7 Bank Transfers',
    description:
      'Transfer money from your wallet to your bank account 24x7 instantly. Only fees paid are those charged by your bank.',
    imageSrc: '/images/personal/personal_07.png',
  },
  {
    title: 'Split Expenses Easily',
    description: 'Split expenses with your friends.',
    imageSrc: '/images/personal/personal_08.png',
  },
  {
    title: 'User-friendly Interface',
    description:
      'User-Friendly Interface: Our virtual wallet features an intuitive and easy-to-navigate design, allowing you to quickly access core features without confusion.',
    imageSrc: '/images/personal/personal_09.png',
  },
];

export const metadata = {
  title: 'Personal | mPay Network',
  description: 'Empowering and securing your financial future through seamless mobile payments.',
};

export default function PersonalPage() {
  return (
    <main className="flex flex-col min-h-screen pt-28">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 bg-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 mb-6 uppercase">
            Personal
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
        {PERSONAL_FEATURES.map((feature, index) => (
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
