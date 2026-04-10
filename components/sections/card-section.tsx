"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const cardSectionItems = [
  {
    number: "01",
    title: "Vision & Discovery",
    secondaryTitle: "// Vision & Discovery",
    titleLines: ["Vision", "& Discovery"],
    secondaryTitleLines: ["// Vision", "& Discovery"],
    details: ["Initial audits, user journeys, and positioning alignment."],
  },
  {
    number: "02",
    title: "Brand & Strategy",
    secondaryTitle: "// Brand & Strategy",
    titleLines: ["Brand", "& Strategy"],
    secondaryTitleLines: ["// Brand", "& Strategy"],
    details: ["Narrative systems, messaging direction, and rollout framing."],
  },
  {
    number: "03",
    title: "Experience Design",
    secondaryTitle: "// Experience Design",
    titleLines: ["Experience", "Design"],
    secondaryTitleLines: ["// Experience", "Design"],
    details: [
      "Design engaging, scalable, and user-centric interfaces.",
      "Includes UX research, wireframes, UI design, and design systems.",
    ],
  },
  {
    number: "04",
    title: "Technology Architecture",
    secondaryTitle: "// Technology Architecture",
    details: ["System planning, integration mapping, and scalable delivery structure."],
  },
  {
    number: "05",
    title: "Product Development",
    secondaryTitle: "// Product Development",
    details: ["Web products, apps, and shipping loops from prototype to production."],
  },
  {
    number: "06",
    title: "Launch & Growth",
    secondaryTitle: "// Launch & Growth",
    titleLines: ["Launch", "& Growth"],
    secondaryTitleLines: ["// Launch", "& Growth"],
    details: ["Analytics, optimization, and ongoing performance expansion."],
  },
];

function renderTitleCopy(lines: string[] | undefined, fallback: string) {
  if (!lines?.length) {
    return <span className="card-section-title-copy">{fallback}</span>;
  }

  return (
    <span className="card-section-title-copy">
      {lines.map((line) => (
        <span key={line} className="card-section-title-line">
          {line}
        </span>
      ))}
    </span>
  );
}

export function CardSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const hasActiveCard = activeIndex !== null;

  const clearTimers = () => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleActivate = (index: number, delay = 150) => {
    if (activeIndex === index) {
      return;
    }

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
    }

    hoverTimerRef.current = window.setTimeout(() => {
      setActiveIndex(index);
      hoverTimerRef.current = null;
    }, delay);
  };

  const scheduleClose = (delay = 220) => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setActiveIndex(null);
      closeTimerRef.current = null;
    }, delay);
  };

  useEffect(() => clearTimers, []);

  return (
    <section className="card-section relative -mt-[300px] overflow-hidden py-14 lg:py-20">
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand sm:text-4xl">We offer IT Services</h2>
        <p className="mx-auto mt-4 max-w-4xl text-balance text-sm leading-7 text-foreground/88 sm:text-base">
          We are pioneer in building STACKS and provide end to end IT solutions powered by intelligence,
          technology, and creativity for tomorrow&apos;s leaders.
        </p>
      </div>

      <div
        className="card-section-track relative mt-10 lg:mt-14"
        data-has-active={hasActiveCard}
        onMouseLeave={() => scheduleClose()}
      >
        {cardSectionItems.map((item, index) => (
          <button
            key={item.number}
            type="button"
            className={cn("card-section-panel", activeIndex === index && "is-active")}
            data-active={activeIndex === index}
            onMouseEnter={() => scheduleActivate(index)}
            onFocus={() => {
              clearTimers();
              setActiveIndex(index);
            }}
            onBlur={() => scheduleClose(120)}
            onClick={() => {
              clearTimers();
              setActiveIndex(activeIndex === index ? null : index);
            }}
          >
            <div className="card-section-number">{item.number}</div>
            <div className="card-section-body">
              <div className="card-section-heading">
                <h3 className="card-section-title">
                  {renderTitleCopy(item.titleLines, item.title)}
                </h3>
                <h3 className="card-section-title card-section-title-secondary" aria-hidden="true">
                  {renderTitleCopy(item.secondaryTitleLines, item.secondaryTitle)}
                </h3>
              </div>

              <div className="card-section-reveal">
                <div className="card-section-visual" aria-hidden="true">
                  <div className="card-section-visual-orb" />
                </div>

                <ul className="card-section-details">
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}