"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { use, useState, useEffect } from "react";

// Mock Data Lookup (In a real app, this would be a fetch)
const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "seo-strategies-2026": {
    title: "SEO in 2026: Why Keywords Are Dead (And What to Do Instead)",
    category: "SEO",
    date: "Feb 2, 2026",
    readTime: "5 min read",
    content: `
      <p class="lead">The era of keyword stuffing is long gone. As we move significantly into 2026, the search landscape is dominated by AI agents and semantic understanding. Here's how to adapt.</p>
      
      <h2> The Shift to Semantic Search </h2>
      <p>Search engines like Google (and now AI answers from models like Gemini and GPT-5) don't just look for string matches. They understand <em>intent</em>. If your content answers the user's underlying problem, you win. If it just repeats usage of "best digital marketing agency," you lose.</p>
      
      <h3>Key Takeaways for 2026</h3>
      <ul>
        <li><strong>Focus on Entities, Not Keywords:</strong> Structure your data so machines understand the <em>things</em> you are talking about.</li>
        <li><strong>Originality is King:</strong> With AI generating commodity content, unique human insight and data is the only differentiator.</li>
        <li><strong>Video First:</strong> Search results are 40% video now. If you aren't on YouTube or TikTok, you aren't in search.</li>
      </ul>
      
      <h2>Actionable Next Steps</h2>
      <p>Start by auditing your existing content. Remove fluff. Add original data points, case studies, and expert quotes. Make your content "un-generate-able" by AI without your specific proprietary knowledge.</p>
    `,
  },
  // Fallback for other slugs
  "default": {
    title: "The Art of Digital Dominance",
    category: "Insights",
    date: "Jan 1, 2026",
    readTime: "3 min read",
    content: `
      <p class="lead">This is a placeholder article for demonstration purposes. In a real application, this content would be fetched dynamically from a CMS like Sanity, Contentful, or a database based on the URL slug.</p>
      <h2>Why Content Matters</h2>
      <p>Content is the bridge between your value proposition and your customer's needs. Without it, you are a commodity. With it, you are a thought leader.</p>
    `
  }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use()
  const { slug } = use(params);
  const post = posts[slug as keyof typeof posts] || posts["default"];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-primary z-[100]" style={{ width: `${progress * 100}%` }} />
      
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 text-sm font-medium group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                 {post.category}
               </span>
               <div className="flex items-center gap-4 text-white/40 text-sm">
                 <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                 <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
               </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-8">
              {post.title}
            </h1>

            {/* Author Block */}
            <div className="flex items-center gap-4 border-y border-white/5 py-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                   <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">V</div>
                </div>
                <div>
                   <p className="text-white font-medium text-sm">Vickxy Editorial Team</p>
                   <p className="text-white/40 text-xs">Digital Growth Experts</p>
                </div>
                <div className="ml-auto flex gap-2">
                   <button className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-primary/20 hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></button>
                   <button className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-primary/20 hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></button>
                   <button className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-primary/20 hover:text-primary transition-colors"><Share2 className="w-4 h-4" /></button>
                </div>
            </div>
          </header>

          {/* Article Content */}
          <article 
             className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-300 prose-img:rounded-xl"
             dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
