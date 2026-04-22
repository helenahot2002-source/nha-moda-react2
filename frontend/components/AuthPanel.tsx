"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

type AuthPanelProps = {
  hasGoogleOAuth: boolean;
  hasGithubOAuth: boolean;
};

export default function AuthPanel({
  hasGoogleOAuth,
  hasGithubOAuth,
}: AuthPanelProps) {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "Utilizador autenticado"}
            width={38}
            height={38}
            className="rounded-full border border-[var(--line)] object-cover"
          />
        ) : (
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[var(--foreground)] text-xs font-semibold uppercase tracking-[0.2em] text-white">
            NM
          </div>
        )}

        <div className="hidden min-w-0 md:block">
          <p className="truncate text-sm font-semibold text-[var(--foreground)]">
            {session.user.name ?? "Cliente Nha Moda"}
          </p>
          <p className="truncate text-xs text-[var(--muted)]">
            {session.user.email ?? "Sessao ativa"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--accent-strong)]"
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex flex-wrap justify-end gap-2">
        <button
          type="button"
          disabled={!hasGoogleOAuth}
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="rounded-full border border-[var(--line)] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:border-[var(--accent)] enabled:hover:text-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Entrar com Google
        </button>

        <button
          type="button"
          disabled={!hasGithubOAuth}
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="rounded-full border border-[var(--line)] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:border-[var(--accent)] enabled:hover:text-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Entrar com GitHub
        </button>
      </div>

      <p className="max-w-[260px] text-right text-[11px] leading-5 text-[var(--muted)]">
        Configure o OAuth em <code>.env.local</code> para ativar estes botoes.
      </p>
    </div>
  );
}
