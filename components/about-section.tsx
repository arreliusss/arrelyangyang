import ScrollReveal from "./scroll-reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[rgba(14,14,20,0.55)] backdrop-blur-[28px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm">
            About
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#EBE8F0] tracking-[-0.02em] mb-12">
            Background &amp; Focus
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[3fr_2fr] gap-10">
          {/* Bio */}
          <ScrollReveal stagger={0}>
            <div className="space-y-4 text-[0.9375rem] leading-relaxed text-[#C4BFD0]">
              <p>
                I&apos;m a Computer Science undergraduate at BINUS University with a deep
                passion for Natural Language Processing and machine learning. My research
                applies transformer-based models to real-world problems from improving
                software project estimation to detecting sarcasm across Indonesian social
                media platforms.
              </p>
              <p>
                As a Junior Researcher at BINUS, I led end-to-end research pipelines that
                produced two IEEE-published papers, employing BERT, ensemble regression,
                and cross-domain adaptation. I thrive at the intersection of rigorous
                academic research and practical, measurable outcomes.
              </p>
              <p>
                I&apos;m fluent in Indonesian and English, and am actively advancing my
                Mandarin Chinese through an intensive program at Feng Chia University
                (逢甲大學) in Taiwan.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Facts */}
          <ScrollReveal stagger={1}>
            <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1.125rem] p-7 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]">
              <h3 className="text-[0.9375rem] font-bold text-[#EBE8F0] mb-5">Quick Facts</h3>
              <dl>
                {[
                  ["GPA", "3.82 / 4.00"],
                  ["Publications", "2 (IEEE)"],
                  ["Languages", "ID, EN, CN"],
                  ["Based in", "Indonesia"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-2.5 border-b border-[rgba(255,255,255,0.08)] last:border-b-0 text-[0.8125rem]"
                  >
                    <dt className="text-[#6B6680]">{label}</dt>
                    <dd className="font-semibold text-[#EBE8F0]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
