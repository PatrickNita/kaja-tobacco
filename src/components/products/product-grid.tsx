import { ProductCard } from "@/components/products/product-card";
import { productIds } from "@/content/products";
import {
  type DestinationId,
  type DestinationProductCopy,
} from "@/content/translations";

type ProductGridProps = {
  copy: DestinationProductCopy;
  destination: DestinationId;
};

export function ProductGrid({ copy, destination }: ProductGridProps) {
  return (
    <section
      aria-label={`${copy.titlePrefix} 01–30`}
      className={`product-gallery product-gallery-${destination}`}
    >
      <ol className="product-grid">
        {productIds.map((id) => (
          <ProductCard copy={copy} id={id} key={id} />
        ))}
      </ol>
    </section>
  );
}
