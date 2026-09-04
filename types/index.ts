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