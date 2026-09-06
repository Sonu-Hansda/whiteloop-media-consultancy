/** Hand-written service labels scattered behind the hero headline. */
export type HeroLabel = {
  id: string;
  /** "\n" renders as a line break — the span is whitespace-pre-line. */
  label: string;
  /** Position, rotation and colour for this label. */
  className: string;
};

export const heroLabels: HeroLabel[] = [
  {
    id: "positioning",
    label: "Positioning",
    className:
      "left-1/2 top-[10%] -translate-x-1/2 rotate-[1deg] bg-indigo-100 text-indigo-900",
  },
  {
    id: "branding",
    label: "Branding",
    className: "left-[5%] top-[31%] rotate-[-8deg] bg-cyan-100 text-cyan-900",
  },
  {
    id: "organic-traffic",
    label: "Organic\nTraffic",
    className: "right-[7%] top-[27%] rotate-[10deg] bg-amber-100 text-amber-900",
  },
  {
    id: "funnel",
    label: "Funnel",
    className: "left-[13%] top-[67%] rotate-[-5deg] bg-green-100 text-green-900",
  },
  {
    id: "systems",
    label: "Systems",
    className:
      "right-[12%] top-[68%] rotate-[5deg] bg-purple-100 text-purple-900",
  },
  {
    id: "distribution",
    label: "Distribution",
    className:
      "bottom-[7%] left-1/2 -translate-x-1/2 rotate-[-2deg] bg-violet-100 text-violet-900",
  },
];

/** Stand-in faces for the social-proof pill above the headline. */
export type TrustAvatar = { letter: string; className: string };

export const trustAvatars: TrustAvatar[] = [
  { letter: "A", className: "bg-emerald-200 text-emerald-800" },
  { letter: "S", className: "bg-sky-200 text-sky-800" },
  { letter: "J", className: "bg-amber-200 text-amber-800" },
];

export const trustLabel = {
  lead: "Trusted by",
  rest: "founders across the globe",
};
