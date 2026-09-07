/** Hand-written service labels scattered behind the hero headline. */
export type HeroLabel = {
  id: string;
  /** "\n" renders as a line break — the span is whitespace-pre-line. */
  label: string;
  /** Sticker colour. */
  tone: string;
  /**
   * Placement. Base classes position the sticker on mobile, where it has to
   * hug the edges to stay clear of the headline; `md:` classes restore the
   * looser desktop scatter.
   */
  position: string;
};

export const heroLabels: HeroLabel[] = [
  {
    id: "positioning",
    label: "Positioning",
    tone: "bg-indigo-100 text-indigo-900",
    position:
      "left-[3%] top-[2%] rotate-[-7deg] md:left-1/2 md:top-[10%] md:-translate-x-1/2 md:rotate-[1deg]",
  },
  {
    id: "organic-traffic",
    label: "Organic\nTraffic",
    tone: "bg-amber-100 text-amber-900",
    position:
      "right-[3%] top-[3%] rotate-[9deg] md:right-[7%] md:top-[27%] md:rotate-[10deg]",
  },
  {
    id: "branding",
    label: "Branding",
    tone: "bg-cyan-100 text-cyan-900",
    position:
      "left-[2%] top-[33%] rotate-[-10deg] md:left-[5%] md:top-[31%] md:rotate-[-8deg]",
  },
  {
    id: "systems",
    label: "Systems",
    tone: "bg-purple-100 text-purple-900",
    position:
      "right-[2%] top-[37%] rotate-[8deg] md:right-[12%] md:top-[68%] md:rotate-[5deg]",
  },
  {
    id: "funnel",
    label: "Funnel",
    tone: "bg-green-100 text-green-900",
    position:
      "bottom-[5%] left-[4%] rotate-[-5deg] md:bottom-auto md:left-[13%] md:top-[67%]",
  },
  {
    id: "distribution",
    label: "Distribution",
    tone: "bg-violet-100 text-violet-900",
    position:
      "bottom-[4%] right-[4%] rotate-[4deg] md:left-1/2 md:right-auto md:bottom-[7%] md:-translate-x-1/2 md:rotate-[-2deg]",
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
