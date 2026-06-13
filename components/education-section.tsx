import ScrollReveal from "./scroll-reveal";

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm">
            Education
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#EBE8F0] tracking-[-0.02em] mb-12">
            Academic Background
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BINUS */}
          <ScrollReveal stagger={0}>
            <div
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1.125rem] p-7
                backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]
                hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)]
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_32px_rgba(0,0,0,0.20)]
                hover:-translate-y-0.5 transition-all duration-400"
            >
              <div className="text-[0.6875rem] text-[#B0AAB8] font-medium tracking-[0.02em] mb-2">
                Sep 2022 – 2026
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#EBE8F0] mb-1">BINUS University</h3>
              <p className="text-[0.875rem] font-medium text-[#E05862] mb-3">
                Bachelor&apos;s in Computer Science ·{" "}
                <span className="font-semibold text-[#E05862] text-[0.8125rem]">
                  GPA: 3.82 / 4.00
                </span>
              </p>
              <p className="text-[0.6875rem] uppercase tracking-[0.08em] text-[#B0AAB8] mb-2">
                Relevant Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "Apache Spark", "PySpark", "HiveQL", "Python", "Transformer Models"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-[0.6875rem] font-medium text-[#C4BFD0] px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm hover:border-[rgba(255,255,255,0.14)] hover:text-[#EBE8F0] hover:-translate-y-px transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Feng Chia */}
          <ScrollReveal stagger={1}>
            <div
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1.125rem] p-7
                backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]
                hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)]
                hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_32px_rgba(0,0,0,0.20)]
                hover:-translate-y-0.5 transition-all duration-400"
            >
              <div className="text-[0.6875rem] text-[#B0AAB8] font-medium tracking-[0.02em] mb-2">
                2026
              </div>
              <h3 className="text-[1.05rem] font-bold text-[#EBE8F0] mb-1">
                Feng Chia University (逢甲大學)
              </h3>
              <p className="text-[0.875rem] font-medium text-[#E05862] mb-4">
                International Mandarin Language Course · 華語中心
              </p>
              <p className="text-[0.8125rem] text-[#C4BFD0] leading-relaxed mb-1">
                I&apos;m learning Chinese in hopes that I can find work that uses Mandarin
                and for daily speaking.
              </p>
              <p className="text-[0.9375rem] text-[#C4BFD0] leading-relaxed mb-4">
                在逢甲大學學中文。我希望可以找用中文的工作，也跟所有人都用中文講話。
              </p>

              <div className="flex items-center gap-3 p-3 rounded-[0.625rem] bg-[rgba(212,168,106,0.08)] border border-[rgba(212,168,106,0.15)] backdrop-blur-sm text-[0.8125rem] text-[#C4BFD0]">
                <strong className="text-[#EBE8F0]">Ongoing:</strong> Mandarin speaking &amp;
                comprehension.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
