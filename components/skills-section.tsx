import ScrollReveal from "./scroll-reveal";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: "NLP & Machine Learning",
    skills: ["BERT", "Transformer Models", "Regression Models", "Ensemble Methods", "Sarcasm Detection"],
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
      </svg>
    ),
    title: "Data Engineering & Analysis",
    skills: ["Python", "Apache Spark", "PySpark", "HiveQL", "MySQL", "Matplotlib", "Seaborn"],
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
    title: "Cloud & Tools",
    skills: ["IBM Cloud", "Git", "Jupyter", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[rgba(14,14,20,0.55)] backdrop-blur-[28px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm">
            Skills
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#EBE8F0] tracking-[-0.02em] mb-12">
            Technical Expertise
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={cat.title} stagger={idx}>
              <div
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1.125rem] p-7
                  backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]
                  hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)]
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_32px_rgba(0,0,0,0.20)]
                  hover:-translate-y-0.5 transition-all duration-400"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-11 h-11 rounded-[0.625rem] bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm text-[#E05862] mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-[0.9375rem] font-bold text-[#EBE8F0] mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
