import type { SessionPackage } from "@/types";
import { SessionHero } from "./session-hero";
import { SessionOutcomes } from "./session-outcomes";
import { SessionWhoFor } from "./session-who-for";
import { SessionTimeline } from "./session-timeline";
import { SessionFaq } from "./session-faq";
import { SessionFinalCta } from "./session-final-cta";

export function SessionView({ session }: { session: SessionPackage }) {
  return (
    <>
      <SessionHero session={session} />
      <SessionOutcomes session={session} />
      <SessionWhoFor session={session} />
      <SessionTimeline session={session} />
      <SessionFaq session={session} />
      <SessionFinalCta session={session} />
    </>
  );
}
