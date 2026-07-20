type SectionCtaProps = {
  href: string;
  label: string;
  className?: string;
};

export function SectionCta({
  href,
  label,
  className = "",
}: SectionCtaProps) {
  return (
    <a
      className={`section-cta reveal-up ${className}`}
      data-reveal
      href={href}
    >
      <span>{label}</span>
    </a>
  );
}
