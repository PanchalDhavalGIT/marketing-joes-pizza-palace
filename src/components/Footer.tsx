import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Pizza",
  "Pasta",
  "Catering",
  "Delivery",
  "Dine-In",
  "Private Events",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-surface/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6 2 10c0 1.5.5 3 1.5 4.2L12 22l8.5-7.8C21.5 13 22 11.5 22 10c0-4-4.48-8-10-8z" fill="#d4a373"/>
                  <circle cx="9" cy="9" r="1.5" fill="#5c3d2e"/>
                  <circle cx="14" cy="8" r="1" fill="#5c3d2e"/>
                  <circle cx="11" cy="12" r="1.2" fill="#5c3d2e"/>
                </svg>
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-surface block">
                  Joe&apos;s Pizza
                </span>
                <span className="text-xs text-accent tracking-widest uppercase">
                  Brooklyn&apos;s Finest
                </span>
              </div>
            </div>
            <p className="text-sm text-surface/60 leading-relaxed mb-6">
              Family-owned Italian restaurant serving authentic New York-style
              pizza and homemade pasta. Three generations of flavor, one
              unforgettable experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold text-surface mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface/60 hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-base font-bold text-surface mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-surface/60 hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-base font-bold text-surface mb-4">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-surface/60">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>123 Main St<br />Brooklyn, NY 11201</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:555-867-5309" className="hover:text-accent transition-colors duration-200 cursor-pointer">
                  555-867-5309
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@joespizza.com" className="hover:text-accent transition-colors duration-200 cursor-pointer">
                  info@joespizza.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/40">
            &copy; 2026 Joe&apos;s Pizza Palace. All rights reserved.
          </p>
          <p className="text-xs text-surface/40">
            Brick oven baked with love in Brooklyn, NY
          </p>
        </div>
      </div>
    </footer>
  );
}
