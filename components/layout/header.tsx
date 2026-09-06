"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data/navigation";
import { bookCta } from "@/lib/data/cta";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Scroll-spy for the home sections (Sessions, About us).
  useEffect(() => {
    if (pathname !== "/") return;

    const ids = ["sessions", "about"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  function isActive(href: string): boolean {
    if (!href.startsWith("/#")) return pathname === href;
    return pathname === "/" && activeSection === href.slice(1);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-2 text-sm font-medium text-foreground transition-colors",
                isActive(link.href)
                  ? "border-b-2 border-accent"
                  : "hover:text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={bookCta.href} variant="dark" size="md">
            {bookCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-transform duration-200 hover:bg-surface active:scale-90 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </Container>

      <div
        className={cn(
          "grid overflow-hidden bg-background transition-[grid-template-rows] duration-300 ease-in-out md:hidden",
          open ? "grid-rows-[1fr] border-t border-border" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface",
                  isActive(link.href) && "text-accent",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={bookCta.href}
              variant="dark"
              size="md"
              className="mt-2 w-full"
            >
              {bookCta.label}
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}