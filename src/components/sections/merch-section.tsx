import { BrandLogo } from "@/components/brand-logo";
import { SectionHeading } from "@/components/sections/section-heading";
import { SectionCta } from "@/components/sections/section-cta";

type MerchSectionProps = {
  href: string;
  label: string;
  title: string;
};

export function MerchSection({ href, label, title }: MerchSectionProps) {
  return (
    <section className="section-shell merch-section" id="merch">
      <div aria-hidden="true" className="merch-frame reveal-scale" data-reveal>
        <BrandLogo className="merch-mark h-auto" />
      </div>
      <div aria-hidden="true" className="merch-slash" />
      <div className="merch-copy">
        <SectionCta href={href} label={label} />
        <SectionHeading className="merch-heading" index="05" title={title} />
      </div>
    </section>
  );
}
