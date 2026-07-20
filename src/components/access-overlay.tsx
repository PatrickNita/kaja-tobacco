"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import {
  content,
  localePath,
  locales,
  type Locale,
  type PageCopy,
} from "@/content/translations";

const PRELOADER_KEY = "kaja-preloader-seen";
const ACCESS_KEY = "kaja-access-confirmed";

type Phase = "checking" | "preloader" | "gate" | "open";

type AccessOverlayProps = {
  copy: PageCopy;
  locale: Locale;
};

export function AccessOverlay({ copy, locale }: AccessOverlayProps) {
  const [phase, setPhase] = useState<Phase>("checking");

  useEffect(() => {
    let removeLoadListener: (() => void) | undefined;
    const frame = window.requestAnimationFrame(() => {
      const accessConfirmed = sessionStorage.getItem(ACCESS_KEY) === "true";
      const preloaderSeen = sessionStorage.getItem(PRELOADER_KEY) === "true";
      const nextPhase = accessConfirmed ? "open" : "gate";

      if (preloaderSeen) {
        setPhase(nextPhase);
        return;
      }

      setPhase("preloader");
      const finishPreloader = () => {
        sessionStorage.setItem(PRELOADER_KEY, "true");
        setPhase(nextPhase);
      };

      if (document.readyState === "complete") {
        window.requestAnimationFrame(finishPreloader);
        return;
      }

      window.addEventListener("load", finishPreloader, { once: true });
      removeLoadListener = () => window.removeEventListener("load", finishPreloader);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      removeLoadListener?.();
    };
  }, []);

  useEffect(() => {
    const isBlocking = phase !== "open";
    document.body.style.overflow = isBlocking ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  function confirmAccess() {
    sessionStorage.setItem(ACCESS_KEY, "true");
    setPhase("open");
  }

  if (phase === "open") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex min-h-[100svh] items-center justify-center bg-black px-6 text-white">
      {phase === "preloader" ? (
        <BrandLogo className="h-auto w-[min(72vw,42rem)]" priority />
      ) : null}
      {phase === "gate" ? (
        <div className="gate-enter flex w-full max-w-3xl flex-col items-center text-center">
          <BrandLogo className="h-auto w-[min(72vw,30rem)]" priority />
          <p className="mt-16 text-2xl font-medium tracking-[-0.04em] sm:text-4xl">
            {copy.gate.label}
          </p>
          <button
            className="mt-8 min-w-44 border border-white px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
            onClick={confirmAccess}
            type="button"
          >
            {copy.gate.confirm}
          </button>
          <nav aria-label={copy.gate.language} className="mt-14">
            <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/45">
              {copy.gate.language}
            </p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
              {locales.map((item) => (
                <li key={item}>
                  <a
                    aria-current={item === locale ? "page" : undefined}
                    className={item === locale ? "border-b border-white" : "text-white/45 hover:text-white"}
                    href={localePath(item)}
                  >
                    {content[item].languageName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
