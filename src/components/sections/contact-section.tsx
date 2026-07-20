type ContactSectionProps = {
  title: string;
};

export function ContactSection({ title }: ContactSectionProps) {
  return (
    <section className="section-shell contact-section" id="contact">
      <div aria-hidden="true" className="contact-lines" data-reveal>
        <span /><span /><span /><span />
      </div>
      <div aria-hidden="true" className="contact-glyph">K</div>
      <SectionHeading className="contact-heading" index="06" title={title} />
    </section>
  );
}
import { SectionHeading } from "@/components/sections/section-heading";
