"use client";

const TESTIMONIALS = [
  {
    name: "Marvin Thomas",
    role: "CEO, Caribbean Retail Group",
    rating: 5,
    text: "mPay transformed our payment operations. Cross-border settlements that used to take days now happen overnight. The fraud protection is outstanding.",
    avatar: "MT",
    avatarCls: "bg-blue-500/20 text-blue-500",
  },
  {
    name: "Sophia Pierre",
    role: "CFO, TrinTech Solutions",
    rating: 5,
    text: "The API integration was seamless. Our developers had us live in two days. The analytics dashboard gives us real-time insights we never had before.",
    avatar: "SP",
    avatarCls: "bg-violet-500/20 text-violet-500",
  },
  {
    name: "David Walcott",
    role: "Owner, Barbados Beach Resort",
    rating: 5,
    text: "Our international guests can now pay with any method they prefer. Revenue is up 34% since switching to mPay.",
    avatar: "DW",
    avatarCls: "bg-emerald-500/20 text-emerald-500",
  },
  {
    name: "Kezia Browne",
    role: "Director, Eastern Caribbean Bank",
    rating: 5,
    text: "mPay's compliance framework is enterprise-grade. PCI DSS, AML — everything was already handled. Our auditors were impressed.",
    avatar: "KB",
    avatarCls: "bg-orange-500/20 text-orange-500",
  },
  {
    name: "Andre Joseph",
    role: "CTO, FinServ Antigua",
    rating: 5,
    text: "The uptime has been flawless — 99.9% as advertised. When we need support, the team responds within minutes.",
    avatar: "AJ",
    avatarCls: "bg-cyan-500/20 text-cyan-500",
  },
  {
    name: "Priya Ramlal",
    role: "E-commerce Manager, TT Mart",
    rating: 5,
    text: "Setup took one afternoon. The QR code payments are a massive hit with our customers. Chargebacks dropped to zero.",
    avatar: "PR",
    avatarCls: "bg-rose-500/20 text-rose-500",
  },
];

/* Duplicate for infinite scroll effect */
const ALL = [...TESTIMONIALS, ...TESTIMONIALS];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-white/[0.05]">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 text-primary text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Loved by Caribbean Businesses
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Join thousands of businesses already growing with mPay Network.
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {ALL.map(({ name, role, rating, text, avatar, avatarCls }, i) => (
            <div
              key={`${name}-${i}`}
              className="min-w-[340px] max-w-[340px] flex-shrink-0 p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] shadow-sm"
            >
              <StarRating count={rating} />
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${avatarCls}`}>
                  {avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
