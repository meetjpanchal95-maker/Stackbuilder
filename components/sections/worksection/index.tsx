import React from "react";
import TitleBlock from "@/components/shared/title-block";
import { WorkCard } from "../WorkCard";

// Import workProjects data for WorkCards
import { workProjects } from "./work-projects-data";

export default function WorkSection() {
  return (
    <section className="work-section w-full py-16">
      <div className="mb-10">
        <TitleBlock text="Work" />
      </div>
      <div
        style={{
          border: 'px solid var(--brand-color)',
          borderRadius: 0,
          boxSizing: 'border-box',
        }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          style={{ width: '100%' }}
        >
          {workProjects.map((item, idx) => (
            <WorkCard
              key={item.project}
              number={item.project}
              title={item.title}
              subtitle={item.subtitle}
              image={`/workthumbs/${idx + 1}.png`}
              videoIndex={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
