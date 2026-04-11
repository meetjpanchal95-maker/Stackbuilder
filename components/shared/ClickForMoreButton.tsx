import React from "react";

export function ClickForMoreButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex items-center justify-center px-5 py-2.5 border-0 bg-transparent transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--brand-color)] focus:ring-offset-2 active:scale-95"
      style={{
        fontSize: 19.6, // 28 * 0.7
        fontWeight: 400,
        letterSpacing: 0,
        minWidth: 224, // 320 * 0.7
        zIndex: 20,
        color: 'var(--foreground)',
        borderRadius: 0,
      }}
    >
      {/* Brackets in normal state, rectangle border on hover */}
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-200"
        aria-hidden="true"
      >
        {/* Brackets visible only when not hovered */}
        <span className="flex w-full h-full items-center justify-between group-hover:hidden">
          <span className="text-[42px] font-mono font-normal mr-1.5" style={{color: 'var(--brand-color)'}}>[</span>
          <span className="text-[42px] font-mono font-normal ml-1.5" style={{color: 'var(--brand-color)'}} >]</span>
        </span>
        {/* Rectangle border visible only on hover */}
        <span className="hidden group-hover:block w-full h-full border-2 border-[var(--brand-color)] rounded-none box-border" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', borderColor: 'var(--brand-color)' }} />
      </span>
      <span
        className="z-10 transition-colors duration-200 group-hover:text-[var(--brand-color)]"
        style={{ letterSpacing: 0, color: 'inherit' }}
      >
        Click for more
      </span>
    </button>
  );
}
