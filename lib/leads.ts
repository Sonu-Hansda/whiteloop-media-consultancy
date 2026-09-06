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