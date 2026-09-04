import type { Package } from "@/types";

export const packages: Package[] = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Validate your message",
    description:
      "A focused sprint to sharpen your positioning and launch your first content system.",
    price: "$1,200",
    duration: "2 sessions",
    features: [
      "Positioning workshop",
      "Brand voice & style guide",
      "One content funnel",
      "30 days of support",
    ],
    featured: false,
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "The full AI content system",
    description:
      "Our signature 4-session program to build a complete AI content system that attracts and converts.",
    price: "$2,900",
    duration: "4 sessions",
    features: [
      "Everything in Starter",
      "Complete AI content system",
      "Funnel + distribution setup",
      "All 7 growth levers mapped",
      "90 days of support",
    ],
    featured: true,
  },
  {
    slug: "scale",
    name: "Scale",
    tagline: "Ongoing growth partner",
    description:
      "We run your content engine with you — production, optimization, and distribution every month.",
    price: "$4,900",
    duration: "monthly",
    features: [
      "Everything in Growth",
      "Monthly strategy sessions",
      "Content production",
      "Distribution & repurposing",
      "Priority support",
    ],
    featured: false,
  },
];