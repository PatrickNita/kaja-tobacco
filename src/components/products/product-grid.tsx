import { ProductCard } from "@/components/products/product-card";
import { productPanels } from "@/content/products";
import {
  type DestinationId,
  type DestinationProductCopy,
} from "@/content/translations";

const PANEL_SIZE = 8;

type ProductGridProps = {
  copy: DestinationProductCopy;
  destination: DestinationId;
};

export function ProductGrid({ copy, destination }: ProductGridProps) {
  return (
    <div className={`product-gallery product-gallery-${destination}`}>
      {productPanels.map((panel, panelIndex) => {
        const emptyCells = PANEL_SIZE - panel.ids.length;

        return (
          <section
            aria-label={`${copy.titlePrefix} ${panel.range}`}
            className="product-panel"
            key={panelIndex}
          >
            <ol className="product-grid">
              {panel.ids.map((id) => (
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
