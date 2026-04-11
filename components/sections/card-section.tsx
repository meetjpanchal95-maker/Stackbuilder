"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const cardSectionItems = [
  {
    number: "01",
    title: "Vision & Discovery",
    secondaryTitle: "We dig into where you are before touching anything. Audits, competitor mapping, user journeys we build the full picture so every decision after this has a reason behind it.",
    titleLines: ["Vision", "& Discovery"],
    secondaryTitleLines: ["// Vision", "& Discovery"],
    details: ["Initial audits, user journeys, and positioning alignment."],
  },
  {
    number: "02",
    title: "Brand & Strategy",
    secondaryTitle: "Your story needs to work before your product does. We shape the narrative, define the messaging system, and frame how you show up so everything downstream feels intentional and consistent.",
    titleLines: ["Brand", "& Strategy"],
    secondaryTitleLines: ["// Brand", "& Strategy"],
    details: ["Narrative systems, messaging direction, and rollout framing."],
  },
  {
    number: "03",
    title: "Experience Design",
    secondaryTitle: "Good design is invisible until it isn't. We research how your users actually think, then build interfaces that feel obvious to them from early wireframes through to a full living design system.",
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
    secondaryTitle: "Before writing a line of code, we map the whole thing. Systems, integrations, data flows we plan the structure so what gets built can actually grow without falling apart six months in.",
    details: ["System planning, integration mapping, and scalable delivery structure."],
  },
  {
    number: "05",
    title: "Product Development",
    secondaryTitle: "We build in loops, not waterfalls. Starting from a working prototype, we move fast toward production shipping real web products and apps that are tested, stable, and ready to be used.",
    details: ["Web products, apps, and shipping loops from prototype to production."],
  },
  {
    number: "06",
    title: "Launch & Growth",
    secondaryTitle: "Shipping is the beginning, not the finish line. We track what matters, cut what doesn't, and keep optimising turning your launch into a compound loop that gets better the longer it runs.",
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="card-section relative -mt-[300px] overflow-hidden py-14 lg:py-20">
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand sm:text-4xl">We offer IT Services</h2>
        <p className="mx-auto mt-4 max-w-4xl text-balance text-sm leading-7 text-foreground/88 sm:text-base">
          We are pioneer in building STACKS and provide end to end IT solutions powered by intelligence,
          technology, and creativity for tomorrow&apos;s leaders.
        </p>
      </div>

      <div className="card-section-track relative mt-10 lg:mt-14">
        {cardSectionItems.map((item, idx) => {
          let panelClass = "card-section-panel smart-animate";
          let style: React.CSSProperties = {};
          const total = cardSectionItems.length;
          // Border fix: match left border for first card, right border only for last card
          if (idx === 0) {
            style.borderLeft = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
            style.borderRight = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
          } else if (idx === total - 1) {
            style.borderRight = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
          } else {
            style.borderRight = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
          }
          if (hoveredIndex !== null) {
            if (hoveredIndex === idx) {
              panelClass += " is-hovered";
              style.width = `calc((100% / ${total}) * 2)`;
              style.flex = `0 0 calc((100% / ${total}) * 2)`;
            } else {
              panelClass += " is-shrunk";
              style.width = `calc((100% - (100% / ${total}) * 2) / ${total - 1})`;
              style.flex = `0 0 calc((100% - (100% / ${total}) * 2) / ${total - 1})`;
            }
          }
          if (hoveredIndex !== idx) {
            // For the last card, extend background to the right edge to avoid empty gap during animation
            if (idx === total - 1) {
              style.background = `linear-gradient(180deg, rgba(var(--secondary-brand-rgb),0.4), rgba(var(--background-main-rgb),0.4)), linear-gradient(to right, transparent 0%, var(--background-main) 98%, var(--background-main) 100%)`;
            } else {
              style.background = `linear-gradient(180deg, rgba(var(--secondary-brand-rgb),0.4), rgba(var(--background-main-rgb),0.4))`;
            }
          }
          return (
            <div
              key={item.number}
              className={panelClass}
              style={style}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative lines for hovered card */}
              {hoveredIndex === idx && (
                <>
                  <span className="card-corner-line left" />
                  <span className="card-corner-line right" />
                </>
              )}
              <div className="card-section-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%'}}>
                <div style={{marginTop: 'auto', paddingBottom: '0.5rem', minHeight: '10.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                  {/* Subtitle above number, only for hovered card */}
                  {hoveredIndex === idx && item.secondaryTitle && (
                    <div className="card-section-subtitle" style={{color: 'var(--brand-color)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5em', opacity: 0.85, textAlign: 'right', textTransform: 'none'}}>
                      {item.secondaryTitle}
                    </div>
                  )}
                  <div className="card-section-number" style={{fontSize: '5rem', fontWeight: 600, opacity: 0.22, marginBottom: '0.5rem', color: 'var(--brand-color)', textAlign: 'right'}}>{item.number}</div>
                  <div style={{color: 'var(--foreground)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.1, textTransform: 'uppercase', textAlign: 'right'}}>
                    {/* Hide titles of non-hovered cards when a card is hovered */}
                    {hoveredIndex !== null && hoveredIndex !== idx ? null : (
                      item.number === '04' ? (
                        [
                          <div key="0">TECHNOLOGY</div>,
                          <div key="1">ARCHITECTURE</div>
                        ]
                      ) : item.number === '05' ? (
                        [
                          <div key="0">PRODUCT</div>,
                          <div key="1">DEVELOPMENT</div>
                        ]
                      ) : (
                        item.titleLines ? item.titleLines.map((line, i) => (
                          <div key={i}>{line.toUpperCase()}</div>
                        )) : item.title.toUpperCase()
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
                                @media (max-width: 640px) {
                                  .card-section-subtitle {
                                    display: -webkit-box;
                                    -webkit-line-clamp: 7;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: normal;
                                    font-size: 1.02rem !important;
                                    text-align: left !important;
                                    margin-bottom: 0.5rem !important;
                                    line-height: 1.25 !important;
                                    max-height: calc(1.25em * 7);
                                    /* Fallback for other browsers */
                                    display: box;
                                    box-orient: vertical;
                                  }
                                }
                        @media (max-width: 640px) {
                          .card-section-track {
                            flex-direction: column;
                            gap: 2rem;
                            align-items: stretch;
                            min-width: 0;
                          }
                          .card-section-panel {
                            width: 100% !important;
                            min-width: 0 !important;
                            min-height: 260px !important;
                            height: auto !important;
                            padding: 2rem 1.2rem 1.5rem 1.2rem;
                            border-radius: 1.2rem;
                            border-left: 2px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
                            border-right: 2px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
                            border-top: 1px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
                            border-bottom: 1px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
                            margin: 0 auto;
                            box-sizing: border-box;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                          }
                          .card-section-panel:last-child {
                            margin-bottom: 0;
                          }
                          .card-section-number {
                            font-size: 2.8rem !important;
                            text-align: left !important;
                            margin-bottom: 0.7rem !important;
                            opacity: 0.22 !important;
                            color: var(--brand-color) !important;
                            font-weight: 600 !important;
                          }
                          .card-section-title-copy, .card-section-title-line {
                            font-size: 1.3rem !important;
                            text-align: left !important;
                            font-weight: 500 !important;
                            color: var(--foreground) !important;
                            margin-bottom: 0.5rem !important;
                          }
                          .card-section-body {
                            padding: 0 !important;
                            min-height: unset !important;
                            gap: 0.7rem !important;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            height: 100%;
                          }
                          .card-corner-line {
                            display: none !important;
                          }
                        }
                .card-corner-line {
                  position: absolute;
                  bottom: 0;
                  width: 38px;
                  height: 3px;
                  background: color-mix(in srgb, var(--brand-color) 50%, transparent);
                  border-radius: 2px;
                  z-index: 2;
                }
                .card-corner-line.left {
                  left: 0;
                  margin-left: -1px;
                }
                .card-corner-line.right {
                  right: 0;
                  margin-right: -1px;
                }
                .card-section-panel {
                  position: relative;
                }
        .card-section-track {
          --card-section-ease: cubic-bezier(0.22, 1, 0.36, 1);
          --card-section-width-duration: 1080ms;
          --card-section-shift-duration: 640ms;
          --card-section-reveal-duration: 840ms;
          position: relative;
          display: flex;
          gap: 0;
          width: 100%;
          align-items: stretch;
          overflow: hidden;
          border-top: 1px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
          /* border-bottom removed to eliminate blue line at bottom */
          background: var(--background-main);
          box-sizing: border-box;
        }
        .card-section-panel {
          display: flex;
          min-width: 0;
          height: 31rem;
          overflow: hidden;
          flex-direction: column;
          justify-content: space-between;
          border-top: 1px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
          border-right: 1px solid color-mix(in srgb, var(--brand-color) 50%, transparent);
          border-left: 1px solid color-mix(in srgb, var(--brand-color) 24%, transparent);
          border-bottom: none !important;
          padding: 1.5rem 1.1rem 1.25rem;
          color: var(--foreground);
          text-align: left;
          appearance: none;
          cursor: pointer;
          box-sizing: border-box;
        }
        .card-section-panel.smart-animate {
          transition:
            width 420ms var(--card-section-ease),
            flex-basis 420ms var(--card-section-ease),
            background-color 680ms var(--card-section-ease),
            border-color 680ms var(--card-section-ease),
            box-shadow 680ms var(--card-section-ease),
            transform 680ms var(--card-section-ease);
        }
        .card-section-panel.is-hovered {
          background: var(--background-main) !important;
        }
        .card-section-panel.is-shrunk {
          /* No hover effect */
        }
        .card-section-panel:last-child {
          border-right: none !important;
        }
        .card-section-track::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          background: color-mix(in srgb, var(--brand-color) 50%, transparent);
          display: block;
          pointer-events: none;
          border-bottom: none !important;
        }
        .card-section-panel.is-hovered:last-child {
          margin-right: 0 !important;
        }
        .card-section-panel.is-hovered:first-child {
          margin-left: 0 !important;
        }
        .card-section-number {
          font-family: var(--font-satoshi);
          font-size: 1rem;
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--brand-color) 70%, var(--foreground) 30%);
          transition: font-size 600ms cubic-bezier(0.11, 0.82, 0.39, 0.92), opacity 300ms ease;
        }
        .card-section-panel[data-active="true"] .card-section-number {
          font-size: 2.9rem;
        }
        .card-section-body {
          display: flex;
          min-height: 100%;
          min-width: 0;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.4rem;
        }
        .card-section-reveal {
          display: grid;
          grid-template-rows: 10.5rem auto;
          min-width: 0;
          gap: 1.1rem;
          opacity: 0.01;
          transform: translateY(1rem);
          transition:
            opacity 280ms ease,
            transform var(--card-section-shift-duration) var(--card-section-ease);
        }
        .card-section-panel[data-active="true"] .card-section-reveal {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 160ms;
        }
        .card-section-visual {
          position: relative;
          overflow: hidden;
          border-radius: 1.2rem;
          border: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
          background:
            radial-gradient(circle at 24% 22%, rgba(255, 255, 255, 0.9) 0, rgba(255, 255, 255, 0.1) 16%, transparent 17%),
            linear-gradient(145deg, rgba(222, 234, 249, 0.95) 0%, rgba(162, 185, 212, 0.82) 42%, rgba(31, 56, 82, 0.95) 100%);
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          transform: scale(1.12);
          opacity: 0.3;
          transition:
            clip-path var(--card-section-reveal-duration) var(--card-section-ease),
            transform var(--card-section-reveal-duration) var(--card-section-ease),
            opacity 420ms ease;
        }
        .card-section-visual-orb {
          position: absolute;
          inset: auto -10% -24% auto;
          width: 8.5rem;
          aspect-ratio: 1;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(90, 138, 180, 0.8) 38%, rgba(16, 42, 66, 0) 72%);
          filter: blur(8px);
          opacity: 0.85;
        }
        .card-section-panel[data-active="true"] .card-section-visual {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          transform: scale(1);
          opacity: 1;
          transition-delay: 230ms;
        }
        .card-section-details {
          margin: 0;
          padding-left: 0;
          list-style: none;
          color: color-mix(in srgb, var(--foreground) 88%, transparent);
          font-size: 0.98rem;
          line-height: 1.35;
        }
        .card-section-details li {
          margin-bottom: 0.55rem;
          overflow: hidden;
        }
        .card-section-details li:last-child {
          margin-bottom: 0;
        }
        .card-section-details li span {
          display: inline-block;
          transform: translateY(-110%);
          max-width: 100%;
          transition:
            transform 0s,
            opacity 0s;
          opacity: 0;
        }
        .card-section-panel[data-active="true"] .card-section-details li span {
          transform: translateY(0);
          opacity: 1;
          transition:
            transform 520ms var(--card-section-ease),
            opacity 360ms ease;
        }
        .card-section-panel[data-active="true"] .card-section-details li:nth-child(1) span {
          transition-delay: 420ms;
        }
        .card-section-panel[data-active="true"] .card-section-details li:nth-child(2) span {
          transition-delay: 480ms;
        }
        .card-section-panel[data-active="true"] .card-section-details li:nth-child(3) span {
          transition-delay: 540ms;
        }
        .card-section-panel[data-active="true"] .card-section-details li:nth-child(4) span {
          transition-delay: 600ms;
        }
        .card-section-panel[data-active="true"] .card-section-details li:nth-child(5) span {
          transition-delay: 660ms;
        }
      `}</style>
    </section>
  );
}