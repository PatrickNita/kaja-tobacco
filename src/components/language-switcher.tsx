"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  content,
  localizedRoutePath,
  locales,
  type Locale,
  type LocalizedRoute,
} from "@/content/translations";

type LanguageSwitcherProps = {
  locale: Locale;
  route: LocalizedRoute;
};

export function LanguageSwitcher({ locale, route }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function focusMenuItem(position: "first" | "last") {
    window.requestAnimationFrame(() => {
      const options = Array.from(
        menuRef.current?.querySelectorAll<HTMLAnchorElement>(".language-option") ?? [],
      );
      options[position === "first" ? 0 : options.length - 1]?.focus();
    });
  }

  function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setIsOpen(true);
    focusMenuItem(event.key === "ArrowDown" ? "first" : "last");
  }

  function handleMenuKeyDown(event: ReactKeyboardEvent<HTMLUListElement>) {
    if (event.key === "Tab") {
      setIsOpen(false);
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    const options = Array.from(
      menuRef.current?.querySelectorAll<HTMLAnchorElement>(".language-option") ?? [],
    );
    const currentIndex = options.indexOf(document.activeElement as HTMLAnchorElement);
    if (event.key === "Home") return options[0]?.focus();
    if (event.key === "End") return options[options.length - 1]?.focus();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + direction + options.length) % options.length;
    options[nextIndex]?.focus();
  }

  useEffect(() => {
    if (!isOpen) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        aria-controls="header-language-menu"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={content[locale].gate.language}
        className="language-trigger"
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span>{locale.toUpperCase()}</span>
        <span aria-hidden="true" className="language-caret" />
      </button>
      {isOpen ? (
        <ul
          className="language-menu"
          id="header-language-menu"
          onKeyDown={handleMenuKeyDown}
          ref={menuRef}
          role="menu"
        >
          {locales.map((item) => (
            <li key={item} role="none">
              <a
                aria-current={item === locale ? "page" : undefined}
                className="language-option"
                href={localizedRoutePath(item, route)}
                role="menuitem"
              >
                <span>{item.toUpperCase()}</span>
                <span>{content[item].languageName}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
