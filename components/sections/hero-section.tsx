"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

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
  "Software",
  "Mobile App",
  "Web App",
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
    const [showVideo, setShowVideo] = useState(false);
    const [videoMuted, setVideoMuted] = useState(true);

    // Disable background scroll when video modal is open
    useEffect(() => {
      if (showVideo) {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = original; };
      }
    }, [showVideo]);
  // Scroll effect for text fade

  const wordmarkWrapRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const [wordmarkScale, setWordmarkScale] = useState(1);

  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  useEffect(() => {
    let frameId = 0;

    const updateWordmarkScale = () => {
      const wrapper = wordmarkWrapRef.current;
      const wordmark = wordmarkRef.current;
      if (!wrapper || !wordmark) return;
      // ...existing code for scaling (if any)...
    };

    window.addEventListener("resize", updateWordmarkScale);
    document.fonts?.ready.then(updateWordmarkScale);

    if (wordmarkWrapRef.current) {
      resizeObserverRef.current = new ResizeObserver(updateWordmarkScale);
      resizeObserverRef.current.observe(wordmarkWrapRef.current);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      window.removeEventListener("resize", updateWordmarkScale);
    };
  }, []);

  // Animation on in-view
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.4 });

  return (
    <section
      ref={sectionRef}
      data-eye-region
      className={`relative min-h-[72vh] py-8 lg:min-h-[74vh] lg:py-10${showVideo ? '' : ' overflow-hidden'}`}
    >
      {/* Mobile: Top hero text */}
      <div className="block lg:hidden text-center mb-4 px-2">
        <div className="text-2xl font-bold text-brand leading-tight">You Imagine<br />We Create</div>
        <div className="text-base font-medium text-foreground/90 mt-1">We help businesses<br />create digital experiences</div>
      </div>
      {/* SVG background moved to HomePage for global effect */}
      <div className="relative z-10 flex min-h-[72vh] items-center justify-center px-[var(--site-gutter)] lg:min-h-[74vh]">
        {/* Left text (desktop only) */}
        <motion.div
          initial={{
            x: '50vw',
            rotateY: 90,
            opacity: 0,
          }}
          animate={inView
            ? {
                x: 0,
                rotateY: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 60, damping: 14 }
              }
            : {
                x: '50vw',
                rotateY: 90,
                opacity: 0,
                transition: { type: "spring", stiffness: 60, damping: 14 }
              }
          }
          style={{ perspective: 800 }}
          className="absolute left-0 top-[25%] -translate-y-1/2 z-20 max-w-xs text-left text-3xl font-bold text-brand hidden lg:block"
        >
          You Imagine<br />We Create
        </motion.div>
        {/* Eye element */}
        <div className="hero-eye-container relative mx-auto flex aspect-square w-full max-w-[min(42rem,calc(100vw-3rem))] -translate-y-[8.25rem] items-center justify-center overflow-hidden sm:max-w-[min(44rem,calc(100vw-4rem))] sm:-translate-y-[9.5rem] lg:max-w-[46rem] lg:-translate-y-[10.75rem]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_color-mix(in_srgb,var(--brand-color)_12%,transparent)_0%,transparent_60%)] blur-3xl" />
          <button
            type="button"
            aria-label="Play video"
            tabIndex={0}
            className="absolute inset-0 z-20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/80"
            style={{ background: "none", border: 0, padding: 0 }}
            onClick={() => setShowVideo(true)}
          >
            <span className="sr-only">Play video</span>
          </button>
          <HeroEyeCanvas />
        </div>
      {showVideo && (
        <>
          {/* Button row is fixed at top center of viewport for all screen sizes, portaled to body */}
          {typeof window !== "undefined" && createPortal(
            <div className="modal-video-buttons-fixed">
              <button
                onClick={() => setVideoMuted((m) => !m)}
                aria-label={videoMuted ? "Unmute video" : "Mute video"}
                className="bg-white/80 hover:bg-red-100 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow border border-black/10 transition-colors duration-200"
                style={{ border: 'none' }}
              >
                {videoMuted ? (
                  // Muted icon (crossed speaker)
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                ) : (
                  // Unmuted icon (speaker)
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19 12c0-2.21-1.79-4-4-4"/><path d="M15 12c0-1.1-.9-2-2-2"/><path d="M19 12c0 2.21-1.79 4-4 4"/></svg>
                )}
              </button>
              <button
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="bg-white/80 hover:bg-red-100 text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow border border-black/10 transition-colors duration-200"
                style={{ border: 'none' }}
              >
                ×
              </button>
            </div>,
            window.document.body
          )}
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            style={{ animation: 'fadeIn 0.2s', overflow: 'visible' }}
          >
            <div
              className="relative bg-black rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 max-w-full"
              style={{
                width: 'min(96vw, 756px)',
                height: 'min(96vh, 476px)',
                minHeight: '320px',
                overflow: 'visible',
              }}
            >
              <video
                src="/stackvideo.mp4"
                controls
                autoPlay
                loop
                muted={videoMuted}
                style={{ width: '100%', height: '100%', borderRadius: '1rem', background: '#000', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
        </>
      )}
        {/* Right text */}
        <motion.div
          initial={{
            x: '-50vw',
            rotateY: -90,
            opacity: 0,
          }}
          animate={inView
            ? {
                x: 0,
                rotateY: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 60, damping: 14 }
              }
            : {
                x: '-50vw',
                rotateY: -90,
                opacity: 0,
                transition: { type: "spring", stiffness: 60, damping: 14 }
              }
          }
          style={{ perspective: 800 }}
          className="absolute right-0 top-[25%] -translate-y-1/2 z-20 max-w-xs text-right text-lg font-medium text-foreground/90 hidden lg:block"
        >
          We help businesses<br />create digital experiences
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-[calc(var(--site-gutter)+10.75rem)] left-0 z-0 flex flex-col gap-3 overflow-hidden sm:bottom-[calc(var(--site-gutter)+11.25rem)] lg:bottom-[calc(var(--site-gutter)+11.75rem)]">
        <div ref={wordmarkWrapRef} className="overflow-hidden w-full">
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

        <div className="border-t border-border/40 backdrop-blur-sm">
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
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-eye-container {
            max-width: min(65.5rem, calc(100vw - 0.5rem)) !important;
            aspect-ratio: 1 / 1 !important;
            transform: scale(1.2);
          }
          .hero-wordmark {
            font-size: clamp(1.2rem, 10vw, 2.2rem) !important;
            width: 100% !important;
            padding: 0;
            text-align: center;
            justify-content: center;
            align-items: center !important;
            margin: 0 auto !important;
            letter-spacing: 0.04em;
            display: flex !important;
          }
          .hero-wordmark-spread {
            justify-content: center !important;
            align-items: center !important;
            gap: 0.12em;
            width: 100% !important;
            margin: 0 auto !important;
          }
        }
        .hero-wordmark {
          --hero-wordmark-base-size: 9.75rem;
          --hero-wordmark-fit-scale: 1;
          font-family: var(--font-heading);
          font-size: calc(var(--hero-wordmark-base-size) * var(--hero-wordmark-fit-scale));
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .hero-wordmark-spread {
          display: flex;
          width: 100%;
          align-items: flex-end;
          justify-content: space-between;
        }
        .hero-wordmark-stack {
          flex: 0 0 auto;
          color: transparent;
          background-image: linear-gradient(
            180deg,
            color-mix(in srgb, var(--brand-color) 30%, transparent) 0%,
            color-mix(in srgb, var(--background-main) 30%, transparent) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
        }
        .hero-wordmark-builder {
          flex: 0 0 auto;
          color: transparent;
          background-image: linear-gradient(
            180deg,
            color-mix(in srgb, var(--text-invert) 30%, transparent) 0%,
            color-mix(in srgb, var(--background-main) 30%, transparent) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
        }
        .offerings-ticker-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: offerings-marquee 30s linear infinite;
          will-change: transform;
        }
        .offerings-ticker-group {
          display: flex;
          align-items: center;
          gap: 8.25rem;
          padding-right: 8.25rem;
          flex: 0 0 auto;
        }
        .offerings-ticker-item {
          font-family: var(--font-body);
          font-size: 20px;
          font-weight: 400;
          line-height: 1;
          white-space: nowrap;
          color: var(--foreground);
        }
        @keyframes offerings-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}