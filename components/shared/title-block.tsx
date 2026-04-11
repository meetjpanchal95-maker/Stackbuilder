import React from "react";

interface TitleBlockProps {
  text: string;
  className?: string;
}

/**
 * TitleBlock component renders a vertical line and a text block.
 * The text uses the Satoshi font and inherits global CSS colors (text-invert).
 */
export const TitleBlock: React.FC<TitleBlockProps> = ({ text, className = "" }) => {
  return (
    <div className={`title-block flex items-center gap-4 ${className}`}>
      <span className="block h-12 w-[5px] bg-foreground/40" style={{ minWidth: 5 }} />
      <span className="font-satoshi text-5xl font-medium text-invert tracking-tight">{text}</span>
    </div>
  );
};

export default TitleBlock;
