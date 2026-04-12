

"use client";
import React, { useState } from "react";

const testimonials = [
  {
    quote: `"Collaborating with StackBuilder has been a truly transformative experience for Aasaan Tech Pvt Ltd. From the outset, their team demonstrated creativity, technical expertise, and a deep understanding of our vision. They not only designed but also developed solutions that perfectly aligned with our goals."`,
    name: "Meet",
    title: "CEO, Aasaan Tech Pvt. Ltd.",
  },
  {
    quote: `"Collaborating with StackBuilder has been a truly transformative experience for Aasaan Tech Pvt Ltd. From the outset, their team demonstrated creativity, technical expertise, and a deep understanding of our vision. They not only designed but also developed solutions that perfectly aligned with our goals."`,
    name: "Alex",
    title: "CTO, Example Corp.",
  },
  {
    quote: `"Collaborating with StackBuilder has been a truly transformative experience for Aasaan Tech Pvt Ltd. From the outset, their team demonstrated creativity, technical expertise, and a deep understanding of our vision. They not only designed but also developed solutions that perfectly aligned with our goals."`,
    name: "Priya",
    title: "Product Manager, InnovateX",
  },
];

export default function LetsCollaborateSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = testimonials[testimonialIndex];
  const handlePrev = () => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const handleNext = () => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  return (
    <section
      className="relative w-screen min-h-[70vh] flex flex-col items-center justify-center py-16 overflow-hidden lets-collab-bg-force !px-0"
      style={{
        backgroundColor: "transparent",
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
      }}
    >
      {/* Background PNG with reduced opacity using a pseudo-element */}
      {/* Show d1.svg in light mode, d.svg in dark mode */}
      <img
        src="/letscollaborate/d1.svg"
        alt="Decorative background light"
        aria-hidden="true"
        className="lets-collab-svg-bg lets-collab-svg-bg-light"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4,
        }}
      />
      <img
        src="/letscollaborate/d.svg"
        alt="Decorative background dark"
        aria-hidden="true"
        className="lets-collab-svg-bg lets-collab-svg-bg-dark"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* PNG grid background removed; now applied to section */}
      {/* Main content */}
      <div className="relative z-0 flex flex-col items-center w-full max-w-4xl px-4">
        <h2 className="text-5xl font-heading text-center mb-4 mt-2" style={{ color: 'var(--brand-color)' }}>LET’S COLLABORATE</h2>
        <p className="text-lg text-center mb-8 max-w-2xl">
          By leveraging integrated stacks, we empower businesses to build scalable, innovative solutions that drive impactful results.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mb-12">
          {/* Placeholder for robot character */}
          <div className="w-40 h-40 bg-slate-200 rounded-full flex items-center justify-center mb-4 md:mb-0">
            <span className="text-xl text-slate-500">[Robot]</span>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="text-base text-center md:text-left mb-2">
              <span className="text-brand font-medium">Hey there, I’m Stax</span>, your creative strategist assistant here at StackBuilder.
            </p>

          </div>
        </div>
        {/* Testimonials */}
        <div className="w-full mt-8">
          <h3 className="text-3xl font-heading mb-4" style={{ color: 'var(--brand-color)' }}>Testimonials</h3>
          <div className="pl-6 py-4 mb-6">
            <p className="text-base mb-4">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              {/* Placeholder for avatar */}
              <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center">
                <span className="text-sm text-slate-700">[Img]</span>
              </div>
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-xs">{testimonial.title}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
                <span className="text-xs text-slate-700">[Img]</span>
              </div>
              <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
                <span className="text-xs text-slate-700">[Img]</span>
              </div>
              <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
                <span className="text-xs text-slate-700">[Img]</span>
              </div>
              <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
                <span className="text-xs text-slate-700">[Img]</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  border: '1px solid var(--brand-color)',
                  borderRadius: '50%',
                  background: 'none',
                  color: 'var(--brand-color)',
                  cursor: 'pointer',
                  fontSize: 20,
                  transition: 'background 0.2s, color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handlePrev}
                aria-label="Previous testimonial"
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
                className="flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  border: '1px solid var(--brand-color)',
                  borderRadius: '50%',
                  background: 'none',
                  color: 'var(--brand-color)',
                  cursor: 'pointer',
                  fontSize: 20,
                  transition: 'background 0.2s, color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={handleNext}
                aria-label="Next testimonial"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
