type ContactSectionProps = {
  title: string;
};

export function ContactSection({ title }: ContactSectionProps) {
  return (
    <section className="section-shell contact-section" id="contact">
      <div aria-hidden="true" className="contact-lines" data-reveal><span /><span /></div>
      <h2 className="section-title contact-title reveal-up" data-reveal>{title}</h2>
    </section>
  );
}
