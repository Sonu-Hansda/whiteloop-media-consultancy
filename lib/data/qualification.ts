import type { Qualification } from "@/types";

export const roles = [
  "Founder",
  "Coach / Consultant",
  "Doctor / Healthcare",
  "Realtor",
  "Other",
];

export const audiences = ["0–1K", "1K–10K", "10K–50K", "50K+"];

export const budgets = [
  "Under $150",
  "$150–$500",
  "$500–$1,000",
  "$1,000+",
  "Not sure yet",
];

export const emptyQualification: Qualification = {
  phone: "",
  country: "",
  role: "",
  roleOther: "",
  instagram: "",
  business: "",
  audience: "",
  budget: "",
  challenge: "",
};
