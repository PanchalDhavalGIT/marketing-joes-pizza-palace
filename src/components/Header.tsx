"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface/80 border-b border-accent/10 shadow-[0_2px_20px_rgba(92,61,46,0.1)]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6 2 10c0 1.5.5 3 1.5 4.2L12 22l8.5-7.8C21.5 13 22 11.5 22 10c0-4-4.48-8-10-8z" fill="#d4a373"/>
              <circle cx="9" cy="9" r="1.5" fill="#5c3d2e"/>
              <circle cx="14" cy="8" r="1" fill="#5c3d2e"/>
              <circle cx="11" cy="12" r="1.2" fill="#5c3d2e"/>
            </svg>
          </div>
          <div>
            <span className="font-heading text-lg md:text-xl font-bold text-primary leading-tight block">
              Joe&apos;s Pizza
            </span>
            <span className="text-[10px] md:text-xs text-text-muted tracking-widest uppercase font-body">
              Brooklyn&apos;s Finest
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-body font-medium text-text-muted hover:text-primary rounded-lg hover:bg-accent/10 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 text-sm font-body font-bold bg-primary text-surface rounded-full hover:bg-secondary transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-accent/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-body font-medium text-text-muted hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 text-center text-base font-body font-bold bg-primary text-surface rounded-full hover:bg-secondary transition-all duration-200 cursor-pointer"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
