"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURE_BLOCKS = [
  {
    id: 1,
    title: "A pan-Caribbean Payment Network",
    description: "mPayNetwork is a pan-Caribbean Payment Network directly connected and launched across Curaçao, Aruba, Barbados, Bonaire and Haiti in partnership with the regional banks in these countries.",
    image: "/images/home_2.png",
    imageAlt: "Man using smartphone",
    reversed: false,
  },
  {
    id: 2,
    title: "A cardless zero fraud financial network",
    description: "A robust, secure and fraudless financial network in which the end user is in total control of their finances. Our network is PCI compliant and security certified by independent third parties.",
    image: "/images/home_3.svg",
    imageAlt: "Smartwatch interface",
    reversed: true,
  },
  {
    id: 3,
    title: "Domestic, eCommerce & Cross Border Payments",
    description: "Both domestic and cross border payments are seamlessly done in real time with instant credit to the respective wallet accounts. We facilitate eCommerce seamlessly both domestic and international with purchasing power across the regional merchants as well as online via Amazon, eBay, Alibaba etc.",
    image: "/images/map.gif",
    imageAlt: "Payment map animation",
    reversed: false,
  },
  {
    id: 4,
    title: "Quietly transforming your country's payments landscape",
    description: "We believe in innovation and transformation of lives by making financial transactions easy, affordable and secure.",
    image: "/images/home_4.png",
    imageAlt: "Caribbean island landscape",
    reversed: true,
  }
];

export default function AlternatingFeatures() {
  return (
    <section className="py-16 md:py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto space-y-32">
        {FEATURE_BLOCKS.map((block, index) => (
          <div
            key={block.id}
            className={`flex flex-col gap-12 lg:gap-20 items-center ${
              block.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: block.reversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {block.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {block.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: block.reversed ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-1 w-full flex justify-center"
            >
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 dark:shadow-primary/10">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  unoptimized={block.image.endsWith('.gif')}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
