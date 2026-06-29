'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, MapPin, Printer, Globe } from 'lucide-react';

export default function ContactUsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      telephone: '',
      subject: '',
      comment: '',
    },
  });

  const onSubmit = async (data) => {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form Submitted:', data);
    // You can handle actual form submission here
    reset();
  };

  return (
    <main className="flex flex-col min-h-screen pt-28">
      {/* Page Header */}
      <section className="py-12 md:py-16 px-6 bg-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 uppercase mb-4"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/20 dark:shadow-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="e.g. John"
                  {...register('firstName', { required: 'First name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                    errors.firstName
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="e.g. Doe"
                  {...register('lastName', { required: 'Last name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                    errors.lastName
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="e.g. Acme Corp"
                  {...register('companyName', { required: 'Company Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                    errors.companyName
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Telephone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="telephone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Telephone <span className="text-red-500">*</span>
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="(+1) 416-555-0198"
                  {...register('telephone', { required: 'Telephone is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                    errors.telephone
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.telephone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>
                )}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                    errors.subject
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
            </div>

            {/* Additional Comment */}
            <div className="mb-8 flex flex-col gap-2">
              <label htmlFor="comment" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Additional Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                placeholder="Write your message here..."
                rows={6}
                {...register('comment', { required: 'Comment is required' })}
                className={`w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none ${
                  errors.comment
                    ? 'border-red-500'
                    : 'border-slate-300 dark:border-slate-700'
                }`}
              ></textarea>
              {errors.comment && (
                <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-12 rounded-full transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
              
              {isSubmitSuccessful && (
                <p className="text-green-600 dark:text-green-400 mt-4 text-sm font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </section>

      {/* Office Information Section */}
      <section className="py-16 md:py-24 px-6 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-sm border-t border-slate-200 dark:border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white text-center mb-16"
          >
            mPay Office
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
            {/* Phone */}
            <motion.a
              href="tel:4165722191"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                <Phone size={28} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary transition-colors">
                Phone: 416.572.2191
              </p>
            </motion.a>

            {/* Address */}
            <motion.a
              href="https://maps.app.goo.gl/kXhW9T9oWvQ1nF1U9" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center lg:border-l border-slate-200 dark:border-white/10 lg:pl-6 group"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                <MapPin size={28} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed group-hover:text-primary transition-colors text-sm md:text-base">
                mPayNetwork Inc, Corporate Office,<br />
                TD Canada Trust Tower, 161 Bay St.,<br />
                27th Floor Toronto, ON M5J2S1
              </p>
            </motion.a>

            {/* Fax */}
            <motion.a
              href="tel:4163527754"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center lg:border-l border-slate-200 dark:border-white/10 lg:pl-6 group"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                <Printer size={28} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary transition-colors">
                Fax: 416.352.7754
              </p>
            </motion.a>

            {/* Website */}
            <motion.a
              href="https://www.mpaynetwork.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center lg:border-l border-slate-200 dark:border-white/10 lg:pl-6 group"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                <Globe size={28} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary transition-colors break-all">
                www.mpaynetwork.com
              </p>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}
