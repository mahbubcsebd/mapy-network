"use client";

import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/[0.05] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] dark:bg-primary/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 text-primary text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
            Regional Network
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            A True Pan-Caribbean Network
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Seamlessly routing payments across borders. Real-time settlement between major Caribbean financial hubs.
          </p>
        </div>

        {/* Network Map Container */}
        <div className="relative w-full max-w-4xl mx-auto bg-white dark:bg-slate-950/50 rounded-3xl border border-slate-200 dark:border-white/[0.08] shadow-sm overflow-hidden flex items-center justify-center p-4 sm:p-8">
          
          {/* Map GIF */}
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
            <Image
              src="/images/map.gif"
              alt="Pan-Caribbean Network Map"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
