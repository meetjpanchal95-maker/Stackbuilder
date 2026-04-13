import React from "react";

interface InsightCardProps {
  image: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  descriptionClassName?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ image, tag, date, title, description, descriptionClassName }) => (
  <div className="insight-card flex flex-col bg-transparent rounded-2xl p-0 shadow-none w-full h-[750px]">
    <div className="w-full overflow-hidden mb-4" style={{height: '480px'}}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex items-center justify-between mb-2">
      <span className="insight-tag px-3 py-1 rounded-full">{tag}</span>
      <span className="insight-date">{date}</span>
    </div>
    <div className="insight-title mb-2">{title}</div>
    <div className={`insight-desc${descriptionClassName ? ' ' + descriptionClassName : ''}`}>{description}</div>
  </div>
);

export default InsightCard;
