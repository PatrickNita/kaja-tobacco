type AvailabilitySectionProps = {
  title: string;
};

export function AvailabilitySection({ title }: AvailabilitySectionProps) {
  return (
    <section className="section-shell availability-section" id="availability">
      <div aria-hidden="true" className="availability-axis reveal-scale" data-reveal>
        <span /><span /><span />
      </div>
      <SectionHeading className="availability-heading" index="04" title={title} />
    </section>
  );
}
import { SectionHeading } from "@/components/sections/section-heading";
