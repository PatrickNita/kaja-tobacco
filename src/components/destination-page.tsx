import { AccessOverlay } from "@/components/access-overlay";
import { ProductGrid } from "@/components/products/product-grid";
import { SiteFrame } from "@/components/site-frame";
import { SiteHeader } from "@/components/site-header";
import {
  type DestinationId,
  type Locale,
  type PageCopy,
} from "@/content/translations";

type DestinationPageProps = {
  copy: PageCopy;
  destination: DestinationId;
  locale: Locale;
};

export function DestinationPage({
  copy,
  destination,
  locale,
}: DestinationPageProps) {
  return (
    <div className={`site-canvas destination-canvas locale-${locale}`} lang={locale}>
      <AccessOverlay copy={copy} locale={locale} />
      <SiteFrame />
      <SiteHeader copy={copy} destination={destination} locale={locale} />
      <main className="destination-main">
        <h1 className="sr-only">{copy.sections[destination]}</h1>
        <ProductGrid copy={copy.products[destination]} destination={destination} />
      </main>
    </div>
  );
}
