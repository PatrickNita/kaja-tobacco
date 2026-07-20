type AvailabilitySectionProps = {
  title: string;
};

export function AvailabilitySection({ title }: AvailabilitySectionProps) {
  return (
    <section className="section-shell availability-section" id="availability">
      <div aria-hidden="true" className="availability-seal reveal-scale" data-reveal />
      <h2 className="section-title availability-title reveal-up" data-reveal>{title}</h2>
    </section>
  );
}
