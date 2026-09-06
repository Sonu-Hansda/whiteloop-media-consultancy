import type { NavLink } from "@/types";

/**
 * Every call-to-action on the site resolves to one of these two paths.
 * Keep the wording here so the label can never drift between the header,
 * the hero and the closing section.
 */

/** Paid path — sends people to the sessions line-up. */
export const bookCta: NavLink = {
  label: "Book a call",
  href: "/#sessions",
};

/** Free path — an application, not a booking. Worded to stay distinct. */
export const freeSessionCta: NavLink = {
  label: "Apply for a free session",
  href: "/free-session",
};
