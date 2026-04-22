import type { Metadata } from "next";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nha Moda | Moda feminina com checkout Stripe",
  description:
    "Loja de moda em Next.js com visual de marketplace, preços em franco CFA da Guiné-Bissau, OAuth com Auth.js e deploy pronto para Netlify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
