import { formatProductId, type ProductId } from "@/content/products";
import { type DestinationProductCopy } from "@/content/translations";

type ProductCardProps = {
  copy: DestinationProductCopy;
  id: ProductId;
};

export function ProductCard({ copy, id }: ProductCardProps) {
  const number = formatProductId(id);
  const variant = ((id - 1) % 4) + 1;

  return (
    <li className="product-card">
      <article className="product-card-content">
        <div
          aria-label={`${copy.imageLabel} ${number}`}
          className="product-placeholder"
          data-variant={variant}
          role="img"
        >
          <span className="product-placeholder-frame" />
          <span className="product-placeholder-rule" />
          <span aria-hidden="true" className="product-placeholder-index">
            {number}
          </span>
        </div>
        <div className="product-card-copy">
          <h2>{copy.titlePrefix} {number}</h2>
          <p>{copy.description}</p>
        </div>
      </article>
    </li>
  );
}
