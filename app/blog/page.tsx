"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";


import { WobblyText } from "@/components/ui/WobblyText";

// Mock Data for Blog Posts
const blogPosts = [
  {
    slug: "seo-strategies-2026",
    title: "SEO in 2026: Why Keywords Are Dead (And What to Do Instead)",
    excerpt: "The landscape of search has changed. Discover how semantic search and AI agents are redefining visibility.",
    date: "Feb 2, 2026",
    readTime: "5 min read",
    category: "SEO",
    imageUrl: "/images/growth.png",
  },
  {
    title: "The Art of Hyper-Personalization in Email Marketing",
    slug: "hyper-personalization-email",
    excerpt: "Stop sending generic blasts. Learn how to use behavioral data to send emails that feel like 1-on-1 conversations.",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    category: "Email Marketing",
    imageUrl: "/images/dashboard.png",
  },
  {
    title: "Social Commerce: Turning Likes into Revenue",
    slug: "social-commerce-guide",
    excerpt: "Social platforms are the new storefronts. Here is your playbook for seamless social selling on Instagram and TikTok.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Social Media",
    imageUrl: "/images/network.png",
  },
];

export default function BlogListing() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
            
          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
            >
                Our Latest <WobblyText><span className="text-primary">Insights</span></WobblyText>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/60 max-w-2xl mx-auto text-lg"
            >
                Trends, strategies, and deep dives into the world of digital marketing.
            </motion.p>
          </div>

          {/* Blog Index */}
          <div className="max-w-4xl mx-auto">
             <div className="border-b border-white/20 mb-8 pb-2 flex justify-between text-xs font-mono uppercase text-white/40">
                <span>Article Title</span>
                <span className="hidden md:inline">Category</span>
             </div>

             <div className="flex flex-col">
                {blogPosts.map((post, index) => (
                    <motion.div
                       key={post.slug}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: index * 0.1 }}
                       viewport={{ once: true }}
                       className="group relative border-b border-white/10 py-8 transition-colors hover:border-white/30"
                    >
                        <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 block relative z-10">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-4 mt-2 text-sm text-white/40 font-mono">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                            </div>
                            
                            <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-white/60 group-hover:bg-white/10 transition-colors self-start md:self-center">
                                {post.category}
                            </span>
                        </Link>
                        
                        {/* Hover Image (Small float, editorial style) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] aspect-video opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden lg:block z-20 rounded-lg overflow-hidden border border-white/20">
                            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
