import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="container-shell flex min-h-screen items-center px-4 py-12 md:px-6">
      <div className="mesh-card w-full rounded-[2rem] border border-[var(--line)] p-8 text-center shadow-[0_20px_80px_rgba(32,22,25,0.12)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
          Pedido confirmado
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--foreground)] md:text-5xl">
          Obrigada por comprar na Nha Moda
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
          O checkout Stripe foi concluido com sucesso. Pode personalizar esta
          pagina em <code>app/checkout/success/page.tsx</code> para mostrar
          resumo do pedido, WhatsApp ou proximos passos.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--accent-strong)]"
        >
          Continuar a comprar
        </Link>
      </div>
    </main>
  );
}
