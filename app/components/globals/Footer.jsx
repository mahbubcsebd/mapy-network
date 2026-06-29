'use client';

import Link from 'next/link';
import Logo from './Logo';

const MAIN_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'PERSONAL', href: '/personal' },
  { label: 'MERCHANTS', href: '/merchants' },
  { label: 'FINANCIAL INSTITUTIONS', href: '/financial-institutions' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'CONTACT US', href: '/contact-us' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/[0.06] pt-16 pb-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <Link href="/" className="mb-10">
          <Logo />
        </Link>

        {/* Main Links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10">
          {MAIN_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-white/[0.08] mb-8" />

        {/* Legal Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 flex-1">
            {LEGAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 text-xs text-slate-500 dark:text-slate-500 text-center w-full">
          © {year} mPay Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
