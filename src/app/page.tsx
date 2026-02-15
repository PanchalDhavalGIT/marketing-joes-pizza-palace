import Link from "next/link";
import {
  PizzaIcon,
  PastaIcon,
  CateringIcon,
  DeliveryIcon,
  DineInIcon,
  EventsIcon,
  StarIcon,
  QuoteIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const stats = [
  { number: "30+", label: "Years of Tradition" },
  { number: "500K+", label: "Pizzas Served" },
  { number: "4.9", label: "Star Rating" },
  { number: "3", label: "Generations" },
];

const services = [
  {
    icon: PizzaIcon,
    title: "Pizza",
    description:
      "Hand-tossed, brick oven baked with San Marzano tomatoes and fresh mozzarella. Classic or specialty.",
  },
  {
    icon: PastaIcon,
    title: "Pasta",
    description:
      "Handmade fresh daily using traditional Italian techniques. From fettuccine to rigatoni.",
  },
  {
    icon: CateringIcon,
    title: "Catering",
    description:
      "Full-service catering for events of 20 to 200+. Custom menus and professional staff included.",
  },
  {
    icon: DeliveryIcon,
    title: "Delivery",
    description:
      "Hot and fresh to your door. Brooklyn-wide coverage, seven days a week.",
  },
  {
    icon: DineInIcon,
    title: "Dine-In",
    description:
      "Warm, rustic atmosphere with a full bar, wine list, and outdoor patio seating.",
  },
  {
    icon: EventsIcon,
    title: "Private Events",
    description:
      "Private dining for up to 60 guests with dedicated staff and custom menu planning.",
  },
];

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Local Regular",
    text: "I've been coming to Joe's every Friday for fifteen years. The margherita pizza is hands down the best in Brooklyn. You can taste the love in every bite.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Food Blogger",
    text: "If you want to know what real New York pizza tastes like, Joe's is the answer. The crust is perfectly charred, the sauce has incredible depth of flavor, and the atmosphere feels like family.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Event Planner",
    text: "We booked Joe's for our company holiday party and they exceeded every expectation. The catering was impeccable, the pasta was divine, and their team made the process seamless.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Warm accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-accent-light text-sm font-body tracking-wide">
              Family-Owned Since 1995
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Brick Oven Pizza,
            <br />
            <span className="text-accent">Made the Brooklyn Way</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/75 font-body mb-10 leading-relaxed">
            Three generations of passion. One unforgettable slice. Authentic
            New York-style pizza baked in our signature brick oven with a
            secret sauce recipe that keeps Brooklyn coming back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-body font-bold rounded-full hover:bg-accent-light transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/30 text-base"
            >
              Order Now
              <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-body font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer text-base"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-2xl shadow-[0_8px_40px_rgba(92,61,46,0.12)] p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-accent-dark mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-muted font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              More Than Just Great Pizza
            </h2>
            <p className="text-text-muted text-lg font-body">
              From our brick oven to your table — whether you&apos;re dining in,
              ordering delivery, or planning a private event, we bring the same
              passion to every dish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group bg-surface rounded-2xl p-8 shadow-[0_4px_24px_rgba(92,61,46,0.06)] hover:shadow-[0_12px_40px_rgba(92,61,46,0.14)] transition-all duration-200 cursor-pointer hover:-translate-y-1 border border-accent/5 hover:border-accent/15"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-200">
                  <service.icon className="w-7 h-7 text-accent-dark" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-24 md:py-32 bg-primary/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-accent-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.48 2 2 6 2 10c0 1.5.5 3 1.5 4.2L12 22l8.5-7.8C21.5 13 22 11.5 22 10c0-4-4.48-8-10-8z"/>
                      <circle cx="9" cy="9" r="1.5"/>
                      <circle cx="14" cy="8" r="1"/>
                      <circle cx="11" cy="12" r="1.2"/>
                    </svg>
                  </div>
                  <p className="text-text-muted font-body text-sm">
                    Our brick oven, baking since 1995
                  </p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                A Family Legacy in Every Bite
              </h2>
              <p className="text-text-muted text-lg font-body mb-6 leading-relaxed">
                When Giuseppe Russo opened a small pizzeria on Main Street in
                1995, he had one vision: bring the authentic flavors of his
                Neapolitan childhood to Brooklyn. Three decades later, his
                grandson Joe continues the tradition with the same brick oven,
                the same secret sauce, and the same unwavering commitment to
                quality.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-accent-dark font-body font-bold hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                Read Our Story
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              What Brooklyn Is Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-surface rounded-2xl p-8 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5 relative"
              >
                <QuoteIcon className="w-10 h-10 text-accent absolute top-6 right-6" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 text-accent"
                    />
                  ))}
                </div>
                <p className="text-text font-body text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <span className="font-heading text-sm font-bold text-accent-dark">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-bold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-xs text-text-muted">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl overflow-hidden">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-8 py-16 md:py-24">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Taste the Tradition?
              </h2>
              <p className="max-w-xl mx-auto text-white/70 text-lg font-body mb-10">
                Whether it&apos;s a quick slice, a family dinner, or catering for
                your next big event — we&apos;re here to serve you the best pizza
                Brooklyn has to offer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-body font-bold rounded-full hover:bg-accent-light transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/30 text-base"
                >
                  Get in Touch
                  <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-body font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer text-base"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
