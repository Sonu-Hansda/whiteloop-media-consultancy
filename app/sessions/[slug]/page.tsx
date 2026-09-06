import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SessionView } from "@/components/sessions";
import { getSession, sessions } from "@/lib/data/sessions";

export function generateStaticParams() {
  return sessions.map((session) => ({ slug: session.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session) return {};

  return {
    title: `${session.title} — Whiteloop`,
    description: session.description,
  };
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = getSession(slug);
  if (!session) notFound();

  return <SessionView session={session} />;
}
