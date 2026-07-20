import { AccessOverlay } from "@/components/access-overlay";
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
        <div aria-hidden="true" className="destination-wordmark">KAJA</div>
        <h1 className="destination-title">{copy.sections[destination]}</h1>
      </main>
    </div>
  );
}
