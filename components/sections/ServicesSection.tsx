

import React from "react";
import TitleBlock from "@/components/shared/title-block";
import "@/app/globals.css";
import "@/app/service-section.css";

interface ServicesSectionProps {
  stackbuilderText?: string;
}

export default function ServicesSection({ stackbuilderText = "BUILD YOUR STACKS WITH US" }: ServicesSectionProps) {
  return (
    <section className="w-full py-16 flex flex-col items-start">
      <div className="mb-10">
        <TitleBlock text="Services" />
      </div>
      {/* First row: big box left, two small right */}
      <div className="w-full flex flex-row items-stretch gap-[clamp(12px,4vw,48px)] mb-8">
        {/* Left-aligned big red box with looping video */}
        <div className="service-video-card">
          <video
            src="/servicesection/a.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="service-video"
          />
        </div>
        {/* Middle card with gradient fill */}
        <div className="service-card group relative overflow-hidden border border-[color:var(--brand-color)]">
          {/* Card hover image */}
          <img src="/servicesection/development.png" alt="Development" className="service-card-hover-img" />
          <div className="service-card-title-container relative z-10">
            {/* Subtitle list, only visible on hover */}
            <ul className="service-card-subtitles">
              <li>Web development</li>
              <li>Software's</li>
              <li>Mobile Apps</li>
              <li>Web Apps</li>
              <li>Front-End</li>
              <li>Back-End</li>
            </ul>
            <span className="service-card-title">Development</span>
          </div>
        </div>
        {/* Right-aligned card with gradient fill */}
        <div className="service-card ml-auto group relative overflow-hidden border border-[color:var(--brand-color)]">
          {/* Card hover image */}
          <img src="/servicesection/branding.png" alt="Branding" className="service-card-hover-img" />
          <div className="service-card-title-container relative z-10">
            {/* Subtitle list, only visible on hover */}
            <ul className="service-card-subtitles">
              <li>Brand Strategy</li>
              <li>Rebrand & Expansion</li>
              <li>Campaign Direction</li>
              <li>Brand Guidelines</li>
              <li>Branded Merchandise</li>
              <li>Spatial Branding</li>
            </ul>
            <span className="service-card-title">Branding</span>
          </div>
        </div>
      </div>
      {/* StackBuilder text row between card rows */}
      <div className="w-full flex justify-center items-center my-6 min-h-[7.5rem]">
        <span
          className="hero-wordmark hero-wordmark-spread"
          style={{
            width: '100%',
            userSelect: 'text',
            display: 'inline-block',
            textAlign: 'center',
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, var(--secondary-brand) 0%, var(--background-main) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            // @ts-ignore: Allow CSS variable
            ['--hero-wordmark-base-size']: '6.825rem',
          } as any}
        >
          BUILD YOUR STACKS WITH US
        </span>
      </div>
      {/* Second row: two small left, big right */}
      <div className="w-full flex flex-row items-stretch gap-[clamp(12px,4vw,48px)]">
        {/* Small left card with gradient fill */}
        <div className="service-card group relative overflow-hidden border border-[color:var(--brand-color)]">
          {/* Card hover image */}
          <img src="/servicesection/design.png" alt="Design" className="service-card-hover-img" />
          <div className="service-card-title-container relative z-10">
            {/* Subtitle list, only visible on hover */}
            <ul className="service-card-subtitles">
              <li>UI Design</li>
              <li>Product Design</li>
              <li>Website</li>
              <li>Design Systems</li>
              <li>Animation</li>
              <li>Illustrations</li>
            </ul>
            <span className="service-card-title">Design</span>
          </div>
        </div>
        {/* Small middle card with gradient fill */}
        <div className="service-card group relative overflow-hidden border border-[color:var(--brand-color)]">
          {/* Card hover image */}
          <img src="/servicesection/strategy.png" alt="Strategy" className="service-card-hover-img" />
          <div className="service-card-title-container relative z-10">
            {/* Subtitle list, only visible on hover */}
            <ul className="service-card-subtitles">
              <li>Digital Strategy</li>
              <li>Product Management</li>
              <li>Business Devlopment</li>
              <li>Digital Transformation</li>
              <li>Content Strategy</li>
              <li>Market Research</li>
            </ul>
            <span className="service-card-title">Strategy</span>
          </div>
        </div>
        {/* Big red box right-aligned with looping video */}
        <div className="service-video-card ml-auto">
          <video
            src="/servicesection/b.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="service-video service-video-invert"
          />
        </div>
      </div>
    </section>
  );
}
