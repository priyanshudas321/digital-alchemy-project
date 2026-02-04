import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WobblyText } from "@/components/ui/WobblyText";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Massive CTA */}
        <div className="mb-32">
            <h2 className="text-[12vw] leading-[0.8] font-bold font-heading tracking-tighter uppercase mb-8">
                Let&apos;s Talk
            </h2>
            <Link 
                href="/#contact" 
                className="inline-flex items-center gap-4 text-2xl md:text-4xl hover:text-primary transition-colors group"
            >
                <span className="border-b border-white/30 group-hover:border-primary">Start a project</span>
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-black select-none">DA</div>
              <WobblyText className="text-xl font-bold font-heading tracking-tighter cursor-default">Digital Alchemy</WobblyText>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Engineering digital dominance for forward-thinking brands.
            </p>
          </div>

          {/* Socials */}
          <div>
              <h3 className="font-bold mb-6 text-white/40 uppercase text-xs tracking-wider">Socials</h3>
              <ul className="space-y-4">
                  <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">X (Twitter)</a></li>
              </ul>
          </div>

          {/* Sitemaps */}
          <div>
               <h3 className="font-bold mb-6 text-white/40 uppercase text-xs tracking-wider">Sitemap</h3>
               <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
                  <li><Link href="/blog" className="hover:text-primary transition-colors">Insights</Link></li>
                  <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
               </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold mb-6 text-white/40 uppercase text-xs tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>digitalalchemy@gmail.com</li>
              <li>+91 xxxxxxxxxx</li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} Digital Alchemy. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/60 hover:text-primary transition-colors text-sm text-white/60 hover:translate-x-1 inline-block transition-transform duration-200">
        {children}
      </Link>
    </li>
  );
}
