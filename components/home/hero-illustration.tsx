export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      {/* main panel */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="relative">
          {/* window header */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-3 w-24 rounded-full bg-foreground/10" />
            </div>
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
              Content engine
            </span>
          </div>

          {/* body */}
          <div className="relative space-y-4 p-5">
            <div className="h-4 w-3/4 rounded-full bg-foreground/15" />
            <div className="h-4 w-1/2 rounded-full bg-foreground/10" />

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs text-muted-foreground">Reach</p>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  +182%
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-foreground/10">
                  <div className="h-1.5 w-3/4 rounded-full bg-accent" />
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs text-muted-foreground">Leads</p>
                <p className="mt-1 text-2xl font-semibold text-foreground">
                  3.4x
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-foreground/10">
                  <div className="h-1.5 w-1/2 rounded-full bg-accent" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  System live
                </p>
                <p className="text-xs text-muted-foreground">
                  Attracting your ideal clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -left-8 top-10 rounded-2xl border border-border bg-background px-3 py-2 text-sm font-medium shadow-lg">
        <span className="text-muted-foreground">Funnel</span> ↗
      </div>
      <div className="absolute -right-6 bottom-12 rounded-2xl border border-border bg-background px-3 py-2 text-sm font-medium shadow-lg">
        <span className="text-muted-foreground">Traffic</span> ↗
      </div>
    </div>
  );
}