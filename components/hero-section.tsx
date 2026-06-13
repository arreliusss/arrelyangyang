export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Soft glow behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(200,64,74,0.04)] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div>
            {/* Tagline pill */}
            <span
              className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full
                bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm"
            >
              NLP Researcher · CS Student · BINUS University
            </span>

            {/* Name */}
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.05]">
              Darren Cornelius Citra Wijaya
            </h1>

            <span className="block text-[clamp(1.25rem,2.5vw,1.75rem)] text-[#D4A86A] font-medium tracking-[0.06em] mt-1 mb-7">
              徐洋洋
            </span>

            {/* Subtitle */}
            <p className="text-[#C4BFD0] text-lg leading-relaxed mb-8 max-w-xl">
              Computer Science undergraduate and Junior Researcher specializing in{" "}
              <strong className="text-[#EBE8F0] font-semibold">NLP</strong>,{" "}
              <strong className="text-[#EBE8F0] font-semibold">transformer-based models</strong>, and{" "}
              <strong className="text-[#EBE8F0] font-semibold">ensemble regression</strong>. Published
              two papers in IEEE on story-point estimation and Indonesian sarcasm detection.
            </p>

            {/* CTA */}
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full
                bg-[rgba(200,64,74,0.20)] border border-[rgba(200,64,74,0.30)]
                backdrop-blur-md text-white
                shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_28px_rgba(200,64,74,0.28)]
                hover:bg-[rgba(200,64,74,0.30)] hover:border-[rgba(200,64,74,0.50)]
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_0_40px_rgba(200,64,74,0.45)]
                transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              View Research
            </a>
          </div>

          {/* Right: 3.jpg with liquid glass frame */}
          <div className="relative flex justify-center md:justify-end">
            {/* Outer glass glow ring */}
            <div className="absolute -inset-4 rounded-[1.5rem] bg-[rgba(200,64,74,0.04)] blur-[60px] pointer-events-none" />

            {/* Glass frame wrapper */}
            <div
              className="relative rounded-[1.125rem] p-2
                bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
                backdrop-blur-md
                shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_40px_rgba(200,64,74,0.15),0_8px_32px_rgba(0,0,0,0.25)]"
            >
              <img
                src="/3.jpg"
                alt="Darren Cornelius"
                className="w-full max-w-[380px] h-auto rounded-[0.75rem] block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
