'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Send, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from './AnimatedCounter';

const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Countries' },
  { value: 500, suffix: 'K+', label: 'Merchants' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-6 bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── Left Content (Text & CTA) ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            Pan-Caribbean Payment Network
          </div>

          {/* Headline - Premium elegant contrast, fixed wrapping */}
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[62px] font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white mb-6">
            Shaping the Future of{' '}
            <br className="hidden sm:block lg:hidden xl:block" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Financial Services
            </span>
          </h1>

          {/* Sub-heading */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light">
            A robust, secure, and frictionless payment network built for the
            Caribbean — enabling domestic, cross-border, and eCommerce
            transactions with zero-fraud technology.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold overflow-hidden transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started{' '}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link
              href="#how-it-works"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300"
            >
              <Play size={14} className="fill-current" /> See How It Works
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 pt-6 border-t border-slate-200 dark:border-white/10">
            {HERO_STATS.map(({ value, suffix, label }) => (
              <div key={label} className="flex flex-col">
                <div className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500 font-medium tracking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right Content (Glassmorphic Mockup) ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="relative hidden lg:block h-[600px] w-full"
          style={{ perspective: 1200 }}
        >
          {/* Main Floating Card - Premium Frosted Glass */}
          <motion.div
            initial={{ rotateY: -5, rotateX: 2, y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] rounded-[2rem] bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-white/10 shadow-2xl shadow-blue-500/5 dark:shadow-black/50 p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{' '}
                Protected
              </div>
            </div>

            <div className="mb-1 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Total Balance
            </div>
            <div className="text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight flex items-baseline gap-1">
              <span className="text-2xl text-slate-400 font-medium">$</span>
              24,590
              <span className="text-2xl text-slate-400 font-medium">.00</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-transparent shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                    <Send size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white text-sm">
                      Cross-border Transfer
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      To Jamaica Hub
                    </div>
                  </div>
                </div>
                <div className="font-medium text-slate-900 dark:text-white text-sm">
                  -$1,250
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-transparent shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white text-sm">
                      eCommerce Payment
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Amazon.com
                    </div>
                  </div>
                </div>
                <div className="font-medium text-slate-900 dark:text-white text-sm">
                  -$85.00
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Decorator Card 1 */}
          <motion.div
            initial={{ rotate: 2, y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-[15%] right-0 w-48 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl border border-white dark:border-white/10 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <ShieldCheck size={14} />
              </div>
              <div className="font-medium text-slate-900 dark:text-white text-sm">
                Zero Fraud
              </div>
            </div>
            <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="w-full h-full bg-emerald-500 rounded-full" />
            </div>
          </motion.div>

          {/* Floating Decorator Card 2 - Now Premium Blue instead of jarring White */}
          <motion.div
            initial={{ rotate: -4, y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-[20%] -left-8 w-56 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/20"
          >
            <div className="text-[0.65rem] font-semibold text-blue-200 uppercase tracking-widest mb-1.5">
              Live Settlement
            </div>
            <div className="text-2xl font-bold mb-2">Instant</div>
            <div className="text-xs text-blue-100/70">
              Connecting 5+ Major Banks
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
