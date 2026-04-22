import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="container-shell flex min-h-screen items-center px-4 py-12 md:px-6">
      <div className="mesh-card w-full rounded-[2rem] border border-[var(--line)] p-8 text-center shadow-[0_20px_80px_rgba(32,22,25,0.12)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
          Checkout interrompido
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--foreground)] md:text-5xl">
          A compra nao foi finalizada
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
          Se o Stripe ainda nao estiver configurado, preencha o ficheiro{" "}
          <code>.env.local</code>{" "}
          com as chaves certas e tente novamente.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--accent-strong)]"
        >
          Voltar para a loja
        </Link>
      </div>
    </main>
  );
}
