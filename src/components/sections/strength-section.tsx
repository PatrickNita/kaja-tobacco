import { SectionHeading } from "@/components/sections/section-heading";

type StrengthSectionProps = {
  title: string;
};

export function StrengthSection({ title }: StrengthSectionProps) {
  return (
    <section className="section-shell strength-section" id="strength">
      <div aria-hidden="true" className="strength-monolith reveal-scale" data-reveal>
        <span className="strength-monolith-inset" />
        <span className="strength-monolith-rule" />
      </div>
      <SectionHeading className="strength-heading" index="02" title={title} />
    </section>
  );
}
