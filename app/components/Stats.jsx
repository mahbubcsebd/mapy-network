"use client";

import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, Building2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  {
    Icon: Globe,
    iconWrap: "bg-blue-500/10 border border-blue-500/20",
    iconCls:  "text-blue-500",
    topBar:   "bg-blue-400",
    valueCls: "text-blue-400",
    value: 15, suffix: "+", label: "Caribbean Countries",
    sub: "Active market presence",
  },
  {
    Icon: Users,
    iconWrap: "bg-violet-500/10 border border-violet-500/20",
    iconCls:  "text-violet-500",
    topBar:   "bg-violet-400",
    valueCls: "text-violet-400",
    value: 500, suffix: "K+", label: "Active Merchants",
    sub: "Across the region",
  },
  {
    Icon: TrendingUp,
    iconWrap: "bg-emerald-500/10 border border-emerald-500/20",
    iconCls:  "text-emerald-500",
    topBar:   "bg-emerald-400",
    valueCls: "text-emerald-400",
    value: 2.5, suffix: "M+", label: "Monthly Transactions",
    sub: "And growing fast",
  },
  {
    Icon: Building2,
    iconWrap: "bg-orange-500/10 border border-orange-500/20",
    iconCls:  "text-orange-500",
    topBar:   "bg-orange-400",
    valueCls: "text-orange-400",
    value: 99.9, suffix: "%", label: "Platform Uptime",
    sub: "Enterprise SLA guaranteed",
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

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-white/[0.05]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 text-primary text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
            Impact by the Numbers
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Trusted across the Caribbean
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STATS.map(({ Icon, iconWrap, iconCls, topBar, valueCls, value, suffix, label, sub }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative overflow-hidden p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-center shadow-sm"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 ${topBar} rounded-b-full`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 ${iconWrap}`}>
                <Icon size={22} className={iconCls} />
              </div>

              {/* Value */}
              <div className={`text-4xl font-extrabold mb-1 ${valueCls}`}>
                <AnimatedCounter target={value} suffix={suffix} />
              </div>

              {/* Label */}
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-1">{label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
