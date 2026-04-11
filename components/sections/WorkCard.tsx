"use client";
import React from "react";
import { motion, useAnimation, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

export function WorkCard({ title, subtitle, description, image }: WorkCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      style={{
        background: "rgba(29, 111, 170, 0.07)",
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
        padding: "2.2rem 2.2rem 1.7rem 2.2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1.2rem",
        minWidth: 0,
        width: "100%",
        maxWidth: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16/7",
          background: "var(--secondary-brand)",
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Placeholder image */}
        {image ? (
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span style={{ color: "var(--background-main)", fontSize: "1.2rem", fontFamily: 'Satoshi, var(--font-body)' }}>
            IMAGE
          </span>
        )}
      </div>
      <div>
        <div
          style={{
            fontFamily: 'Satoshi, var(--font-body)',
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "0.04em",
            color: "var(--brand-color)",
            marginBottom: "0.3rem",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Satoshi, var(--font-body)',
            fontWeight: 400,
            fontSize: "1rem",
            color: "var(--subtitles)",
            marginBottom: "0.5rem",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            fontFamily: 'Satoshi, var(--font-body)',
            fontWeight: 400,
            fontSize: "0.98rem",
            color: "var(--text-invert)",
            opacity: 0.88,
          }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
}
