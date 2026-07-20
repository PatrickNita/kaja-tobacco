"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import {
  sectionIds,
  type PageCopy,
  type SectionId,
} from "@/content/translations";

type SiteHeaderProps = {
  copy: PageCopy;
};

export function SiteHeader({ copy }: SiteHeaderProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("kaja");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && sectionIds.includes(visible.target.id as SectionId)) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -50%", threshold: [0, 0.2, 0.5] },
    );

    sectionIds.forEach((id) => observer.observe(document.getElementById(id)!));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a aria-label="KAJA" className="brand-chip" href="#kaja">
        <BrandLogo className="h-auto w-[4.75rem]" priority />
      </a>
      <nav aria-label="Primary" className="nav-rail">
        <ul className="nav-list">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                aria-current={activeSection === id ? "location" : undefined}
                className="nav-link"
                href={`#${id}`}
              >
                {copy.sections[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
