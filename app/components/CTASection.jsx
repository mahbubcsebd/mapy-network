"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const PERKS = [
  "No setup fees or hidden charges",
  "Next-day settlement to your bank",
  "Dedicated 24/7 support team",
  "Fully PCI DSS compliant",
];

export default function CTASection() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-transparent relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] dark:bg-primary/[0.12] blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/[0.06] dark:bg-secondary/[0.1] blur-[60px]" />
        {/* Pulse rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/20 animate-[pulse-ring_3s_ease-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/10 animate-[pulse-ring_3s_ease-out_1.5s_infinite]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
          </span>
          Ready to Transform?
        </div>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Payments?
        </motion.h2>

        <motion.p
          className="text-lg text-slate-600 dark:text-slate-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join thousands of Caribbean businesses already on mPay Network. Start your free trial — no credit card required.
        </motion.p>

        {/* Email form */}
        {submitted ? (
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-2">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">You&apos;re on the list!</p>
            <p className="text-slate-600 dark:text-slate-400">We&apos;ll reach out within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              required
              className="flex-1 min-w-[260px] max-w-sm px-5 py-3.5 rounded-full bg-slate-50 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 shrink-0"
            >
              <Send size={15} /> Get Started Free
            </button>
          </motion.form>
        )}

        {/* Perks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {PERKS.map((perk) => (
            <span key={perk} className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
