

export default function LetsCollaborateSection() {
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
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4,
          background: "none",
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'stretch',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100%',
            WebkitMaskImage: "url('/letscollaborate/d.svg')",
            maskImage: "url('/letscollaborate/d.svg')",
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            background: 'var(--brand-color, #1D6FAA)',
          }}
        />
      </div>
      {/* PNG grid background removed; now applied to section */}
      {/* Main content */}
      <div className="relative z-0 flex flex-col items-center w-full max-w-4xl px-4">
        <h2 className="text-5xl font-heading text-center mb-4 mt-2">LET’S COLLABORATE</h2>
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
            <div className="w-32 h-8 bg-slate-300 rounded flex items-center justify-center mt-2">
              <span className="text-xs text-slate-500">[Link Placeholder]</span>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="w-full mt-8">
          <h3 className="text-3xl font-heading mb-4">Testimonials</h3>
          <div className="pl-6 py-4 mb-6">
            <p className="text-base mb-4">
              "Collaborating with StackBuilder has been a truly transformative experience for Aasaan Tech Pvt Ltd. From the outset, their team demonstrated creativity, technical expertise, and a deep understanding of our vision. They not only designed but also developed solutions that perfectly aligned with our goals."
            </p>
            <div className="flex items-center gap-4">
              {/* Placeholder for avatar */}
              <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center">
                <span className="text-sm text-slate-700">[Img]</span>
              </div>
              <div>
                <div className="font-medium">Meet</div>
                <div className="text-xs">CEO, Aasaan Tech Pvt. Ltd.</div>
              </div>
            </div>
          </div>
          {/* Placeholder for navigation and more avatars */}
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
              <button className="w-10 h-10 flex items-center justify-center">
                <span>&larr;</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center">
                <span>&rarr;</span>
              </button>
            </div>
            <button className="px-6 py-2 flex items-center gap-2">
              Click for more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
