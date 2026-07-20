import { ProductCard } from "@/components/products/product-card";
import { productPanels } from "@/content/products";
import {
  type DestinationId,
  type DestinationProductCopy,
} from "@/content/translations";

const PANEL_SIZE = 16;

type ProductGridProps = {
  copy: DestinationProductCopy;
  destination: DestinationId;
};

export function ProductGrid({ copy, destination }: ProductGridProps) {
  return (
    <div className={`product-gallery product-gallery-${destination}`}>
      {productPanels.map((products, panelIndex) => {
        const emptyCells = PANEL_SIZE - products.length;
        const range = panelIndex === 0 ? "01–16" : "17–30";

        return (
          <section
            aria-label={`${copy.titlePrefix} ${range}`}
            className="product-panel"
            key={panelIndex}
          >
            <ol className="product-grid">
              {products.map((id) => (
                <ProductCard copy={copy} id={id} key={id} />
              ))}
              {Array.from({ length: emptyCells }, (_, index) => (
                <li
                  aria-hidden="true"
                  className="product-card product-card-empty"
                  key={`empty-${index}`}
                />
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
