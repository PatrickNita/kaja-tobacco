import { BrandLogo } from "@/components/brand-logo";

export function KajaSection() {
  return (
    <section className="section-shell kaja-section" id="kaja">
      <div aria-hidden="true" className="hero-type hero-type-top">KAJA</div>
      <div className="kaja-mark reveal-scale" data-reveal>
        <BrandLogo className="h-auto w-full" priority />
      </div>
      <div aria-hidden="true" className="hero-type hero-type-bottom">KAJA</div>
      <div aria-hidden="true" className="hero-cut hero-cut-left" />
      <div aria-hidden="true" className="hero-cut hero-cut-right" />
    </section>
  );
}
