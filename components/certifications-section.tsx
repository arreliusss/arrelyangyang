import ScrollReveal from "./scroll-reveal";

interface Cert {
  date: string;
  name: string;
  issuer: string;
  id: string;
  verifyUrl: string;
}

const CERTS: Cert[] = [
  {
    date: "Sep 2024",
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    id: "ID: a33dfde3281a",
    verifyUrl: "https://www.hackerrank.com/certificates/a33dfde3281a",
  },
  {
    date: "Sep 2024",
    name: "SQL (Basic)",
    issuer: "HackerRank",
    id: "ID: 86260ba89f9c",
    verifyUrl: "https://www.hackerrank.com/certificates/86260ba89f9c",
  },
  {
    date: "May 2024",
    name: "Introduction to Cloud",
    issuer: "Cognitive Class / IBM",
    id: "CC0101EN v1",
    verifyUrl:
      "https://courses.cognitiveclass.ai/certificates/ccfcd68863824937aa1295ef240ac4c6",
  },
  {
    date: "May 2024",
    name: "Data Analysis with Python",
    issuer: "Cognitive Class",
    id: "DA0101EN v2",
    verifyUrl:
      "https://courses.cognitiveclass.ai/certificates/78db9ef33a8746548031ec08facebbf2",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm">
            Certifications
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#EBE8F0] tracking-[-0.02em] mb-12">
            Credentials
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, idx) => (
            <ScrollReveal key={cert.id} stagger={idx}>
              <div
                className="flex flex-col h-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.10)] rounded-[1.125rem] p-6
                  backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]
                  hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(255,255,255,0.18)]
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_32px_rgba(0,0,0,0.25)]
                  hover:-translate-y-0.5 transition-all duration-400"
              >
                <div className="text-[0.6875rem] text-[#B0AAB8] font-medium tracking-[0.02em] mb-1.5">
                  {cert.date}
                </div>
                <h4 className="text-[0.875rem] font-bold text-white mb-0.5">{cert.name}</h4>
                <p className="text-[0.75rem] text-[#B0AAB8] mb-2">{cert.issuer}</p>
                <p className="text-[0.6875rem] font-mono text-[#9B96A8] break-all mb-4 opacity-80">
                  {cert.id}
                </p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-[0.75rem] font-semibold px-3.5 py-1.5 rounded-full
                    bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
                    backdrop-blur-sm text-[#EBE8F0]
                    hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.16)]
                    hover:text-white transition-all duration-200"
                >
                  View
                  <svg width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
