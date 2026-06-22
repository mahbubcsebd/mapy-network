"use client";

import { motion } from "framer-motion";
import {
  Globe, Shield, CreditCard, Smartphone, BarChart3, Building2,
} from "lucide-react";

/* Tailwind class strings for each card's accent color */
const FEATURES = [
  {
    Icon: Globe,
    iconWrap: "bg-blue-500/[0.12] dark:bg-blue-500/[0.15] border border-blue-500/20",
    iconCls:  "text-blue-500",
    tagCls:   "text-blue-500",
    hoverCard:"hover:border-blue-500/30 hover:shadow-blue-500/[0.12]",
    tag:   "Regional Network",
    title: "Pan-Caribbean Payment Network",
    desc:  "Seamlessly connect across Barbados, Antigua, St. Lucia, and more. Our unified network makes transactions as simple locally as internationally.",
  },
  {
    Icon: Shield,
    iconWrap: "bg-violet-500/[0.12] dark:bg-violet-500/[0.15] border border-violet-500/20",
    iconCls:  "text-violet-500",
    tagCls:   "text-violet-500",
    hoverCard:"hover:border-violet-500/30 hover:shadow-violet-500/[0.12]",
    tag:   "Zero Fraud",
    title: "Cardless Zero-Fraud Financial Network",
    desc:  "Industry-leading PCI DSS compliant infrastructure with multi-factor authentication, biometric verification, and real-time fraud detection.",
  },
  {
    Icon: CreditCard,
    iconWrap: "bg-cyan-500/[0.12] dark:bg-cyan-500/[0.15] border border-cyan-500/20",
    iconCls:  "text-cyan-500",
    tagCls:   "text-cyan-500",
    hoverCard:"hover:border-cyan-500/30 hover:shadow-cyan-500/[0.12]",
    tag:   "Cross-Border",
    title: "Domestic, eCommerce & Cross-Border Payments",
    desc:  "Accept payments online or in-person. Route funds across borders instantly with transparent FX rates and next-day settlement.",
  },
  {
    Icon: Smartphone,
    iconWrap: "bg-orange-500/[0.12] dark:bg-orange-500/[0.15] border border-orange-500/20",
    iconCls:  "text-orange-500",
    tagCls:   "text-orange-500",
    hoverCard:"hover:border-orange-500/30 hover:shadow-orange-500/[0.12]",
    tag:   "Mobile First",
    title: "Mobile-First Digital Wallet",
    desc:  "Give customers a powerful digital wallet — tap-to-pay, QR codes, and instant peer-to-peer transfers, all from a single app.",
  },
  {
    Icon: BarChart3,
    iconWrap: "bg-emerald-500/[0.12] dark:bg-emerald-500/[0.15] border border-emerald-500/20",
    iconCls:  "text-emerald-500",
    tagCls:   "text-emerald-500",
    hoverCard:"hover:border-emerald-500/30 hover:shadow-emerald-500/[0.12]",
    tag:   "Analytics",
    title: "Real-Time Analytics Dashboard",
    desc:  "Monitor transactions, track revenue trends, and gain actionable insights with our powerful analytics platform.",
  },
  {
    Icon: Building2,
    iconWrap: "bg-rose-500/[0.12] dark:bg-rose-500/[0.15] border border-rose-500/20",
    iconCls:  "text-rose-500",
    tagCls:   "text-rose-500",
    hoverCard:"hover:border-rose-500/30 hover:shadow-rose-500/[0.12]",
    tag:   "Enterprise",
    title: "Enterprise API & White-Label Solutions",
    desc:  "Integrate mPay into any product with our REST API. White-label our entire stack under your brand.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            mPay Network provides the infrastructure to scale payment operations across the Caribbean.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FEATURES.map(({ Icon, iconWrap, iconCls, tagCls, hoverCard, tag, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={[
                "p-8 rounded-2xl cursor-default overflow-hidden",
                "bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]",
                "shadow-sm hover:shadow-xl transition-[border-color,box-shadow] duration-300",
                hoverCard,
              ].join(" ")}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${iconWrap}`}>
                <Icon size={22} className={iconCls} />
              </div>
              {/* Tag */}
              <p className={`text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-2 ${tagCls}`}>
                {tag}
              </p>
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                {title}
              </h3>
              {/* Desc */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                {desc}
              </p>
              {/* Link */}
              <span className={`inline-flex items-center gap-1 text-sm font-semibold ${tagCls} hover:gap-2 transition-all duration-200 cursor-pointer`}>
                Learn more →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
