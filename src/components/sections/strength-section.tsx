type StrengthSectionProps = {
  title: string;
};

export function StrengthSection({ title }: StrengthSectionProps) {
  return (
    <section className="section-shell strength-section" id="strength">
      <div aria-hidden="true" className="strength-arches" data-reveal>
        <span /><span /><span />
      </div>
      <h2 className="section-title strength-title reveal-up" data-reveal>{title}</h2>
    </section>
  );
}
