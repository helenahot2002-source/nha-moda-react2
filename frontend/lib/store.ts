// EDITE AQUI:
// - nome da loja
// - textos da home
// - menus
// - categorias
// - produtos e precos em XOF
// - caminhos das imagens

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge: string;
  price: number;
  compareAtPrice: number;
  shortDescription: string;
  image: string;
  sizes: string[];
  rating: number;
  reviews: number;
  soldLabel: string;
};

export type QuickCategory = {
  name: string;
  image: string;
};

export const siteConfig = {
  name: "Nha Moda",
  tagline: "Marketplace de moda feminina",
  promoBar: "ENVIO LOCAL | NOVAS PECAS TODOS OS DIAS | PRECO EM XOF",
  searchPlaceholder: "Pesquisar vestidos, tops, conjuntos, sandalias...",
  shippingBadge: "Entrega em Bissau e retirada",
};

export const utilityLinks = [
  "Informacoes de envio",
  "Devolucao facil",
  "Rastrear pedido",
  "Ajuda",
];

export const navigationLinks = [
  { label: "Novidades", href: "#novidades" },
  { label: "Flash sale", href: "#flash-sale" },
  { label: "Tendencias", href: "#tendencias" },
  { label: "Vestidos", href: "#mais-vendidos" },
  { label: "Tops", href: "#mais-vendidos" },
  { label: "Conjuntos", href: "#mais-vendidos" },
  { label: "Acessorios", href: "#mais-vendidos" },
  { label: "Promocoes", href: "#campanhas" },
];

export const quickCategories: QuickCategory[] = [
  {
    name: "Vestidos",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tops",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Conjuntos",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Praia",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Curvy",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bolsas",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sandalias",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bijuteria",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
  },
];

export const flashDeals = [
  { label: "Tops", price: "desde XOF 6.500" },
  { label: "Vestidos", price: "desde XOF 12.900" },
  { label: "Sandalias", price: "desde XOF 9.900" },
  { label: "Bolsas", price: "desde XOF 8.500" },
];

export const campaignTiles = [
  {
    title: "ATE 70% OFF EM MAIS VENDIDOS",
    subtitle: "Vestidos, tops e conjuntos com alta rotacao",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "NOVIDADES ABAIXO DE XOF 15.000",
    subtitle: "Pecas de entrada com leitura jovem",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "LOOKS PARA FIM DE SEMANA",
    subtitle: "Mini dresses, saias e sandalias",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
];

export const trendTags = [
  "#Vestidos leves",
  "#Minimal chic",
  "#Conjuntos",
  "#Praia",
  "#Curvy",
  "#Bolsa caramelo",
];

export const products: Product[] = [
  {
    id: "nm-001",
    slug: "vestido-ombro-plissado",
    name: "Vestido Ombro Plissado Feminino de Verao com Cintura Marcada",
    category: "Vestidos",
    badge: "Mais vendido",
    price: 14500,
    compareAtPrice: 19500,
    shortDescription: "Vestido feminino de verao com caimento leve e cintura marcada.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L"],
    rating: 4.8,
    reviews: 182,
    soldLabel: "1.2k+ vendidos",
  },
  {
    id: "nm-002",
    slug: "top-canelado-fino",
    name: "Top Canelado de Alca Fina Basico para Uso Diario",
    category: "Tops",
    badge: "Novo",
    price: 9500,
    compareAtPrice: 13000,
    shortDescription: "Top basico de alca fina para looks casuais e combinacoes do dia.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    sizes: ["XS", "S", "M"],
    rating: 4.6,
    reviews: 96,
    soldLabel: "730+ vendidos",
  },
  {
    id: "nm-003",
    slug: "conjunto-areia-soft",
    name: "Conjunto Areia Soft com Camisa Ampla e Calca Reta",
    category: "Conjuntos",
    badge: "Hot",
    price: 22500,
    compareAtPrice: 29900,
    shortDescription: "Camisa ampla e calca reta com visual clean e atual.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    sizes: ["M", "L", "XL"],
    rating: 4.9,
    reviews: 204,
    soldLabel: "1.7k+ vendidos",
  },
  {
    id: "nm-004",
    slug: "mini-dress-noite",
    name: "Mini Dress Noite com Recorte e Silhueta Ajustada",
    category: "Festa",
    badge: "Glow",
    price: 16500,
    compareAtPrice: 23000,
    shortDescription: "Mini vestido para festa com presenca e leitura jovem.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 151,
    soldLabel: "980+ vendidos",
  },
  {
    id: "nm-005",
    slug: "look-curvy-urbano",
    name: "Look Curvy Urbano com Corte Solto e Confortavel",
    category: "Curvy",
    badge: "Curve",
    price: 19800,
    compareAtPrice: 25900,
    shortDescription: "Look versatil com conforto e corte pensado para uso diario.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
    sizes: ["XL", "2XL", "3XL"],
    rating: 4.8,
    reviews: 88,
    soldLabel: "620+ vendidos",
  },
  {
    id: "nm-006",
    slug: "bolsa-soft-caramelo",
    name: "Bolsa Soft Caramelo Feminina para Styling Diario",
    category: "Bolsas",
    badge: "Accessorio",
    price: 12000,
    compareAtPrice: 16900,
    shortDescription: "Bolsa feminina para elevar ticket medio em qualquer look.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    sizes: ["Unico"],
    rating: 4.5,
    reviews: 49,
    soldLabel: "300+ vendidos",
  },
  {
    id: "nm-007",
    slug: "sandalia-minimal",
    name: "Sandalia Minimal de Verao com Tiras Finas",
    category: "Calcados",
    badge: "Trend",
    price: 13500,
    compareAtPrice: 18900,
    shortDescription: "Sandalia clean para compor combos de verao e festa.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    sizes: ["37", "38", "39"],
    rating: 4.4,
    reviews: 57,
    soldLabel: "410+ vendidos",
  },
  {
    id: "nm-008",
    slug: "colar-dourado-camadas",
    name: "Colar Dourado em Camadas para Complementar o Look",
    category: "Bijuteria",
    badge: "Add-on",
    price: 6500,
    compareAtPrice: 9900,
    shortDescription: "Peca de styling para complementar a compra principal.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
    sizes: ["Unico"],
    rating: 4.7,
    reviews: 39,
    soldLabel: "280+ vendidos",
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
