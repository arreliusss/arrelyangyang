import ScrollReveal from "./scroll-reveal";

const SKILLS_USED = [
  "Python", "BERT", "Transformer Models", "Regression Models", "Matplotlib", "Seaborn",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[rgba(14,14,20,0.55)] backdrop-blur-[28px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm">
            Experience
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#EBE8F0] tracking-[-0.02em] mb-12">
            Where I&apos;ve Worked
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1.125rem] p-8 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]">
            {/* Duration badge */}
            <span className="absolute top-7 right-7 text-[0.6875rem] font-medium text-[#6B6680] tracking-[0.02em] px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm">
              Feb 2025 – Jan 2026 · 1 yr
            </span>

            <h3 className="text-xl font-bold text-[#EBE8F0] mb-1">Junior Researcher</h3>
            <p className="text-[0.9375rem] font-medium text-[#E05862] mb-5">
              BINUS University · Indonesia · Hybrid
            </p>

            <ul className="space-y-2">
              {[
                "Led research pipelines end-to-end for two published NLP/ML papers.",
                "Applied state-of-the-art NLP and machine learning techniques in academic research settings.",
                "Utilized Python, BERT, Transformer Models, Regression Models, Matplotlib, and Seaborn in research workflows.",
              ].map((duty) => (
                <li
                  key={duty}
                  className="flex gap-2 text-[0.8125rem] text-[#C4BFD0] leading-relaxed before:content-['▹'] before:text-[#E05862] before:flex-shrink-0"
                >
                  {duty}
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {SKILLS_USED.map((skill) => (
                <span
                  key={skill}
                  className="text-[0.6875rem] font-medium text-[#C4BFD0] px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm hover:border-[rgba(255,255,255,0.14)] hover:text-[#EBE8F0] hover:-translate-y-px transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
