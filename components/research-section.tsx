"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./scroll-reveal";

interface Paper {
  title: string;
  tags: string[];
  contributions: string[];
  ieeeUrl: string;
}

const PAPERS: Paper[] = [
  {
    title:
      "Enhancing Story Point Estimation in Software Projects Using Transformer-Based Embeddings and Ensemble Regression Models",
    tags: ["Transformer Models", "Ensemble Learning", "Software Engineering", "NLP"],
    contributions: [
      "Designed a pipeline combining transformer-based embeddings with ensemble regression models.",
      "Demonstrated that contextual embeddings significantly improve story point estimation accuracy from user stories.",
      "Evaluated the effectiveness of different transformer embedding approaches combined with regression models to identify optimal configurations for automated story point estimation.",
    ],
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/11383851",
  },
  {
    title:
      "From Twitter to Reddit: Cross-Domain Indonesian Sarcasm Detection with Pretrained Transformers",
    tags: ["BERT", "Indonesian NLP", "Cross-Domain Transfer", "Sarcasm Detection"],
    contributions: [
      "Developed an Indonesian-language NLP pipeline for sarcasm detection using pretrained transformers (BERT).",
      "Built a unified pipeline to evaluate model transferability across Twitter and Reddit domains.",
      "Analyzed performance degradation from domain shift and proposed robustness improvements.",
    ],
    ieeeUrl: "https://ieeexplore.ieee.org/document/11519738",
  },
];

export default function ResearchSection() {
  const [expandedIdxs, setExpandedIdxs] = useState<Set<number>>(new Set());

  const toggleExpanded = (idx: number) => {
    setExpandedIdxs((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section id="research" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-[#E05862] mb-3 px-3 py-1 rounded-full bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)] backdrop-blur-sm">
            Research
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#EBE8F0] tracking-[-0.02em] mb-12">
            Publications
          </h2>
        </ScrollReveal>

        <div
          className={cn(
            "border border-[rgba(255,255,255,0.08)] rounded-[1.125rem] overflow-hidden",
            "backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_4px_24px_rgba(0,0,0,0.15)]",
          )}
        >
          {PAPERS.map((paper, idx) => {
            const isExpanded = expandedIdxs.has(idx);
            return (
              <ScrollReveal key={paper.title} stagger={idx}>
                <article
                  className={cn(
                    "bg-[rgba(255,255,255,0.06)] relative",
                    "transition-colors",
                  )}
                >
                  {/* Separator */}
                  {idx > 0 && (
                    <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent" />
                  )}
                  {/* Header */}
                  <button
                                        onClick={() => toggleExpanded(idx)}
                    className="w-full flex items-start justify-between gap-4 p-6 text-left cursor-pointer hover:bg-[rgba(255,255,255,0.03)] transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div>
                      <h3 className="text-[1.05rem] font-semibold text-[#EBE8F0] leading-[1.45] mb-3">
                        {paper.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.6875rem] font-medium text-[#B0AAB8] px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn(
                        "flex-shrink-0 mt-1.5 text-[#B0AAB8] transition-transform duration-350",
                        isExpanded && "rotate-180 text-[#E05862]",
                      )}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Body */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-400",
                      isExpanded ? "max-h-[40rem]" : "max-h-0",
                    )}
                  >
                    <div className="px-6 pt-5 pb-6 border-t border-[rgba(255,255,255,0.08)]">
                      <p className="font-semibold text-white mb-2 text-sm">Key Contributions:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {paper.contributions.map((c) => (
                          <li key={c} className="text-[0.8125rem] text-[#D8D4E0] leading-relaxed">
                            {c}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={paper.ieeeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-[0.8125rem] font-semibold px-4 py-1.5 rounded-full
                          bg-[rgba(200,64,74,0.10)] border border-[rgba(200,64,74,0.15)]
                          backdrop-blur-sm text-[#EBE8F0]
                          hover:bg-[rgba(200,64,74,0.18)] hover:border-[rgba(200,64,74,0.35)]
                          hover:shadow-[0_0_20px_rgba(200,64,74,0.28)] hover:text-white
                          transition-all duration-200"
                      >
                        View on IEEE Xplore
                        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
