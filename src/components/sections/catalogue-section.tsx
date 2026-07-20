import { BrandLogo } from "@/components/brand-logo";

type CatalogueSectionProps = {
  title: string;
};

export function CatalogueSection({ title }: CatalogueSectionProps) {
  return (
    <section className="section-shell catalogue-section" id="catalogue">
      <h2 className="section-title catalogue-title reveal-up" data-reveal>{title}</h2>
      <div aria-hidden="true" className="catalogue-grid reveal-scale" data-reveal>
        {[0, 1, 2, 3].map((item) => (
          <div className="catalogue-cell" key={item}>
            <BrandLogo className="h-auto w-2/3 opacity-35" />
          </div>
        ))}
      </div>
    </section>
  );
}
