"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WorkCardProps {
  number: string;
  title: string;
  subtitle: string;
  image?: string;
  videoIndex?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [hovered, setHovered] = React.useState(false);
  const [playingMobile, setPlayingMobile] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Simple mobile detection (touch devices)
  const isMobile = typeof window !== 'undefined' && (
    'ontouchstart' in window || navigator.maxTouchPoints > 0
  );

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Desktop: Play video on hover. Mobile: Play on tap.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isMobile) {
      if (playingMobile) {
        const playVideo = () => { video.play().catch(() => {}); };
        if (video.readyState >= 2) {
          playVideo();
        } else {
          video.addEventListener('canplay', playVideo, { once: true });
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    } else {
      if (hovered) {
        const playVideo = () => { video.play().catch(() => {}); };
        if (video.readyState >= 2) {
          playVideo();
        } else {
          video.addEventListener('canplay', playVideo, { once: true });
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [hovered, playingMobile, isMobile]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      style={{
        background: 'transparent',
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
        minWidth: 0,
        width: 'fit-content',
        height: 'fit-content',
        maxWidth: 'none',
        transform: 'scale(0.8)',
        transformOrigin: 'top left',
      }}
      onMouseEnter={() => { if (!isMobile) setHovered(true); }}
      onMouseLeave={() => { if (!isMobile) setHovered(false); }}
      onClick={() => { if (isMobile) setPlayingMobile((p) => !p); }}
    >
      <div
        className="workcard-image-wrap"
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "var(--secondary-brand)",
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: 'relative',
        }}
      >
        {/* Video absolutely fills the container, always 16:9 */}
        <video
          ref={videoRef}
          src={videoIndex ? `/workthumbs/${videoIndex}video.mp4` : undefined}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isMobile ? (playingMobile ? 1 : 0) : (hovered ? 1 : 0),
            pointerEvents: isMobile ? 'auto' : 'none',
            transition: 'opacity 0.1s',
          }}
          autoPlay={isMobile ? playingMobile : hovered}
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Image is always rendered, but hidden on hover */}
        <img
          src={image}
          alt={title}
          className="workcard-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: hovered ? 0 : 1,
            transition: 'opacity 0.1s',
            position: 'relative',
            zIndex: 1,
          }}
        />
        {/* Fallback text if no image */}
        {!image && !hovered && (
          <span style={{ color: "var(--background-main)", fontSize: "1.2rem", fontFamily: 'Satoshi, var(--font-body)', position: 'relative', zIndex: 2 }}>
            IMAGE
          </span>
        )}
      </div>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: '20px',
      }}>
        <div
          style={{
            fontFamily: 'var(--font-satoshi)',
            fontWeight: 700,
            fontSize: "2.8rem",
            letterSpacing: "-0.06em",
            textTransform: "uppercase",
            color: hovered ? 'var(--brand-color)' : "color-mix(in srgb, var(--brand-color) 70%, var(--foreground) 30%)",
            opacity: hovered ? 1 : 0.22,
            marginBottom: "0.6rem",
            lineHeight: 0.9,
            textAlign: "right",
            width: "100%",
            transition: 'color 0.2s, opacity 0.2s',
          }}
        >
          {number}
        </div>
        <div
          className="workcard-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: "1.5rem",
            letterSpacing: "0.01em",
            lineHeight: 1.1,
            textTransform: "uppercase",
            color: "var(--foreground)",
            marginBottom: "0.6rem",
            textAlign: "right",
            width: "100%",
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s',
            height: '1.7em',
            overflow: 'hidden',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {hovered ? title : ''}
        </div>
        <div
          style={{
            fontFamily: 'Satoshi, var(--font-body)',
            fontWeight: 500,
            fontSize: "1.1rem",
            color: "var(--brand-color)",
            opacity: hovered ? 0.85 : 0,
            marginBottom: "0.6rem",
            marginTop: '-1.25rem', // Bring subtitle up by 20px
            textAlign: "right",
            textTransform: "none",
            width: "100%",
            height: '1.5em',
            overflow: 'hidden',
            transition: 'opacity 0.2s',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {hovered ? subtitle : ''}
        </div>
        {/* Description removed as requested */}
      </div>
    </motion.div>
  );
}
