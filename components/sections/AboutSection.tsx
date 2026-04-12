"use client";
import React from "react";

type AboutSlide = {
  title: string;
  description: string;
  image: string;
  year?: string;
  highlight?: string;
};
import TitleBlock from "@/components/shared/title-block";

// First two cards use the same carousel data as before; third card uses four slides from screenshot
const aboutTiles: AboutSlide[][] = [
  [
    {
      title: "Vision",
      description: "We strive to shape a future where design and innovation drive meaningful connections, sustainable growth, and transformative experiences across industries.",
      image: "/About%20Section/vision.svg",
    },
    {
      title: "Values",
      description: "We value adaptability, bold thinking, and lasting partnerships that make our work relevant, purposeful, and human-centered. We stay true to our values for long lasting impact.",
      image: "/About%20Section/values.svg",
    },
    {
      title: "Mission",
      description: "We aim to become the trusted partner for businesses worldwide, offering innovative solutions that combine design, technology, and strategy to achieve ambitious goals together.",
      image: "/About%20Section/mission.svg",
    },
  ],
  [
    {
      title: "Our Beginning",
      description: "Our story began during the global lockdown, when we started through collaborative freelancing and built a foundation of creative partnerships that shaped our early direction.",
      image: "/About%20Section/vision.svg",
      year: "2020",
    },
    {
      title: "Extended Resources remotely",
      description: "We expanded our focus to international markets, opening ourselves to UAE and USA opportunities while strengthening clien reach, project workflows, with dedicated resource for project delivery.",
      image: "/About%20Section/values.svg",
      year: "2021",
    },
    {
      title: "StackBuilder goes hybrid",
      description: "A significant milestone arrived with the establishment of our physical office in Ahmedabad, enabling us to form a committed in-house team and take on larger, more structured projects.",
      image: "/About%20Section/mission.svg",
      year: "2022",
    },
    // 2023
    {
      title: "StackBuilder officially launched",
      description: "The firm was officially registered in India, marking a new phase of stability and growth. Creative and strategy services were added, this is where we joined and accelerated the vision forward.",
      image: "/About%20Section/launch.svg",
      year: "2023",
    },
    // 2024
    {
      title: "Close collaborations with Founders",
      description: "We partnered closely with established businesses, supporting them with product development insights, IT consulting, and scalable solutions across multiple industries.",
      image: "/About%20Section/collaborations.svg",
      year: "2024",
    },
    // 2025
    {
      title: "StackBuilder Global",
      description: "We developed a focused marketing plan and redesigned our website to strengthen global positioning, enhance visibility, and prepare for the next phase of international growth.",
      image: "/About%20Section/global.svg",
      year: "2025",
    },
  ],
  [
    {
      title: "Passionate Expertise",
      description: "Our Global based team consistently operate at the forefront of  strategy, data, digital-led innovation. We embrace the expertise, passion and diversity of our team, partners and clients. We execute with confidence and don’t charge our clients.",
      image: "/About%20Section/a.svg",
    },
    {
      title: "Customer-First",
      description: "At all stages of our client work we are consistently defining, assessing and addressing evolving customer needs. We look beyond building code,  we want to change how your customers engage with your business.",
      image: "/About%20Section/b.svg",
    },
    {
      title: "Strategy to Operations",
      description: "We partner with clients on creating technology driven opportunities,  from strategy, to development, through to operations. We move quickly, challenge assumptions, check-in often and focus on delivering customer value.",
      image: "/About%20Section/c.svg",
    },
    {
      title: "Sustained innovation",
      description: "We create innovative solutions that sustain business impact. We leverage emerging technologies and flexible architectures to create  best-practice solutions, that are resilient to future and help businesses strategically.",
      image: "/About%20Section/d.svg",
    },
  ],
];


import { useState } from "react";

