import type { Metadata } from "next";
import Link from "next/link";
import {
  PizzaIcon,
  PastaIcon,
  CateringIcon,
  DeliveryIcon,
  DineInIcon,
  EventsIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "What We Offer — Joe's Pizza Palace",
  description:
    "From brick oven pizza and handmade pasta to full-service catering and private events — discover everything Joe's Pizza Palace has to offer.",
};

const services = [
  {
    icon: PizzaIcon,
    title: "Pizza",
    description:
      "Our signature brick oven pizzas are the heart of everything we do. Hand-tossed dough, San Marzano tomato sauce, fresh mozzarella, and toppings that range from classic margherita to our legendary Meat Lover's Supreme. Every pie is baked to perfection in our original 1995 brick oven.",
    features: [
      "Classic & specialty pies",
      "Brick oven baked",
      "Gluten-free options available",
      "By the slice or whole pie",
    ],
  },
  {
    icon: PastaIcon,
    title: "Pasta",
    description:
      "Handmade fresh daily using traditional Italian techniques. From silky fettuccine alfredo to our rich, slow-simmered bolognese, every pasta dish showcases the depth of flavor that only fresh, house-made noodles can deliver.",
    features: [
      "Made fresh daily",
      "Classic Italian recipes",
      "Seasonal specials",
      "Family-size portions available",
    ],
  },
  {
    icon: CateringIcon,
    title: "Catering",
    description:
      "Bring the Joe's experience to your next event. Our full-service catering team handles everything from intimate dinner parties to large corporate gatherings, with customizable menus that showcase our full range of Italian specialties.",
    features: [
      "Custom menus",
      "Full-service setup",
      "Events of 20 to 200+",
      "Professional staff included",
    ],
  },
  {
    icon: DeliveryIcon,
    title: "Delivery",
    description:
      "Can't make it to Brooklyn? We'll bring Brooklyn to you. Our delivery service ensures your pizza arrives hot, fresh, and exactly as it would taste straight from our brick oven. Available seven days a week across Brooklyn and surrounding areas.",
    features: [
      "Hot & fresh guarantee",
      "7 days a week",
      "Brooklyn-wide coverage",
      "Online ordering",
    ],
  },
  {
    icon: DineInIcon,
    title: "Dine-In",
    description:
      "Pull up a chair and stay awhile. Our warm, rustic dining room is the perfect setting for everything from a casual weeknight dinner to a celebratory family feast. Enjoy the aroma of our brick oven, a glass of Italian wine, and hospitality that feels like home.",
    features: [
      "Warm, inviting atmosphere",
      "Full bar & wine list",
      "Family-friendly",
      "Outdoor patio seating",
    ],
  },
  {
    icon: EventsIcon,
    title: "Private Events",
    description:
      "Celebrate life's milestones at Joe's. Our private dining space accommodates up to 60 guests and comes with dedicated staff, custom menu planning, and the unmistakable warmth of a Joe's Pizza Palace experience.",
    features: [
      "Private dining room",
      "Up to 60 guests",
      "Custom menu planning",
      "Dedicated event coordinator",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Choose Your Experience",
    description:
      "Browse our menu, pick your favorites, or tell us about your event. We'll help you craft the perfect meal.",
  },
  {
    step: 2,
    title: "We Prepare with Care",
    description:
      "Every dish is made fresh to order using our family recipes, premium ingredients, and our legendary brick oven.",
  },
  {
    step: 3,
    title: "Enjoy Every Bite",
    description:
      "Whether you're dining in our restaurant, hosting an event, or opening a delivery box at home — savor the tradition.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
            Our Menu
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            What We Offer
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-body max-w-2xl mx-auto">
            From quick slices to full-service catering, we bring the same
            passion and quality to everything we do.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 !== 0 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Icon / Visual */}
                <div
                  className={`${
                    index % 2 !== 0 ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center border border-accent/10">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-accent/15 flex items-center justify-center">
                        <service.icon className="w-10 h-10 text-accent-dark" />
                      </div>
                      <span className="font-heading text-lg font-bold text-primary">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted font-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                          <CheckIcon className="w-3.5 h-3.5 text-accent-dark" />
                        </div>
                        <span className="text-text font-body text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-primary/[0.03]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
              Simple & Easy
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-accent-dark">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-8 py-16 md:py-24">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Place an Order?
              </h2>
              <p className="max-w-xl mx-auto text-white/70 text-lg font-body mb-10">
                Whether you&apos;re craving a classic margherita or planning a
                catered event, we&apos;re here to make it happen.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-body font-bold rounded-full hover:bg-accent-light transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/30 text-base"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
