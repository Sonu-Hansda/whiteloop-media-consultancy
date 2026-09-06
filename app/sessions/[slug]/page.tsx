import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SessionView } from "@/components/sessions";
import { getPackage, sessionPackages } from "@/lib/data/packages";

export function generateStaticParams() {
  return sessionPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg || pkg.type !== "session") return {};
  return { title: `${pkg.name} — Whiteloop`, description: pkg.description };
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg || pkg.type !== "session") notFound();
  return <SessionView session={pkg} />;
}
