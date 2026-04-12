"use client";

import { useEffect, useRef, useState } from "react";

import { cardSectionItems } from "./card-section-data";

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
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: 'var(--brand-color)' }}>We offer IT Services</h2>
        <p className="mx-auto mt-4 max-w-4xl text-balance text-sm leading-7 text-foreground/88 sm:text-base">
          We are pioneer in building STACKS and provide end to end IT solutions powered by intelligence,
          technology, and creativity for tomorrow&apos;s leaders.
        </p>
      </div>

      <div className="card-section-track relative mt-10 lg:mt-14" style={{ border: 'none' }}>
        {cardSectionItems.map((item, idx) => {
          let panelClass = "card-section-panel smart-animate";
          let style: React.CSSProperties = {};
          const total = cardSectionItems.length;
          // Border fix: match left border for first card, right border only for last card (no bottom border)
          if (idx === 0) {
            style.borderLeft = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
            style.borderRight = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
            // No bottom border
          } else if (idx === total - 1) {
            style.borderRight = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
            // No bottom border
          } else {
            style.borderRight = '2px solid color-mix(in srgb, var(--brand-color) 50%, transparent)';
            // No bottom border
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
              <div className="card-section-body" style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%'}}>
                {/* Show image above text only for hovered card, ensure image is above text using z-index */}
                {/* Desktop: image above text. Mobile: image after all text. */}
                {hoveredIndex === idx && (
                  <>
                    {/* Desktop image (absolute, above text) */}
                    <div
                      className="card-section-image-wrap left-align card-section-image-desktop"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 2,
                        pointerEvents: 'none',
                        background: 'none',
                        justifyContent: 'flex-start',
                        display: 'flex',
                      }}
                    >
                      <img
                        src={`/cardimages/${idx + 1}.png`}
                        alt={`Card visual ${idx + 1}`}
                        className="card-section-image enlarged"
                        style={{ width: 'auto', maxWidth: '108%', height: 'auto', display: 'block', marginLeft: 0, background: 'none' }}
                      />
                    </div>
                    {/* Mobile image (static, after text) */}
                    <div
                      className="card-section-image-wrap left-align card-section-image-mobile"
                      style={{
                        width: '100%',
                        background: 'none',
                        justifyContent: 'flex-start',
                        display: 'none',
                        marginTop: '1.2rem',
                      }}
                    >
                      <img
                        src={`/cardimages/${idx + 1}.png`}
                        alt={`Card visual ${idx + 1}`}
                        className="card-section-image enlarged"
                        style={{ width: 'auto', maxWidth: '108%', height: 'auto', display: 'block', marginLeft: 0, background: 'none' }}
                      />
                    </div>
                  </>
                )}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingBottom: '0.5rem',
                    minHeight: '10.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    zIndex: 1,
                    transform: hoveredIndex === idx ? 'translateY(20px)' : undefined,
                    transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {/* Subtitle: on mobile, show below title; on desktop, show above number */}
                  {hoveredIndex === idx && item.secondaryTitle && (
                    <div className="card-section-subtitle left-align card-section-subtitle-desktop"
                      style={{color: 'var(--brand-color)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5em', opacity: 0.85, textAlign: 'left', textTransform: 'none'}}>
                      {item.secondaryTitle}
                    </div>
                  )}
                  <div
                    className="card-section-number text-[5rem] font-semibold opacity-22 mb-2 text-right"
                    style={{ color: 'var(--brand-color)' }}
                  >
                    {item.number}
                  </div>
                  <div
                    className="card-section-title text-[var(--foreground)] font-heading text-[1.5rem] font-normal tracking-[0.01em] leading-[1.1] uppercase text-right block"
                  >
                    {item.number === '04' ? (
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
                    )}
                    {/* Subtitle below title on mobile, only in hover state */}
                    {hoveredIndex === idx && item.secondaryTitle && (
                      <div className="card-section-subtitle right-align card-section-subtitle-mobile text-[var(--brand-color)] text-[1.1rem] font-medium mb-2 opacity-85 text-right normal-case">
                        {item.secondaryTitle}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        /* Desktop: show image above text, hide on mobile */
        .card-section-image-desktop { display: flex; }
        @media (max-width: 640px) {
          .card-section-image-desktop { display: none !important; }
        }
        /* Mobile: show image after text, hide on desktop */
        .card-section-image-mobile { display: none; }
        @media (max-width: 640px) {
          .card-section-image-mobile { display: flex !important; }
        }
        /* Desktop: show subtitle above number, hide on mobile */
        .card-section-subtitle-desktop { display: block; }
        @media (max-width: 640px) {
          .card-section-subtitle-desktop { display: none !important; }
        }
        /* Mobile: show subtitle below title, hide on desktop */
        .card-section-subtitle-mobile { display: none; }
        @media (max-width: 640px) {
          .card-section-subtitle-mobile { display: block !important; }
        }
        .card-section-image-wrap {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 0.7rem;
          background: none;
        }
        .card-section-image-wrap.left-align {
          justify-content: flex-start;
        }
        .card-section-image {
          max-width: 108%;
          max-height: 192px;
          height: auto;
          width: auto;
          object-fit: contain;
          border-radius: 0;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.07);
          background: none;
          transition: max-width 0.2s, max-height 0.2s, border-radius 0.2s;
        }
        .card-section-image.enlarged {
          max-width: 108%;
          max-height: 192px;
          border-radius: 0;
          background: none;
        }
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
                                  .card-section-subtitle.right-align {
                                    text-align: right !important;
                                  }
                                }
                .card-section-subtitle.left-align {
                  text-align: left !important;
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
                            min-height: 420px !important;
                            height: auto !important;
                            padding: 2rem 1.2rem 1.5rem 1.2rem;
                            border-radius: 0 !important;
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
                            transition: min-height 0.3s;
                          }
                          .card-section-panel.is-hovered {
                            min-height: 520px !important;
                            border-radius: 0 !important;
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
                          .card-section-image-wrap.left-align {
                            justify-content: center !important;
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