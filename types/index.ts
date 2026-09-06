export type Service = {
  id: string;
  label: string;
};

export type Package = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SessionTimelineItem = {
  time: string;
  title: string;
  description: string;
};

export type SessionFaq = {
  q: string;
  a: string;
};

export type Session = {
  slug: string;
  number: string;
  title: string;
  description: string;
  cardDescription: string;
  price: string;
  originalPrice: string;
  duration: string;
  shortDuration: string;
  host: string;
  features: string[];
  outcomes: {
    note: string;
    items: string[];
  };
  whoFor: string[];
  timeline: SessionTimelineItem[];
  faqs: SessionFaq[];
  finalCta: {
    heading: string;
    sub: string;
  };
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