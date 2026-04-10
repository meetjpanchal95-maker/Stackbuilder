"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroEyeCanvas = dynamic(
  () => import("@/components/sections/hero-eye-canvas").then((module) => module.HeroEyeCanvas),
  { ssr: false },
);

const wordmarkLetters = [
  { character: "S", isBrand: true },
  { character: "T", isBrand: true },
  { character: "A", isBrand: true },
  { character: "C", isBrand: true },
  { character: "K", isBrand: true },
  { character: "B", isBrand: false },
  { character: "U", isBrand: false },
  { character: "I", isBrand: false },
  { character: "L", isBrand: false },
  { character: "D", isBrand: false },
  { character: "E", isBrand: false },
  { character: "R", isBrand: false },
];

const offerings = [
  "UI Design",
  "Product Design",
  "Website",
  "Design Systems",
  "Animation",
  "Illustrations",
  "Web development",
  "Software's",
  "Mobile Apps",
  "Web Apps",
  "Front-End",
  "Back-End",
  "Digital Strategy",
  "Product Management",
  "Business Development",
  "Digital Transformation",
  "Content Strategy",
  "Market Research",
  "Brand Strategy",
  "Rebrand & Expansion",
  "Campaign Direction",
  "Brand Guidelines",
  "Branded Merchandise",
  "Spatial Branding",
];

export function HeroSection() {
  const wordmarkWrapRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const [wordmarkScale, setWordmarkScale] = useState(1);

  useEffect(() => {
    let frameId = 0;

    const updateWordmarkScale = () => {
      const wrapper = wordmarkWrapRef.current;
      const wordmark = wordmarkRef.current;

      if (!wrapper || !wordmark) {
        return;
      }

      wordmark.style.setProperty("--hero-wordmark-fit-scale", "1");

      frameId = window.requestAnimationFrame(() => {
        const availableWidth = wrapper.clientWidth;
        const contentWidth = wordmark.scrollWidth;
        const nextScale = contentWidth > 0 ? Math.min(1, availableWidth / contentWidth) : 1;

        setWordmarkScale(nextScale);
      });
    };

    updateWordmarkScale();

    const resizeObserver = new ResizeObserver(updateWordmarkScale);

    if (wordmarkWrapRef.current) {
      resizeObserver.observe(wordmarkWrapRef.current);
    }

    window.addEventListener("resize", updateWordmarkScale);
    document.fonts?.ready.then(updateWordmarkScale);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWordmarkScale);
    };
  }, []);

  return (
    <section
      data-eye-region
      className="relative min-h-[72vh] overflow-hidden bg-surface py-8 lg:min-h-[74vh] lg:py-10"
    >
      <div className="relative z-10 flex min-h-[72vh] items-center justify-center px-[var(--site-gutter)] lg:min-h-[74vh]">
        <div className="relative mx-auto flex aspect-square w-full max-w-[min(42rem,calc(100vw-3rem))] -translate-y-[8.25rem] items-center justify-center overflow-hidden sm:max-w-[min(44rem,calc(100vw-4rem))] sm:-translate-y-[9.5rem] lg:max-w-[46rem] lg:-translate-y-[10.75rem]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_color-mix(in_srgb,var(--brand-color)_12%,transparent)_0%,transparent_60%)] blur-3xl" />
          <HeroEyeCanvas />
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-[calc(var(--site-gutter)+10.75rem)] left-0 z-0 flex flex-col gap-3 overflow-hidden sm:bottom-[calc(var(--site-gutter)+11.25rem)] lg:bottom-[calc(var(--site-gutter)+11.75rem)]">
        <div ref={wordmarkWrapRef} className="overflow-hidden">
          <h1
            ref={wordmarkRef}
            className="hero-wordmark hero-wordmark-spread"
            aria-label="STACKBUILDER"
            style={{ ["--hero-wordmark-fit-scale" as string]: String(wordmarkScale) }}
          >
            {wordmarkLetters.map((letter, index) => (
              <span
                key={`${letter.character}-${index}`}
                className={letter.isBrand ? "hero-wordmark-stack" : "hero-wordmark-builder"}
              >
                {letter.character}
              </span>
            ))}
          </h1>
        </div>

        <div className="border-t border-border/40 bg-background/30 backdrop-blur-sm">
          <div className="overflow-hidden">
            <div className="offerings-ticker-track py-4">
              {[0, 1].map((copyIndex) => (
                <div key={copyIndex} className="offerings-ticker-group" aria-hidden={copyIndex === 1}>
                  {offerings.map((item) => (
                    <span key={`${copyIndex}-${item}`} className="offerings-ticker-item">
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}