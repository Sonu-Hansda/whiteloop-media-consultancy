import Link from "next/link";
import { SessionCardBody } from "@/components/sessions/session-card-body";
import type { SessionPackage } from "@/types";

/**
 * The whole card is the link — there is only one destination, so the inner
 * call-to-action is plain text rather than a nested anchor.
 */
export function SessionCard({ session }: { session: SessionPackage }) {
  return (
    <Link
      href={`/sessions/${session.slug}`}
      className="group block h-full rounded-2xl transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <SessionCardBody
        session={session}
        footer={
          <span className="mt-2 inline-flex items-center text-xs font-semibold text-accent transition-opacity group-hover:opacity-80">
            Book this session
            <span className="ml-1 text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        }
      />
    </Link>
  );
}
