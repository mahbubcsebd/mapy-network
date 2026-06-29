'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContentRow({
  title,
  description,
  imageSrc,
  imageAlt,
  imageFirst = false,
  isAlternate = false,
}) {
  const containerClass = isAlternate
    ? 'bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-sm'
    : 'bg-transparent';

  return (
    <section className={`py-16 md:py-24 px-6 overflow-hidden ${containerClass}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col gap-12 lg:gap-16 items-center ${
            imageFirst ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Text Content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: imageFirst ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
              {title}
            </h3>
            <div className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light space-y-4">
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: imageFirst ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[400px]">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
