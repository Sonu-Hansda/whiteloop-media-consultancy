export type Service = {
  id: string;
  label: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Qualification = {
  phone: string;
  country: string;
  role: string;
  roleOther?: string;
  instagram: string;
  business: string;
  audience: string;
  budget: string;
  challenge: string;
};

export type PackageType = "session" | "product" | "mixed";

export type PackageTimelineItem = {
  time: string;
  title: string;
  description: string;
};

export type PackageFaq = {
  q: string;
  a: string;
};

type PackageBase = {
  slug: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cardDescription?: string;
};

export type SessionPackage = PackageBase & {
  type: "session";
  number: string;
  originalPrice: string;
  duration: string;
  shortDuration: string;
  host: string;
  outcomes: { note: string; items: string[] };
  whoFor: string[];
  timeline: PackageTimelineItem[];
  faqs: PackageFaq[];
  finalCta: { heading: string; sub: string };
};

export type ProductPackage = PackageBase & {
  type: "product";
  number?: string;
  meta?: string;
  whoFor?: string[];
  faqs?: PackageFaq[];
};

export type MixedPackage = PackageBase & {
  type: "mixed";
  number?: string;
  originalPrice?: string;
  duration: string;
  host?: string;
};

export type Package = SessionPackage | ProductPackage | MixedPackage;