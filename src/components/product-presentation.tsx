import { AccessOverlay } from "@/components/access-overlay";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFrame } from "@/components/site-frame";
import { SiteHeader } from "@/components/site-header";
import { AvailabilitySection } from "@/components/sections/availability-section";
import { CatalogueSection } from "@/components/sections/catalogue-section";
import { ContactSection } from "@/components/sections/contact-section";
import { KajaSection } from "@/components/sections/kaja-section";
import { MerchSection } from "@/components/sections/merch-section";
import { StrengthSection } from "@/components/sections/strength-section";
import type { Locale, PageCopy } from "@/content/translations";

type ProductPresentationProps = {
  copy: PageCopy;
  locale: Locale;
};

export function ProductPresentation({ copy, locale }: ProductPresentationProps) {
  return (
    <div className="site-canvas" lang={locale}>
      <AccessOverlay copy={copy} locale={locale} />
      <RevealObserver />
      <SiteFrame />
      <SiteHeader copy={copy} />
      <main>
        <KajaSection />
        <StrengthSection title={copy.sections.strength} />
        <CatalogueSection title={copy.sections.catalogue} />
        <AvailabilitySection title={copy.sections.availability} />
        <MerchSection title={copy.sections.merch} />
        <ContactSection title={copy.sections.contact} />
      </main>
    </div>
  );
}
