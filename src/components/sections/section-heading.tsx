type SectionHeadingProps = {
  index: string;
  title: string;
  className?: string;
};

export function SectionHeading({
  index,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading reveal-up ${className}`} data-reveal>
      <span aria-hidden="true" className="section-index">
        {index}
      </span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
