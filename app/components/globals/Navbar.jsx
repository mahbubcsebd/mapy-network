'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { ChevronRight, Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'PERSONAL', href: '/personal' },
  { label: 'MERCHANTS', href: '/merchants' },
  { label: 'FINANCIAL INSTITUTIONS', href: '/financial-institutions' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'CONTACT US', href: '/contact-us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  /* Detect scroll — passive listener for performance */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navBase = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    scrolled
      ? 'py-3 bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl shadow-lg shadow-slate-200/40 dark:shadow-black/40 border-b border-white/20 dark:border-slate-800/50'
      : 'py-5 bg-transparent border-b border-transparent',
  ].join(' ');

  return (
    <header className={navBase}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 max-w-[120px]">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-primary dark:text-blue-400 bg-primary/10 dark:bg-primary/25 ring-1 ring-primary/20 dark:ring-primary/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-primary/5 dark:hover:bg-primary/15'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-white transition-all duration-200"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* CTA */}
          <Link
            id="navbar-cta"
            href="/contact-us"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — CSS max-h transition, no JS resize listener needed */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={[
          'md:hidden absolute top-full left-0 right-0',
          'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg',
          'overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-primary dark:text-blue-400 bg-primary/10 dark:bg-primary/25 ring-1 ring-primary/20 dark:ring-primary/30'
                    : 'text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-primary/5 dark:hover:text-blue-400 dark:hover:bg-primary/15'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl text-center bg-primary text-white font-bold hover:bg-primary-hover transition-colors duration-200"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
