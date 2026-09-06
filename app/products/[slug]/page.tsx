import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/products";
import { getPackage, productPackages } from "@/lib/data/packages";

export function generateStaticParams() {
  return productPackages
    .filter((pkg) => pkg.slug !== "bundle")
    .map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg || pkg.type !== "product" || pkg.slug === "bundle") return {};
  return { title: `${pkg.name} — Whiteloop`, description: pkg.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg || pkg.type !== "product" || pkg.slug === "bundle") notFound();
  return <ProductView product={pkg} />;
}
