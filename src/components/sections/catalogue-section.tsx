import { SectionHeading } from "@/components/sections/section-heading";
import { SectionCta } from "@/components/sections/section-cta";

type CatalogueSectionProps = {
  href: string;
  label: string;
  title: string;
};

export function CatalogueSection({ href, label, title }: CatalogueSectionProps) {
  return (
    <section className="section-shell catalogue-section" id="catalogue">
      <div className="catalogue-copy">
        <SectionHeading className="catalogue-heading" index="03" title={title} />
        <SectionCta href={href} label={label} />
      </div>
      <div aria-hidden="true" className="catalogue-stack reveal-scale" data-reveal>
        {[0, 1, 2, 3].map((item) => (
          <span className={`catalogue-card catalogue-card-${item + 1}`} key={item} />
        ))}
      </div>
    </section>
  );
}
