import { BrandLogo } from "@/components/brand-logo";
import { SectionHeading } from "@/components/sections/section-heading";

type MerchSectionProps = {
  title: string;
};

export function MerchSection({ title }: MerchSectionProps) {
  return (
    <section className="section-shell merch-section" id="merch">
      <div aria-hidden="true" className="merch-frame reveal-scale" data-reveal>
        <BrandLogo className="merch-mark h-auto" />
      </div>
      <div aria-hidden="true" className="merch-slash" />
      <SectionHeading className="merch-heading" index="05" title={title} />
    </section>
  );
}
