import type { Metadata } from "next";
import Link from "next/link";
import {
  RecipeIcon,
  HeartIcon,
  LeafIcon,
  CommunityIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Story — Joe's Pizza Palace",
  description:
    "Three generations of passion, one brick oven, and the secret sauce that started it all. Learn about the Russo family's journey from Naples to Brooklyn.",
};

const timeline = [
  {
    year: "1995",
    title: "The Beginning",
    description:
      "Giuseppe Russo opens the original Joe's Pizza Palace on Main Street in Brooklyn with a single brick oven and a family recipe.",
  },
  {
    year: "2003",
    title: "The Expansion",
    description:
      "After eight years of growing demand, we expand our dining room and add our beloved outdoor patio seating.",
  },
  {
    year: "2010",
    title: "Catering Launch",
    description:
      "We begin offering full-service catering, bringing the Joe's experience to weddings, corporate events, and private parties across the city.",
  },
  {
    year: "2018",
    title: "Next Generation",
    description:
      "Joe Russo takes over the kitchen, carrying on his grandfather's legacy while introducing new homemade pasta dishes.",
  },
  {
    year: "2025",
    title: "30 Years Strong",
    description:
      "Three decades of serving Brooklyn. Over 500,000 pizzas. Same brick oven. Same secret sauce. Same commitment to family.",
  },
];

const values = [
  {
    icon: RecipeIcon,
    title: "Authentic Recipes",
    description:
      "Every dish is made from recipes passed down through three generations, using traditional Italian techniques and the freshest ingredients.",
  },
  {
    icon: HeartIcon,
    title: "Family First",
    description:
      "We treat every customer like family. From the moment you walk in, you're part of the Joe's Pizza Palace story.",
  },
  {
    icon: LeafIcon,
    title: "Quality Ingredients",
    description:
      "We source premium cheeses, import San Marzano tomatoes, and make our dough fresh every morning. No shortcuts, ever.",
  },
  {
    icon: CommunityIcon,
    title: "Community Roots",
    description:
      "Brooklyn isn't just where we are — it's who we are. We support local suppliers, sponsor little league teams, and give back to the neighborhood.",
  },
];

const team = [
  {
    name: "Joe Russo",
    role: "Head Chef & Owner",
    bio: "Third-generation pizzaiolo carrying on his grandfather Giuseppe's legacy. Trained in Naples, perfected in Brooklyn.",
    initials: "JR",
  },
  {
    name: "Maria Russo",
    role: "General Manager",
    bio: "The heart of our front-of-house operations. Maria ensures every guest feels like they're dining at a family table.",
    initials: "MR",
  },
  {
    name: "Marco DiNapoli",
    role: "Executive Sous Chef",
    bio: "A culinary school graduate with 15 years of experience in Italian cuisine. Marco crafts our seasonal pasta specials.",
    initials: "MD",
  },
];

export default function About() {
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
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
            Est. 1995
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-body max-w-2xl mx-auto">
            Three generations of passion, one brick oven, and the secret sauce
            that started it all.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Decorative sidebar */}
            <div className="hidden md:block md:col-span-1">
              <div className="sticky top-32">
                <div className="w-1 h-32 bg-gradient-to-b from-accent to-accent/20 rounded-full" />
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <p className="text-lg text-text font-body leading-relaxed">
                In 1995, Giuseppe Russo arrived in Brooklyn with a dream, a
                brick oven, and a sauce recipe his grandmother had perfected in
                Naples. He opened a modest pizzeria on Main Street with just six
                tables and a conviction that authentic Italian flavors could win
                over New York.
              </p>
              <p className="text-lg text-text font-body leading-relaxed">
                Word spread fast. The hand-tossed dough, the fresh mozzarella,
                the sauce with its hint of something nobody could quite place —
                Giuseppe&apos;s pizza wasn&apos;t just food, it was an experience. Families
                made it their Friday tradition. Couples found their favorite
                booth. Kids grew up sneaking extra garlic knots when their
                parents weren&apos;t looking.
              </p>
              <p className="text-lg text-text font-body leading-relaxed">
                Today, Joe — Giuseppe&apos;s grandson — runs the kitchen with the
                same standards his grandfather set. The brick oven is original.
                The sauce recipe hasn&apos;t changed. And the commitment to serving
                every customer like family? That&apos;s the one ingredient we&apos;ll
                never run out of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-primary/[0.03]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Three Decades of Flavor
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <span className="inline-block font-heading text-2xl font-bold text-accent-dark mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted font-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface rounded-2xl p-8 shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-accent-dark" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-primary/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
              The People Behind the Pizza
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-surface rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5"
              >
                {/* Avatar placeholder */}
                <div className="h-48 bg-gradient-to-br from-secondary/15 to-accent/15 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-accent-dark">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent-dark text-sm font-body font-bold mb-3">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-sm font-body leading-relaxed">
                    {member.bio}
                  </p>
                </div>
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
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-8 py-16 md:py-24">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Come Visit Our Family
              </h2>
              <p className="max-w-xl mx-auto text-white/70 text-lg font-body mb-10">
                Experience the warmth, the flavors, and the tradition that have
                made Joe&apos;s a Brooklyn institution for three decades.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-body font-bold rounded-full hover:bg-accent-light transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/30 text-base"
              >
                Get Directions
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
