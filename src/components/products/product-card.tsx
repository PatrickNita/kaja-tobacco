import { formatProductId, type ProductId } from "@/content/products";
import { type DestinationProductCopy } from "@/content/translations";

type ProductCardProps = {
  copy: DestinationProductCopy;
  id: ProductId;
};

export function ProductCard({ copy, id }: ProductCardProps) {
  const number = formatProductId(id);

  return (
    <li className="product-card">
      <article className="product-card-content">
        <div
          aria-label={`${copy.imageLabel} ${number}`}
          className="product-placeholder"
          role="img"
        />
        <span className="product-badge">{copy.flavor}</span>
        <h2 className="product-title">{copy.titlePrefix} {number}</h2>
      </article>
    </li>
  );
}
