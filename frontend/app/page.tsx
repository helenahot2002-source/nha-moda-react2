import Image from "next/image";
import EditGuide from "@/components/EditGuide";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SiteHeader from "@/components/SiteHeader";
import { products, quickCategories } from "@/lib/store";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-14">
      <SiteHeader />

      <main className="container-shell space-y-6 px-4 py-6 md:px-6">
        <Hero />

        <section id="novidades" className="rounded-2xl bg-white p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--muted)]">
                Categorias
              </p>
              <h2 className="mt-2 text-2xl font-bold uppercase text-black md:text-3xl">
                Compre por categoria
              </h2>
            </div>
            <span className="hidden text-sm text-[var(--muted)] md:block">
              Estrutura estilo marketplace
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
            {quickCategories.map((category) => (
              <article key={category.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full bg-[#efefef]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 25vw, 12vw"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-black">{category.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tendencias" className="rounded-2xl bg-white p-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-black px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              Recomendado
            </span>
            <span className="rounded-full border border-[var(--line)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black">
              Mais vendidos
            </span>
            <span className="rounded-full border border-[var(--line)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black">
              Novidades
            </span>
            <span className="rounded-full border border-[var(--line)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black">
              Descontos
            </span>
          </div>

          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--muted)]">
                Tendencias
              </p>
              <h2 className="mt-2 text-2xl font-bold uppercase text-black md:text-3xl">
                Mais vendidos da semana
              </h2>
            </div>
            <span className="rounded-full bg-[#f2f2f2] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
              Atualizado hoje
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="campanhas" className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl bg-black p-6 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
              Loja pronta
            </p>
            <h3 className="mt-3 text-2xl font-bold uppercase leading-snug">
              Stripe + OAuth + Netlify ja ligados na estrutura
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/80">
              A parte visual agora ficou mais proxima de ecommerce de moda.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--muted)]">
              Fotos
            </p>
            <h3 className="mt-3 text-2xl font-bold uppercase leading-snug text-black">
              Cards com imagens reais e placeholders remotos
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Se quiser, trocamos depois por fotos proprias da tua loja.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--muted)]">
              Edicao
            </p>
            <h3 className="mt-3 text-2xl font-bold uppercase leading-snug text-black">
              Produtos e banners centralizados no codigo
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Fica facil trocar imagens, precos e blocos sem refazer a pagina.
            </p>
          </div>
        </section>

        <EditGuide />
      </main>
    </div>
  );
}
