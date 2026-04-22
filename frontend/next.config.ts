import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // EDITE AQUI se depois quiser usar imagens externas no Netlify Image CDN.
    // Para imagens locais dentro de public/assets, nao precisa mudar nada.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
