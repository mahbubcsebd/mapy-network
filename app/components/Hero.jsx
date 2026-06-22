"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

const HERO_STATS = [
  { value: 15,    suffix: "+",  label: "Caribbean Countries" },
  { value: 500,   suffix: "K+", label: "Active Merchants" },
  { value: 99.9,  suffix: "%",  label: "Platform Uptime" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20 px-6">

      {/* ── Animated mesh blobs ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[10%] -left-[5%] w-[60vw] max-w-[700px] aspect-square rounded-full bg-blue-500/[0.12] dark:bg-blue-500/[0.18] blur-[70px] animate-[mesh-move_12s_ease-in-out_infinite]" />
        <div className="absolute top-[15%] -right-[10%] w-[50vw] max-w-[600px] aspect-square rounded-full bg-violet-500/[0.1] dark:bg-violet-500/[0.16] blur-[60px] animate-[mesh-move_15s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[5%] left-[20%] w-[40vw] max-w-[500px] aspect-square rounded-full bg-cyan-500/[0.08] dark:bg-cyan-500/[0.12] blur-[50px] animate-[mesh-move_10s_ease-in-out_2s_infinite]" />
        {/* Dot-grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/25 text-secondary text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-8 animate-[fade-up_0.5s_ease_both]">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          Pan-Caribbean Payment Network
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.07] text-slate-900 dark:text-white mb-6 animate-[fade-up_0.5s_0.1s_ease_both]">
          Shaping the Future of{" "}
          <span className="bg-gradient-to-r from-primary via-violet-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient-shift_4s_ease_infinite]">
            Financial Services
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-[fade-up_0.5s_0.2s_ease_both]">
          A robust, secure, and frictionless payment network built for the
          Caribbean — enabling domestic, cross-border, and eCommerce
          transactions with zero-fraud technology.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-16 animate-[fade-up_0.5s_0.3s_ease_both]">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
          >
            Get Started <ArrowRight size={16} />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Play size={13} className="fill-current" /> See How It Works
          </Link>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto animate-[fade-up_0.5s_0.4s_ease_both]">
          {HERO_STATS.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="py-5 px-4 rounded-2xl bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-center"
            >
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ──────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 dark:opacity-30">
        <span className="text-[0.65rem] tracking-widest uppercase text-slate-500 dark:text-slate-400">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 dark:from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
