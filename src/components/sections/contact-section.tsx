import { SectionHeading } from "@/components/sections/section-heading";

type ContactSectionProps = {
  title: string;
};

export function ContactSection({ title }: ContactSectionProps) {
  return (
    <section className="section-shell contact-section" id="contact">
      <div aria-hidden="true" className="contact-lines" data-reveal>
        <span /><span /><span /><span />
      </div>
      <SectionHeading className="contact-heading" index="06" title={title} />
    </section>
  );
}
