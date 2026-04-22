import Image from "next/image";
import { formatXof } from "@/lib/format";
import { type Product } from "@/lib/store";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100,
  );

  return (
    <article
      id={product.id === "nm-001" ? "mais-vendidos" : undefined}
      className="overflow-hidden rounded-xl bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f3f3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
        />
        <div className="absolute left-3 top-3 rounded bg-black px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          -{discount}%
        </div>
      </div>

      <div className="space-y-3 px-3 py-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          <span>{product.category}</span>
          <span>•</span>
          <span>{product.badge}</span>
        </div>

        <h3 className="line-clamp-2 min-h-[44px] text-sm leading-5 text-black">
          {product.name}
        </h3>

        <div className="flex items-end gap-2">
          <p className="text-lg font-bold text-[#d62424]">
            {formatXof(product.price)}
          </p>
          <p className="text-sm text-[#888] line-through">
            {formatXof(product.compareAtPrice)}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <span>
            {product.rating} / 5 ({product.reviews})
          </span>
          <span>{product.soldLabel}</span>
        </div>

        <form action="/api/checkout" method="POST">
          <input type="hidden" name="productId" value={product.id} />
          <button
            type="submit"
            className="w-full rounded-full bg-black px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            Comprar
          </button>
        </form>
      </div>
    </article>
  );
}
