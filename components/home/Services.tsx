"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WobblyText } from "@/components/ui/WobblyText";

const services = [
  {
    id: "01",
    title: "ROI-Obsessed SEO",
    description: "Dominating search results with semantic strategies.",
    image: "/images/growth.png",
  },
  {
    id: "02",
    title: "Content Marketing",
    description: "Stories that convert readers into revenue.",
    image: "/images/dashboard.png",
  },
  {
    id: "03",
    title: "Social Growth",
    description: "Building cult-like communities on X & LinkedIn.",
    image: "/images/network.png",
  },
  {
    id: "04",
    title: "Email Automation",
    description: "Hyper-personalized flows that print money.",
    image: "/images/dashboard.png",
  },
  {
    id: "05",
    title: "Paid Advertising",
    description: "High-ROAS campaigns on Meta & Google.",
    image: "/images/growth.png", // Reusing for consistency
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white uppercase tracking-tighter">
            Our <WobblyText><span className="text-primary italic font-serif">Expertise</span></WobblyText>
          </h2>
          <p className="text-white/60 max-w-sm text-lg">
            A suite of digital weapons designed to scale your business.
          </p>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border-t border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-4 relative z-10 px-4">
                <div className="flex items-baseline gap-8">
                  <span className="text-sm font-mono text-white/40">{service.id}</span>
                  <h3 className="text-3xl md:text-5xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-8 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity">
                  <p className="text-white/60 text-sm hidden md:block max-w-xs text-right">
                    {service.description}
                  </p>
                  <ArrowUpRight className="w-8 h-8 text-white group-hover:text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover Image Reveal */}
              <AnimatePresence>
                {hoveredService === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] pointer-events-none z-0 hidden lg:block rounded-xl overflow-hidden border border-white/20 shadow-2xl"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
