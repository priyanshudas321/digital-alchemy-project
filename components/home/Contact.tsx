"use client";

import { Phone, MessageSquare, Mail } from "lucide-react";

import { WobblyText } from "@/components/ui/WobblyText";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-16 text-center lg:text-left">
             <h2 className="text-4xl md:text-5xl font-bold font-heading text-white uppercase tracking-tighter mb-4">
            <WobblyText>Contact <span className="text-secondary">Us</span></WobblyText>
          </h2>
          <p className="text-white/60 text-lg">
             Email, call, WhatsApp or fill the form below to let us know how we can help you out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Get in Touch */}
            <div className="lg:col-span-4 space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <p className="text-white/60 leading-relaxed mb-8">
                        You can email us, call us, message us on WhatsApp, or fill out the form below to let us know how we can help you.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Item 1 */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Phone Number</p>
                            <p className="text-white font-medium text-lg hover:text-secondary transition-colors cursor-pointer">+91 xxxxxxxxxx</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">WhatsApp</p>
                            <p className="text-white font-medium text-lg hover:text-secondary transition-colors cursor-pointer">+91 xxxxxxxxxx</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Email</p>
                            <p className="text-white font-medium text-lg hover:text-secondary transition-colors cursor-pointer">digitalalchemy@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-8">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                    {/* Glossy sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    
                    <form className="relative z-10 space-y-8">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80">Full Name<span className="text-red-500">*</span></label>
                                <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all focus:ring-1 focus:ring-secondary/50" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80">Email<span className="text-red-500">*</span></label>
                                <input type="email" placeholder="john@company.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all focus:ring-1 focus:ring-secondary/50" />
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80">WhatsApp Phone Number<span className="text-red-500">*</span></label>
                                <div className="flex">
                                    <span className="bg-black/40 border border-white/10 border-r-0 rounded-l-xl px-4 py-4 text-white/60 text-sm flex items-center">India (+91)</span>
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-black/40 border border-white/10 rounded-r-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all focus:ring-1 focus:ring-secondary/50" />
                                </div>
                             </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-white/80">Company/Organisation Name<span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Your Company" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all focus:ring-1 focus:ring-secondary/50" />
                             </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">Company Website (Optional)</label>
                            <input type="url" placeholder="https://yourcompany.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all focus:ring-1 focus:ring-secondary/50" />
                        </div>
                        
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">Choose the Service<span className="text-red-500">*</span></label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all focus:ring-1 focus:ring-secondary/50 appearance-none">
                                <option>Select a service...</option>
                                <option>SEO & Content</option>
                                <option>Paid Advertising</option>
                                <option>Social Media Management</option>
                                <option>Email Automation</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white/80">Message<span className="text-red-500">*</span></label>
                            <textarea placeholder="Tell us about your project..." rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary transition-all resize-none focus:ring-1 focus:ring-secondary/50"></textarea>
                            <p className="text-xs text-white/30 text-right">0/500 characters</p>
                        </div>

                        <button className="w-full bg-secondary text-black font-bold text-lg py-5 rounded-xl hover:bg-secondary/90 transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:scale-[1.01] active:scale-[0.99] uppercase tracking-wide">
                            Submit Form
                        </button>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
