import { SectionHeading } from "@/components/sections/section-heading";

type AvailabilitySectionProps = {
  title: string;
};

export function AvailabilitySection({ title }: AvailabilitySectionProps) {
  return (
    <section className="section-shell availability-section" id="availability">
      <div aria-hidden="true" className="availability-gate" data-reveal>
        <span className="availability-gate-outer" />
        <span className="availability-gate-inner" />
        <span className="availability-gate-threshold availability-gate-threshold-a" />
        <span className="availability-gate-threshold availability-gate-threshold-b" />
      </div>
      <SectionHeading className="availability-heading" index="04" title={title} />
    </section>
  );
}
