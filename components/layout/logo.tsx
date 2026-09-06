import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-start gap-2"
      aria-label="Whiteloop Media home"
    >
      {/* Lime square */}
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />

      {/* Logo text */}
      <span className="flex flex-col font-display leading-[0.85]">
        <span className="text-[18px] font-bold tracking-[-0.04em] text-foreground">
          Whiteloop
        </span>

        <span className="text-[18px] font-bold tracking-[-0.04em] text-foreground">
          Media
        </span>
      </span>
    </Link>
  );
}