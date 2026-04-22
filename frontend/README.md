# Nha Moda

Loja de moda em `Next.js` com:

- visual editorial inspirado em marketplaces de moda
- preco em `XOF` (franco CFA usado na Guine-Bissau)
- checkout com `Stripe Checkout Sessions`
- autenticacao OAuth com `Auth.js`
- estrutura pronta para deploy na `Netlify`
- pastas separadas para editar logos, icones, headers e imagens

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Onde editar cada coisa

- Textos da marca, menus, categorias e produtos: `lib/store.ts`
- Cores globais e look do tema: `app/globals.css`
- Layout principal e SEO: `app/layout.tsx`
- Bloco hero da home: `components/Hero.tsx`
- Header e menu: `components/SiteHeader.tsx`
- Card de produto e botao do Stripe: `components/ProductCard.tsx`
- Guia visual com instrucoes da home: `components/EditGuide.tsx`
- OAuth: `auth.ts`, `app/api/auth/[...nextauth]/route.ts` e `components/providers/AuthProvider.tsx`
- Checkout Stripe: `app/api/checkout/route.ts`
- Configuracao de imagens remotas: `next.config.ts`
- Deploy Netlify: `../netlify.toml`

## Pastas de assets

- Logos: `public/assets/logos`
- Icones: `public/assets/icons`
- Headers e banners: `public/assets/headers`
- Imagens gerais: `public/assets/images`
- Imagens de produtos: `public/assets/images/products`

Substitua os `.svg` atuais pelos seus ficheiros mantendo o mesmo nome, ou troque os caminhos em `lib/store.ts`.

## Variaveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

- `AUTH_SECRET`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`
- `AUTH_GITHUB_ID`
- `AUTH_GITHUB_SECRET`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## Netlify

O ficheiro `netlify.toml` ja aponta a raiz do deploy para `frontend`.

Fluxo recomendado:

1. Suba o repositorio para GitHub.
2. Importe o projeto na Netlify.
3. Confirme o `base directory` como `frontend`.
4. Adicione as mesmas variaveis de ambiente do `.env.local`.
5. Deploy.

## Notas tecnicas

- O `next/image` e otimizado pela Netlify Image CDN quando o projeto roda la, conforme a documentacao oficial da Netlify.
- O Stripe aceita `XOF` como moeda zero-decimal; por isso os valores no codigo sao enviados sem multiplicar por `100`.
