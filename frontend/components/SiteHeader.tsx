import Link from "next/link";
import AuthPanel from "@/components/AuthPanel";
import {
  navigationLinks,
  siteConfig,
  utilityLinks,
} from "@/lib/store";

export default function SiteHeader() {
  const hasGoogleOAuth = Boolean(
    process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET,
  );
  const hasGithubOAuth = Boolean(
    process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET,
  );

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-black px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-white">
        {siteConfig.promoBar}
      </div>

      <div className="border-b border-[var(--line)] bg-[#fafafa]">
        <div className="container-shell flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-[12px] text-[var(--muted)] md:px-6">
          <div className="flex flex-wrap gap-4">
            {utilityLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span>{siteConfig.shippingBadge}</span>
            <span>Moeda: XOF</span>
          </div>
        </div>
      </div>

      <div className="border-b border-[var(--line)]">
        <div className="container-shell flex flex-col gap-4 px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-end gap-3">
            <div>
              <p className="font-display text-4xl leading-none text-black">
                {siteConfig.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          <div className="flex w-full flex-col gap-3 lg:max-w-3xl lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="flex h-12 items-center rounded-full border-2 border-black bg-white pl-5 pr-2">
                <input
                  aria-label="Pesquisar produtos"
                  placeholder={siteConfig.searchPlaceholder}
                  className="h-full w-full bg-transparent text-sm outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  Buscar
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                <span className="rounded-full border border-[var(--line)] px-4 py-2">
                  Favoritos
                </span>
                <span className="rounded-full border border-[var(--line)] px-4 py-2">
                  Carrinho 0
                </span>
              </div>
              <AuthPanel
                hasGoogleOAuth={hasGoogleOAuth}
                hasGithubOAuth={hasGithubOAuth}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[var(--line)] bg-white">
        <div className="container-shell overflow-x-auto px-4 md:px-6">
          <nav className="flex min-w-max gap-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
            {navigationLinks.map((link) => (
              <Link key={link.label} href={link.href} className="whitespace-nowrap hover:text-black">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
