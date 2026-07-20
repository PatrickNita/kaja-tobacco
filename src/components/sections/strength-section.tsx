type StrengthSectionProps = {
  title: string;
};

export function StrengthSection({ title }: StrengthSectionProps) {
  return (
    <section className="section-shell strength-section" id="strength">
      <div aria-hidden="true" className="strength-field" data-reveal>
        <span /><span /><span /><span />
      </div>
      <div aria-hidden="true" className="strength-ghost">{title}</div>
      <SectionHeading className="strength-heading" index="02" title={title} />
    </section>
  );
}
import { SectionHeading } from "@/components/sections/section-heading";
