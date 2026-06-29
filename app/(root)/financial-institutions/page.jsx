"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const sliderImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
];

const FinancialInstitutions = () => {
  return (
    <main className="flex flex-col min-h-screen pt-28 overflow-hidden relative">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] opacity-30 pointer-events-none -z-10"></div>

      {/* Page Header */}
      <section className="py-12 md:py-16 px-6 bg-transparent text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 uppercase mb-8">
            Financial Institutions
          </h1>
          <p className="text-[17px] md:text-[19px] text-slate-600 dark:text-slate-300 leading-[1.8] max-w-3xl mx-auto">
            Join the mPay network to transform and broaden the business and
            consumer customer base. mPay Network works with the regional banks
            to ensure the complete wallet ecosystem is within the local region and
            the money is secure and transparent and stays within the financial
            institutions.
          </p>
        </div>
      </section>

      <div className="w-full relative mt-4 max-w-[1600px] mx-auto px-4 pb-12 z-10 flex-grow">
        <style jsx global>{`
          .financial-swiper .swiper-slide {
            width: 300px;
            height: 250px;
          }
          @media (min-width: 640px) {
            .financial-swiper .swiper-slide {
              width: 450px;
              height: 320px;
            }
          }
          @media (min-width: 1024px) {
            .financial-swiper .swiper-slide {
              width: 600px;
              height: 400px;
            }
          }
          .financial-swiper .swiper-slide-shadow-left,
          .financial-swiper .swiper-slide-shadow-right {
            border-radius: 1.5rem;
          }
          .financial-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #f97316; /* using orange theme for bullet active state based on contact-us icons if preferred, or primary blue */
            opacity: 0.3;
            transition: all 0.3s ease;
          }
          .financial-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            width: 24px;
            border-radius: 6px;
            background: #148ecb; /* Primary brand color */
          }
        `}</style>
        
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={2}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="financial-swiper w-full py-12"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                <Image
                  src={img}
                  alt={`Financial Institution slide ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default FinancialInstitutions;
