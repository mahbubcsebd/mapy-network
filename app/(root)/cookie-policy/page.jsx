"use client";

import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  const [cookieSettings, setCookieSettings] = useState({
    marketing: false,
    performance: false,
    functionality: true,
    essential: true, // Always true
  });
  const [isSaved, setIsSaved] = useState(false);

  // Load existing cookie settings if any
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const savedSettings = getCookie('mpay_cookie_preferences');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(decodeURIComponent(savedSettings));
        setCookieSettings((prev) => ({ ...prev, ...parsed, essential: true }));
      } catch (e) {
        console.error("Failed to parse cookie preferences", e);
      }
    }
  }, []);

  const handleToggle = (key) => {
    if (key === 'essential') return; // Cannot toggle essential
    setCookieSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveSettings = () => {
    // Set cookie for 1 year
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `mpay_cookie_preferences=${encodeURIComponent(
      JSON.stringify(cookieSettings)
    )}; max-age=${maxAge}; path=/; SameSite=Lax`;
    
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <main className="flex flex-col min-h-screen pt-28 pb-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Decorative gradient blobs for modern look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10"></div>
      
      {/* Page Header */}
      <section className="py-12 md:py-16 px-6 bg-transparent text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 uppercase mb-4">
            Confirm Cookie Settings
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800/80 border border-primary/20 dark:border-primary/30 rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl shadow-primary/5">
            <div className="max-w-none text-slate-700 dark:text-slate-300">
              
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-0 mb-4">
                What are cookies?
              </h2>
              <p className="leading-relaxed mb-8 text-[15px] md:text-base">
                Cookies and tracking technologies are small text files stored on your device when you use a web browser. Some cookies are essential to the operation of our website, while other cookies collect data about your browsing habits. We use this data to provide the best possible service.
              </p>

              <div className="flex flex-col border-t border-slate-200 dark:border-slate-700">
                
                {/* Marketing */}
                <div className="py-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="pt-1">
                    <input 
                      type="checkbox" 
                      id="marketing"
                      checked={cookieSettings.marketing}
                      onChange={() => handleToggle('marketing')}
                      className="w-5 h-5 rounded border-slate-300 text-[#148ecb] focus:ring-[#148ecb] cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="marketing" className="text-lg font-bold text-slate-900 dark:text-white cursor-pointer block mb-2">
                      Marketing
                    </label>
                    <p className="text-sm md:text-[15px] mb-2">
                      We use marketing cookies to deliver advertising we think you will like.
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-500 dark:text-slate-400">
                      For example, marketing cookies allow us to show you personalized mPay advertising based on your interests.
                    </p>
                  </div>
                </div>

                {/* Performance */}
                <div className="py-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="pt-1">
                    <input 
                      type="checkbox" 
                      id="performance"
                      checked={cookieSettings.performance}
                      onChange={() => handleToggle('performance')}
                      className="w-5 h-5 rounded border-slate-300 text-[#148ecb] focus:ring-[#148ecb] cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="performance" className="text-lg font-bold text-slate-900 dark:text-white cursor-pointer block mb-2">
                      Performance
                    </label>
                    <p className="text-sm md:text-[15px] mb-2">
                      Performance cookies allow us to understand how you interact with our site.
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-500 dark:text-slate-400">
                      For example, performance cookies help us learn which parts of your mPay account are the most popular and which parts we can improve for you.
                    </p>
                  </div>
                </div>

                {/* Functionality */}
                <div className="py-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="pt-1">
                    <input 
                      type="checkbox" 
                      id="functionality"
                      checked={cookieSettings.functionality}
                      onChange={() => handleToggle('functionality')}
                      className="w-5 h-5 rounded border-slate-300 text-[#148ecb] focus:ring-[#148ecb] cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="functionality" className="text-lg font-bold text-slate-900 dark:text-white cursor-pointer block mb-2">
                      Functionality
                    </label>
                    <p className="text-sm md:text-[15px] mb-2">
                      We use functional cookies to customize your experience.
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-500 dark:text-slate-400">
                      For example, functional cookies allow us to remember your preferences such as language, country or region, and font sizes.
                    </p>
                  </div>
                </div>

                {/* Essential */}
                <div className="py-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="pt-1 flex items-center justify-center w-5 h-5 text-[#148ecb]">
                    <Lock size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Essential
                    </div>
                    <p className="text-sm md:text-[15px] mb-2">
                      We use essential cookies to ensure that our website functions smoothly.
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-500 dark:text-slate-400">
                      For example, essential cookies allow you to securely log in and browse our website. These cookies help us keep your account secure and prevent fraud.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-10 flex flex-col items-center">
                <button
                  onClick={handleSaveSettings}
                  className="bg-[#148ecb] hover:bg-[#1176a8] text-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Confirm cookie settings
                </button>
                {isSaved && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 mt-4 font-medium"
                  >
                    Your preferences have been saved successfully!
                  </motion.p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