export default function AboutSection() {


  // Each card can have its own active index
  const [activeIndices, setActiveIndices] = useState([0, 0, 0]);
  // Animation state for first and third card
  const [cardAnims, setCardAnims] = useState([
    { direction: '', key: 0 }, // first card
    { direction: '', key: 0 }, // second card (unused)
    { direction: '', key: 0 }, // third card
  ]);

  // Helper to handle prev/next for each card
  const handlePrev = (cardIdx: number) => {
    // Enable animation for all cards (0, 1, 2)
    setCardAnims((prev) => {
      const arr = [...prev];
      arr[cardIdx] = { direction: 'left', key: Date.now() };
      return arr;
    });
    setActiveIndices((prev) => {
      const newArr = [...prev];
      const slides = aboutTiles[cardIdx];
      newArr[cardIdx] = newArr[cardIdx] === 0 ? slides.length - 1 : newArr[cardIdx] - 1;
      return newArr;
    });
  };
  const handleNext = (cardIdx: number) => {
    // Enable animation for all cards (0, 1, 2)
    setCardAnims((prev) => {
      const arr = [...prev];
      arr[cardIdx] = { direction: 'right', key: Date.now() };
      return arr;
    });
    setActiveIndices((prev) => {
      const newArr = [...prev];
      const slides = aboutTiles[cardIdx];
      newArr[cardIdx] = newArr[cardIdx] === slides.length - 1 ? 0 : newArr[cardIdx] + 1;
      return newArr;
    });
  };

  return (
    <section className="w-full py-16">
      <div className="mb-10">
        <TitleBlock text="About" />
      </div>
      <div
        className="about-section-cards-wrapper"
      >
        {[0, 1, 2].map((cardIdx) => {
          // All cards are now carousel cards with animation
          const slides = aboutTiles[cardIdx];
          const tile = slides[activeIndices[cardIdx]];
          // For the second card, keep the custom design/content, but animate like the others
          if (cardIdx === 1) {
            return (
              <div
                key={cardIdx}
                className={`about-card-responsive about-card-pos-${cardIdx}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
                  borderRadius: 0,
                  padding: 0,
                  position: 'relative',
                  minHeight: 416,
                  maxWidth: 420,
                  width: '100%',
                  // Mobile: 20% taller
                  ...(typeof window !== 'undefined' && window.innerWidth <= 600
                    ? { minHeight: 499 } // 416 * 1.2 ≈ 499
                    : {}),
                }}
              >
                {/* Animated content for each slide */}
                {slides.map((slide, idx) => (
                  <div
                    key={slide.title + '-slide'}
                    style={{
                      width: '100%',
                      position: 'absolute',
                      left: 0,
                      opacity: activeIndices[cardIdx] === idx ? 1 : 0,
                      pointerEvents: activeIndices[cardIdx] === idx ? 'auto' : 'none',
                      zIndex: activeIndices[cardIdx] === idx ? 2 : 1,
                      transition: activeIndices[cardIdx] === idx
                        ? 'opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1)'
                        : 'opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1)',
                      transform:
                        activeIndices[cardIdx] === idx
                          ? 'translateX(0)'
                          : cardAnims[cardIdx].direction === 'left'
                          ? 'translateX(-40px)'
                          : cardAnims[cardIdx].direction === 'right'
                          ? 'translateX(40px)'
                          : 'translateX(0)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '64%',
                        margin: '22px auto 0 auto',
                        background: 'color-mix(in srgb, var(--foreground) 12%, transparent)',
                        border: '1px solid var(--border)',
                        borderRadius: 0,
                        padding: '27px 17px',
                        color: 'var(--foreground)',
                        fontSize:
                          typeof window !== 'undefined' && window.innerWidth <= 600 && cardIdx === 1
                            ? '0.92rem'
                            : '1.12rem',
                        fontWeight: 400,
                        textAlign: 'center',
                        lineHeight: 1.3,
                        fontFamily: 'var(--font-family, inherit)',
                        boxSizing: 'border-box',
                        letterSpacing: 0,
                        opacity: 0.5,
                        minHeight: 220,
                        maxHeight: 220,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ opacity: 1, display: 'block', color: 'var(--text-invert)' }}>
                        {slide.description}
                      </span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 0,
                      }}
                    >
                      <div style={{ width: 1, height: 72, background: 'var(--border)', margin: '0 auto', opacity: 0.5, minHeight: 72, maxHeight: 72 }} />
                      <div style={{ color: 'var(--foreground)', fontSize: '1.35rem', marginTop: 24, textAlign: 'center', minHeight: 32, maxHeight: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{slide.title}</div>
                      <div style={{ width: '100%', borderTop: '1px solid var(--border)', marginTop: 24, opacity: 0.5, minHeight: 1, maxHeight: 1 }} />
                      {/* Always show year inside card for mobile, all cards */}
                      {((typeof window !== 'undefined' && window.innerWidth <= 600) || ('year' in slide && slide.year)) && slide.year && (
                        <div style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: typeof window !== 'undefined' && window.innerWidth <= 600 ? '1.5rem' : '2.2rem', marginTop: 12, textAlign: 'center', minHeight: 44, maxHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{slide.year}</div>
                      )}
                    </div>
                  </div>
                ))}
                {/* Carousel Arrows for second card */}
                {slides.length > 1 && (
                  <>
                    <button
                      aria-label="Previous"
                      onClick={() => handlePrev(cardIdx)}
                      style={{
                        position: 'absolute',
                        left: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: '1px solid var(--brand-color)',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-color)',
                        cursor: 'pointer',
                        fontSize: 20,
                        zIndex: 2,
                        transition: 'background 0.2s, color 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--brand-color)';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = 'var(--brand-color)';
                      }}
                    >
                      &#8592;
                    </button>
                    <button
                      aria-label="Next"
                      onClick={() => handleNext(cardIdx)}
                      style={{
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: '1px solid var(--brand-color)',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-color)',
                        cursor: 'pointer',
                        fontSize: 20,
                        zIndex: 2,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--brand-color)';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = 'var(--brand-color)';
                      }}
                    >
                      &#8594;
                    </button>
                  </>
                )}
              </div>
            );
          }
          // Default: carousel card for first and third
          // 'slides' and 'tile' are already declared above, do not redeclare
          return (
            <div
              key={cardIdx}
              className={`about-card-responsive about-card-pos-${cardIdx}`}
            >
              {/* Animated SVGs for all cards */}
              <div style={{ width: '100%', marginTop: '2rem', minHeight: 170, position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 180 }}>
                {slides.map((slide, idx) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      maxHeight: cardIdx === 2 ? 126 : 180, // 70% for third card
                      maxWidth: cardIdx === 2 ? '76%' : '108%',
                      objectFit: 'contain',
                      position: 'absolute',
                      left: '50%',
                      top: cardIdx === 2 ? 30 : 0,
                      transform: `translateX(-50%)${
                        activeIndices[cardIdx] === idx
                          ? ''
                          : (cardIdx === 0 && cardAnims[0].direction === 'left') || (cardIdx === 1 && cardAnims[1].direction === 'left') || (cardIdx === 2 && cardAnims[2].direction === 'left')
                          ? ' translateX(-40px)'
                          : (cardIdx === 0 && cardAnims[0].direction === 'right') || (cardIdx === 1 && cardAnims[1].direction === 'right') || (cardIdx === 2 && cardAnims[2].direction === 'right')
                          ? ' translateX(40px)'
                          : ''
                      }`,
                      width: '100%',
                      height: '100%',
                      opacity: activeIndices[cardIdx] === idx ? 1 : 0,
                      pointerEvents: activeIndices[cardIdx] === idx ? 'auto' : 'none',
                      zIndex: activeIndices[cardIdx] === idx ? 2 : 1,
                      transition: activeIndices[cardIdx] === idx
                        ? 'opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1)'
                        : 'opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1)',
                    }}
                  />
                ))}
              </div>
              {/* Animated text for all cards */}
              <div className="about-card-text" style={{ width: '80%', padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', overflow: 'hidden' }}>
                {slides.map((slide, idx) => (
                  <div
                    key={slide.title + '-text'}
                    style={{
                      width: '100%',
                      position: 'absolute',
                      left: 0,
                      opacity: activeIndices[cardIdx] === idx ? 1 : 0,
                      pointerEvents: activeIndices[cardIdx] === idx ? 'auto' : 'none',
                      zIndex: activeIndices[cardIdx] === idx ? 2 : 1,
                      transition: activeIndices[cardIdx] === idx
                        ? 'opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1)'
                        : 'opacity 0.4s cubic-bezier(.77,0,.18,1), transform 0.4s cubic-bezier(.77,0,.18,1)',
                      transform:
                        activeIndices[cardIdx] === idx
                          ? 'translateX(0)'
                          : (cardIdx === 0 && cardAnims[0].direction === 'left') || (cardIdx === 1 && cardAnims[1].direction === 'left') || (cardIdx === 2 && cardAnims[2].direction === 'left')
                          ? 'translateX(-40px)'
                          : (cardIdx === 0 && cardAnims[0].direction === 'right') || (cardIdx === 1 && cardAnims[1].direction === 'right') || (cardIdx === 2 && cardAnims[2].direction === 'right')
                          ? 'translateX(40px)'
                          : 'translateX(0)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <h3
                      style={{
                        fontSize:
                          typeof window !== 'undefined' && window.innerWidth <= 600 && cardIdx === 2
                            ? '1.1rem'
                            : '1.5rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        marginTop: 32,
                        color: 'var(--brand-color)',
                        fontFamily: 'var(--font-family, inherit)',
                        textAlign: 'center',
                        minHeight: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace:
                          typeof window !== 'undefined' && window.innerWidth <= 600 && cardIdx === 2
                            ? 'nowrap'
                            : undefined,
                        overflow:
                          typeof window !== 'undefined' && window.innerWidth <= 600 && cardIdx === 2
                            ? 'hidden'
                            : undefined,
                        textOverflow:
                          typeof window !== 'undefined' && window.innerWidth <= 600 && cardIdx === 2
                            ? 'ellipsis'
                            : undefined,
                        maxWidth:
                          typeof window !== 'undefined' && window.innerWidth <= 600 && cardIdx === 2
                            ? '95%'
                            : undefined,
                      }}
                    >
                      {slide.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--foreground)',
                      opacity: 0.9,
                      textAlign: 'center',
                      marginBottom: slide.highlight ? '1.5rem' : 0,
                      fontFamily: 'var(--font-family, inherit)',
                      minHeight: 72,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 40,
                    }}>{slide.description}</p>
                    {slide.highlight && (
                      <>
                        <div style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          margin: '1.5rem 0 0.5rem 0',
                        }}>
                          <span style={{ color: 'var(--brand-color)', fontWeight: 500, fontSize: '1rem', marginBottom: 4 }}>{slide.highlight}</span>
                          <span style={{ color: 'var(--brand-color)', fontWeight: 700, fontSize: '1.5rem' }}>{slide.year ?? ''}</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* Carousel Arrows for each card (all cards, including first, keep arrows at old position) */}
              {slides.length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={() => handlePrev(cardIdx)}
                    style={{
                      position: 'absolute',
                      left: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: '1px solid var(--brand-color)',
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-color)',
                      cursor: 'pointer',
                      fontSize: 20,
                      zIndex: 2,
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--brand-color)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.color = 'var(--brand-color)';
                    }}
                  >
                    &#8592;
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => handleNext(cardIdx)}
                    style={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: '1px solid var(--brand-color)',
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-color)',
                      cursor: 'pointer',
                      fontSize: 20,
                      zIndex: 2,
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--brand-color)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.color = 'var(--brand-color)';
                    }}
                  >
                    &#8594;
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
