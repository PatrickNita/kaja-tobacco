import { BrandLogo } from "@/components/brand-logo";

type MerchSectionProps = {
  title: string;
};

export function MerchSection({ title }: MerchSectionProps) {
  return (
    <section className="section-shell merch-section" id="merch">
      <div aria-hidden="true" className="merch-arch reveal-scale" data-reveal>
        <BrandLogo className="h-auto w-[72%]" />
      </div>
      <h2 className="section-title merch-title reveal-up" data-reveal>{title}</h2>
    </section>
  );
}
