"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Massive Editorial Text */}
        <div className="flex flex-col items-center justify-center">
          <motion.h1 
            className="text-[12vw] leading-[0.85] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter text-center uppercase mix-blend-overlay"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1 }}
          >
            Digital
          </motion.h1>
          
          <motion.div 
            className="text-[12vw] leading-[0.85] font-bold font-heading tracking-tighter text-center uppercase flex items-center justify-center gap-4 sm:gap-12"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-300 to-amber-200 animate-liquid italic font-serif">
                Alchemy
            </span>
          </motion.div>
        </div>

        {/* Subtext & CTA */}
        <div className="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-5 md:col-start-8">
            <motion.p 
              className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We don&apos;t just &quot;do marketing.&quot; We engineer <span className="text-white font-medium">digital dominance</span> for brands ready to outpace the competition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-6"
            >
              <Link 
                href="/#contact" 
                className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden flex items-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                <span className="relative z-10">Start the reaction</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/#services" className="text-white hover:text-secondary transition-colors underline decoration-white/30 underline-offset-8 decoration-1 hover:decoration-secondary">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Decorative Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0 pointer-events-none" />
    </section>
  );
}
