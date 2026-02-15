import type { Metadata } from "next";
import Link from "next/link";
import { ClockIcon, TagIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "From Our Kitchen — Joe's Pizza Palace Blog",
  description:
    "Stories, recipes, and a behind-the-scenes look at life inside Brooklyn's favorite pizzeria.",
};

const posts = [
  {
    title: "The Secret Behind Our Brick Oven: Why It Makes All the Difference",
    excerpt:
      "Our original 1995 brick oven isn't just a cooking tool — it's the soul of our restaurant. Learn why brick oven baking creates a pizza experience that no conventional oven can match, from the perfect char to the smoky depth of flavor.",
    date: "February 10, 2026",
    category: "Behind the Scenes",
    readTime: "5 min read",
  },
  {
    title: "From Naples to Brooklyn: The Russo Family's Journey",
    excerpt:
      "Every great restaurant has an origin story. Ours starts in a small Neapolitan kitchen where a grandmother taught her grandson that the best food is made with love, patience, and just the right amount of garlic.",
    date: "January 25, 2026",
    category: "Our Story",
    readTime: "7 min read",
  },
  {
    title: "5 Tips for Hosting the Perfect Pizza Party at Home",
    excerpt:
      "Planning a pizza night? Our head chef Joe shares his insider tips for creating a memorable pizza party — from dough stretching techniques to the perfect topping combinations that'll impress your guests.",
    date: "January 12, 2026",
    category: "Tips & Recipes",
    readTime: "4 min read",
  },
];

export default function Blog() {
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
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
            Our Blog
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            From Our Kitchen
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-body max-w-2xl mx-auto">
            Stories, recipes, and a behind-the-scenes look at life inside
            Brooklyn&apos;s favorite pizzeria.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-surface rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(92,61,46,0.06)] border border-accent/5 hover:shadow-[0_12px_40px_rgba(92,61,46,0.14)] hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent-dark"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-accent-dark">
                      <TagIcon className="w-3.5 h-3.5" />
                      <span className="text-xs font-body font-bold">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <ClockIcon className="w-3.5 h-3.5" />
                      <span className="text-xs font-body">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-heading text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-text-muted font-body text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted font-body">
                      {post.date}
                    </span>
                    <span className="group/link inline-flex items-center gap-1 text-sm font-body font-bold text-accent-dark hover:text-primary transition-colors duration-200 cursor-pointer">
                      Read More
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 bg-primary/[0.03]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-body font-bold text-accent tracking-widest uppercase mb-4">
            Stay Updated
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Fresh Stories from Our Kitchen
          </h2>
          <p className="text-text-muted text-lg font-body mb-8">
            Recipes, behind-the-scenes stories, and exclusive offers delivered
            straight to your inbox.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-surface font-body font-bold rounded-full hover:bg-secondary transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary/20 text-base"
          >
            Get in Touch
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
