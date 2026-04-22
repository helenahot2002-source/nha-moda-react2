import Image from "next/image";
import Link from "next/link";
import { campaignTiles, flashDeals, trendTags } from "@/lib/store";

export default function Hero() {
  const [mainTile, ...smallTiles] = campaignTiles;

  return (
    <section className="space-y-5">
      <section
        id="flash-sale"
        className="rounded-2xl border border-[#ffb6b6] bg-[linear-gradient(90deg,#fff2f2_0%,#fff_50%,#fff2f2_100%)] p-4"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#d62424]">
              Flash sale
            </p>
            <h2 className="mt-1 text-2xl font-bold uppercase text-black md:text-3xl">
              Precos que giram rapido
            </h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {flashDeals.map((deal) => (
              <div
                key={deal.label}
                className="rounded-xl border border-[#ffd4d4] bg-white px-4 py-3"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d62424]">
                  {deal.label}
                </p>
                <p className="mt-1 text-sm font-medium text-black">{deal.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <article className="relative overflow-hidden rounded-2xl bg-black text-white">
          <div className="absolute inset-0">
            <Image
              src={mainTile.image}
              alt={mainTile.title}
              fill
              priority
              className="object-cover opacity-70"
              sizes="(max-width: 1280px) 100vw, 62vw"
            />
          </div>
          <div className="relative flex min-h-[430px] flex-col justify-end bg-gradient-to-r from-black/80 via-black/35 to-black/10 p-8 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/80">
              Nha Moda Trends
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold uppercase leading-tight md:text-6xl">
              {mainTile.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/85 md:text-base">
              {mainTile.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#mais-vendidos"
                className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-black"
              >
                Comprar agora
              </Link>
              <Link
                href="#editar"
                className="rounded-full border border-white px-6 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white"
              >
                Editar loja
              </Link>
            </div>
          </div>
        </article>

        <div className="grid gap-4">
          {smallTiles.map((tile) => (
            <article
              key={tile.title}
              className="relative overflow-hidden rounded-2xl bg-[#111] text-white"
            >
              <div className="absolute inset-0">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover opacity-65"
                  sizes="(max-width: 1280px) 100vw, 30vw"
                />
              </div>
              <div className="relative flex min-h-[206px] flex-col justify-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5">
                <h3 className="max-w-sm text-xl font-bold uppercase leading-snug">
                  {tile.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{tile.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {trendTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
