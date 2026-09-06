import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/lib/data/navigation";
import { bookCta } from "@/lib/data/cta";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            We build AI content systems that help founders attract, convert, and
            grow.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Explore</span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {/* Straight to the form here — the footer is a nav list, not a pitch. */}
          <Link
            href="/book"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {bookCta.label}
          </Link>
        </nav>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Whiteloop Media Consultancy.</p>
          <p>Create content that sells.</p>
        </Container>
      </div>
    </footer>
  );
}