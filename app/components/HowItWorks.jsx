"use client";

import { motion } from "framer-motion";
import { UserPlus, Store, CheckCircle2, TrendingUp } from "lucide-react";

const STEPS = [
  {
    step: "01",
    Icon: UserPlus,
    iconWrap: "bg-blue-500/10 border border-blue-500/25",
    iconCls:  "text-blue-500",
    border:   "border-blue-500/25 hover:border-blue-500/50 hover:shadow-blue-500/[0.1]",
    number:   "text-blue-400/30",
    title: "Create Your Account",
    desc:  "Sign up in minutes. Verify your business and get instant access to the mPay dashboard.",
  },
  {
    step: "02",
    Icon: Store,
    iconWrap: "bg-violet-500/10 border border-violet-500/25",
    iconCls:  "text-violet-500",
    border:   "border-violet-500/25 hover:border-violet-500/50 hover:shadow-violet-500/[0.1]",
    number:   "text-violet-400/30",
    title: "Set Up Your Store",
    desc:  "Connect your eCommerce platform or use our POS system. We integrate with all major platforms.",
  },
  {
    step: "03",
    Icon: CheckCircle2,
    iconWrap: "bg-emerald-500/10 border border-emerald-500/25",
    iconCls:  "text-emerald-500",
    border:   "border-emerald-500/25 hover:border-emerald-500/50 hover:shadow-emerald-500/[0.1]",
    number:   "text-emerald-400/30",
    title: "Start Accepting Payments",
    desc:  "Go live instantly. Accept cards, mobile payments, and digital wallets from day one.",
  },
  {
    step: "04",
    Icon: TrendingUp,
    iconWrap: "bg-orange-500/10 border border-orange-500/25",
    iconCls:  "text-orange-500",
    border:   "border-orange-500/25 hover:border-orange-500/50 hover:shadow-orange-500/[0.1]",
    number:   "text-orange-400/30",
    title: "Grow & Scale",
    desc:  "Access analytics, expand cross-border, and unlock enterprise features as your business grows.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            Seamless Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Up & Running in 4 Steps
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            From sign-up to first transaction — get your business accepting payments in under a day.
          </p>
        </div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STEPS.map(({ step, Icon, iconWrap, iconCls, border, number, title, desc }) => (
            <motion.div
              key={step}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={[
                "relative p-8 rounded-2xl cursor-default",
                "bg-white dark:bg-white/[0.03] border shadow-sm hover:shadow-xl",
                "transition-[border-color,box-shadow] duration-300",
                border,
              ].join(" ")}
            >
              {/* Step number watermark */}
              <span className={`absolute top-5 right-5 text-5xl font-black leading-none select-none ${number}`}>
                {step}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${iconWrap}`}>
                <Icon size={22} className={iconCls} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
