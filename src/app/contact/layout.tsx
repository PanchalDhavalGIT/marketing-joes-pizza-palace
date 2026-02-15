import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Joe's Pizza Palace",
  description:
    "Get in touch with Joe's Pizza Palace. Place an order, book a private event, or request catering. Located at 123 Main St, Brooklyn, NY.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
