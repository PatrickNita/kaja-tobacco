import { AccessOverlay } from "@/components/access-overlay";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFrame } from "@/components/site-frame";
import {
  localePath,
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
      <header className="destination-header">
        <a
          aria-label="KAJA"
          className="destination-home"
          href={`${localePath(locale)}#${destination}`}
        >
          <BrandLogo className="h-auto w-[4.75rem]" priority />
        </a>
      </header>
      <main className="destination-main">
        <div aria-hidden="true" className="destination-wordmark">KAJA</div>
        <h1 className="destination-title">{copy.sections[destination]}</h1>
      </main>
    </div>
  );
}
