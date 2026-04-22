const editItems = [
  {
    title: "Produtos, fotos e precos",
    path: "lib/store.ts",
  },
  {
    title: "Header, busca e menus",
    path: "components/SiteHeader.tsx",
  },
  {
    title: "Banner principal e ofertas",
    path: "components/Hero.tsx",
  },
  {
    title: "Card de produto",
    path: "components/ProductCard.tsx",
  },
  {
    title: "Stripe checkout",
    path: "app/api/checkout/route.ts",
  },
  {
    title: "OAuth",
    path: "auth.ts",
  },
  {
    title: "Logos, icons, headers e imagens",
    path: "public/assets",
  },
];

export default function EditGuide() {
  return (
    <section id="editar" className="rounded-2xl border border-[var(--line)] bg-white p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Edicao rapida
        </p>
        <h2 className="mt-2 text-2xl font-bold text-black md:text-3xl">
          Onde mexer em cada parte
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {editItems.map((item) => (
          <div key={item.path} className="rounded-xl border border-[var(--line)] p-4">
            <p className="text-sm font-semibold text-black">{item.title}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              <code>{item.path}</code>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
