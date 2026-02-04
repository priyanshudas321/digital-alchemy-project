"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { WobblyText } from "@/components/ui/WobblyText";

export function WhyUs() {
  return (
    <section id="about" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white uppercase tracking-tighter mb-6">
            Beyond <WobblyText><span className="text-primary italic font-serif">Agencies</span></WobblyText>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl">
            We don&apos;t sell &quot;hours.&quot; We sell outcomes. Our infrastructure is built for one thing: Dominance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: The Philosophy (Large Vertical) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="row-span-2 col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <Image 
                 src="/images/anti-agency-v2.png" 
                 alt="Anti-Agency Philosophy" 
                 fill 
                 className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <ShieldCheck className="w-12 h-12 text-white mb-8 relative z-20" />
            <div className="relative z-20">
                <h3 className="text-2xl font-bold text-white mb-4">The Anti-Agency</h3>
                <p className="text-white/80 leading-relaxed font-medium">
                    Traditional agencies bloat your budget with account managers. We run lean, deploying senior strategists and AI agents to execute faster than humanly possible.
                </p>
            </div>
          </motion.div>

          {/* Card 2: The Stat (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:bg-secondary/20 transition-colors duration-700" />
             
             <div>
                 <h3 className="text-white/60 uppercase tracking-widest text-sm font-bold mb-2">Client Retention</h3>
                 <div className="relative w-[200px] h-[100px] md:w-[300px] md:h-[150px] rounded-lg overflow-hidden"> {/* Added a wrapper div for the image */}
                    <Image 
                    src="/images/dashboard.png" 
                    alt="Vickxy Digital Marketing Strategy" 
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                 </div>
             </div>
             <p className="text-white/60 max-w-xs text-right mt-4 md:mt-0 relative z-10">
                Because when you make money, you don&apos;t leave. It&apos;s simple math.
             </p>
          </motion.div>

          {/* Card 3: Growth (Square) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
             className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors"
          >
              <TrendingUp className="w-16 h-16 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white">300% Avg. ROI</h3>
          </motion.div>

          {/* Card 4: Team (Square) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             viewport={{ once: true }}
             className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors"
          >
              <Users className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white">24/7 Support</h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
