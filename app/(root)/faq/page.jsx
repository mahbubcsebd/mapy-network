'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const FAQ_CATEGORIES = [
  {
    title: 'General',
    items: [
      {
        q: 'What is mPay?',
        a: 'mPay is a comprehensive digital wallet designed to simplify your financial life. You can use mPay to send money, pay bills, and make purchases safely and easily with just a few taps.',
      },
      {
        q: 'Is mPay free of cost?',
        a: 'Yes, mPay is free of cost.',
      },
      {
        q: 'Is mPay available for all devices?',
        a: 'Yes, mPay is available to download on all devices with Android operating system (version 10 or higher) and iOS (12 or higher). You can download it for free from Play store or App store.',
      },
      {
        q: 'Are there any transaction fees?',
        a: 'No, there are no transaction fees for customers.',
      },
      {
        q: 'How can I top-up my wallet?',
        a: 'You can top up your mPay wallet by sharing your personal QR code, using your bank account, or a debit/ credit card.',
      },
      {
        q: 'How do I pay with the QR code in a store?',
        a: (
          <div className="space-y-3">
            <p>
              Depending on the store you are in, you can scan the merchant’s QR
              code or generate your own QR code to pay. Here are the steps to do
              so:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Scan the merchant’s QR code:</span>
                <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-500 dark:text-slate-400">
                  <li>Go to the mPay app and click on “Scan QR code”</li>
                  <li>Scan the QR code of the store and enter the amount if necessary</li>
                  <li>Notify the merchant of your payment.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Generate your own QR code:</span>
                <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-500 dark:text-slate-400">
                  <li>Go to the mPay app and click on “Pay with QR code”</li>
                  <li>Enter the amount and description, a QR code will be generated</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
      },
      {
        q: 'What is the difference between using mPay wallet instead of bank?',
        a: 'mPay wallet is a convenient and safe way to make and receive payments. While it does not replace the features of a bank, it relieves you from carrying your debit/ credit cards for more secure transactions. As you make payments using mPay wallet, it protects your financial information by not revealing your card details, instead creating encrypted information.',
      },
    ],
  },
  {
    title: 'Privacy and security',
    items: [
      {
        q: 'Is mPay safe?',
        a: 'mPay is safe for making payments in the Caribbean, as it utilizes state-of-the-art encryption protocols to safeguard your sensitive information. All transactions and data transfers are encrypted using industry-standard SSL/TLS encryption, ensuring that your financial details are protected from unauthorized access and cyber threats.',
      },
      {
        q: 'Why does mPay ask for pictures of my ID?',
        a: 'The account verification process for mPay is essential to ensure the security and authenticity of your account. This process typically involves uploading your government issued ID cards, to be verified by our team.',
      },
      {
        q: 'What are the different verification methods for?',
        a: (
          <div className="space-y-3">
            <p>
              At mPay you have different tools available to keep your account
              protected. Verification methods work as a shield at times when it
              is necessary to reinforce security and serve to verify that the
              account belongs to you. To access your mPay Wallet, you can use:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">PIN/Password Protection:</span> Create a strong PIN or password to restrict access to your wallet.
              </li>
              <li>
                <span className="font-semibold">Biometric Authentication:</span> Utilize fingerprint or facial recognition for quick and secure logins.
              </li>
              <li>
                <span className="font-semibold">OTP:</span> additional layer of security requires a second verification step (e.g., a code sent to your mobile device) when logging in or making significant transactions.
              </li>
            </ul>
          </div>
        ),
      },
      {
        q: 'I lost my phone/ sim registered with mPay wallet, how can I retrieve my account?',
        a: 'Once you set up a new phone/ sim, login to mPay wallet with the new device and your old device will automatically be disabled.',
      },
      {
        q: 'I forgot my password, how do I reset it?',
        a: 'On the sign in page of mPay wallet, there is an option of “Forgot my password”. This option directs you to use your linked email address to help reset your password.',
      },
      {
        q: 'Can I login to my mPay wallet on more than one device?',
        a: 'No, you can only login to one mPay wallet account on one device.',
      },
      {
        q: 'How does mPay store data and keep my data secure?',
        a: (
          <p>
            Please refer to our{' '}
            <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">
              PRIVACY NOTICE
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        q: 'Can I transfer money to other users of mPay?',
        a: 'Yes, you transfer money internally using your QR code.',
      },
      {
        q: 'Does mPay have access to my funds or bank?',
        a: 'No, mPay does not have access to any of your personal financial information.',
      },
      {
        q: 'How long does it take to complete a transfer?',
        a: (
          <div className="space-y-3">
            <p>
              The time it takes to credit transfers varies depending on the source
              and destination banks.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                From mPay to other mPay accounts: crediting is immediate.
              </li>
              <li>
                From mPay to other banks: we send the transfer immediately, but
                crediting depends on the destination bank. If you made a
                transfer and the person did not receive the money, contact the
                destination bank.
              </li>
              <li>
                From banks to mPay accounts: crediting is generally immediate,
                but the duration may vary depending on your bank.
              </li>
            </ul>
          </div>
        ),
      },
      {
        q: 'Can I cancel a transfer from my mPay wallet?',
        a: 'You cannot cancel your approved transfer because we send it immediately to the destination account. Always verify that the recipient is correct before submitting the transaction.',
      },
      {
        q: 'What is the daily limit on my mPay wallet?',
        a: 'The daily limit is set by banks in specific countries and it varies depending on your bank.',
      },
      {
        q: 'What happens if I exceed my daily limit?',
        a: 'When you exceed the daily limit, we will schedule your transfers for the next business day.',
      },
      {
        q: 'Why is my payment on hold?',
        a: 'Sometimes we need time for verification, in case of suspicious or fraudulent activity. This is done for the protection of your funds.',
      },
    ],
  },
  {
    title: 'Merchants',
    items: [
      {
        q: 'How do I generate a QR code?',
        a: (
          <div className="space-y-4">
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                Go to “Manage Subsidiaries” section in mPay wallet (could be from
                a computer)
              </li>
              <li>
                Select the store for which you need the QR and click on "View".
              </li>
              <li>Click on "Download QR".</li>
            </ul>
            <p>
              Done! Place it near where you make your payments to speed up your
              sales. The QR is a unique code that allows you to collect payments
              without using cash. You can generate it free of charge to receive
              the money from your sales in your mPay account and enjoy other
              benefits.
            </p>
          </div>
        ),
      },
      {
        q: 'How do I link my business to mPay?',
        a: 'Download the mPay wallet app and set up your business account with the necessary business information. You can then generate a unique QR code that allows you to collect payments without using cash. You can generate it free of charge to receive the money from your sales in your mPay account and enjoy other benefits.',
      },
      {
        q: 'What type of businesses can use mPay wallet?',
        a: 'All types of business requiring financial transactions can use mPay wallet.',
      },
      {
        q: 'Are there any charges to set up my business on mPay?',
        a: 'No, there are no charges to set up your business on mPay.',
      },
      {
        q: 'Does mPay charge a transaction fee?',
        a: 'Yes.',
      },
      {
        q: 'How can I link mPay to my business website?',
        a: 'A website merchant can integrate our SDK and generate a QR code for the customer to pay.',
      },
      {
        q: 'How do I transfer received merchant profile payments to my bank account?',
        a: 'mPay provides you an option to transfer funds from the wallet to your desired bank account, free of charge.',
      },
      {
        q: 'Who can I contact for technical support?',
        a: (
          <p>
            Send us an email at{' '}
            <a
              href="mailto:support@mpaynetwork.com"
              className="text-primary font-semibold hover:underline"
            >
              support@mpaynetwork.com
            </a>{' '}
            and a member of our team will get back to you.
          </p>
        ),
      },
    ],
  },
];

function FAQAccordionItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-white/[0.02] transition-colors hover:border-primary/50 dark:hover:border-primary/50">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-900 dark:text-white pr-8">
          {q}
        </span>
        <div
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
            isOpen
              ? 'bg-primary text-white'
              : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
          }`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                {a}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  // Store the active item's ID or index. Format: "categoryIndex-itemIndex"
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <main className="flex flex-col min-h-screen pt-28">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 bg-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            Help Center
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto">
            Find answers to common questions about using the mPay wallet for your
            personal or business needs.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-24 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto space-y-16">
          {FAQ_CATEGORIES.map((category, cIndex) => (
            <div key={category.title} className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                  {cIndex + 1}
                </span>
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, iIndex) => {
                  const id = `${cIndex}-${iIndex}`;
                  return (
                    <FAQAccordionItem
                      key={id}
                      q={item.q}
                      a={item.a}
                      isOpen={openId === id}
                      onClick={() => toggleItem(id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
