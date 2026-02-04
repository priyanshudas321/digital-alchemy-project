"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

// Simple utility for class merging if not already present
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-violet-400 text-white shadow-lg shadow-primary/20 transition-all group-hover:scale-105 group-hover:shadow-primary/40">
                <span className="font-heading font-bold text-xl">DA</span>
            </div>
            <span className="text-xl font-bold font-heading tracking-tighter hover:text-primary transition-colors">
              Digital Alchemy
            </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
            <Link
            href="/#contact"
            className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-95"
             onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
