import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Qualification } from "@/types";

export type ApplicationInput = {
  name: string;
  email: string;
  sessionInterest: string;
} & Qualification;

export async function saveApplication(input: ApplicationInput) {
  return addDoc(collection(db, "applications"), {
    ...input,
    roleOther: input.roleOther?.trim() || null,
    createdAt: serverTimestamp(),
  });
}

export type ProductLeadInput = {
  name: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  roleOther?: string;
  instagram: string;
  business: string;
  productSlug: string;
  productName: string;
  productPrice: string;
};

export async function saveProductLead(input: ProductLeadInput) {
  return addDoc(collection(db, "leads"), {
    ...input,
    roleOther: input.roleOther?.trim() || null,
    kind: "product",
    createdAt: serverTimestamp(),
  });
}