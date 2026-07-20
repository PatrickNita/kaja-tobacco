import { SectionHeading } from "@/components/sections/section-heading";

type CatalogueSectionProps = {
  title: string;
};

export function CatalogueSection({ title }: CatalogueSectionProps) {
  return (
    <section className="section-shell catalogue-section" id="catalogue">
      <SectionHeading className="catalogue-heading" index="03" title={title} />
      <div aria-hidden="true" className="catalogue-stack reveal-scale" data-reveal>
        {[0, 1, 2, 3].map((item) => (
          <span className={`catalogue-card catalogue-card-${item + 1}`} key={item} />
        ))}
      </div>
      <div aria-hidden="true" className="catalogue-ghost">KAJA</div>
    </section>
  );
}
