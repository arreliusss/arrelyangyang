# Product Requirements Document
## Personal Portfolio Website
**Owner:** Darren Cornelius Citra Wijaya
**Date:** June 2026 | **Version:** 1.0 | **Status:** Draft

| Field | Details |
|---|---|
| Owner | Darren Cornelius Citra Wijaya |
| Document Date | June 2026 |
| Version | 1.0 |
| Status | Draft |
| Target Audience | Recruiters, Researchers, Collaborators |

---

## 1. Product Overview

This document defines the requirements for building a personal portfolio website for Darren Cornelius Citra Wijaya, a Computer Science undergraduate at BINUS University and Junior Researcher specializing in NLP and machine learning. The site serves as a professional online presence to showcase published research, academic background, technical skills, and credentials to a global audience of recruiters, researchers, and collaborators.

---

## 2. Goals & Objectives

- Establish a professional, credible online identity for Darren as an NLP researcher and CS student.
- Showcase two published research papers with clear summaries accessible to technical and semi-technical audiences.
- Surface key technical skills, certifications, and academic achievements at a glance.
- Provide an easy way for visitors to contact Darren or connect on LinkedIn.
- Be fully mobile-responsive and optimized for fast load times.
- Serve as a living document updated as new projects, papers, or certifications are added.

---

## 3. Target Audience

### 3.1 Primary Users
- **Recruiters & Hiring Managers** — looking for ML/NLP engineers or research interns.
- **Academic Researchers** — potential collaborators in NLP, transformer models, or software engineering.
- **Graduate School Admissions** — reviewing Darren's research track record.

### 3.2 Secondary Users
- **Peers & Classmates** — referencing projects or papers.
- **Industry professionals** exploring Indonesian NLP research.

---

## 4. Content Requirements

### 4.1 Hero / Landing Section
- Full name: Darren Cornelius Citra Wijaya
- Tagline — e.g., "NLP Researcher · CS Student · BINUS University"
- Short bio (2–3 sentences) covering research focus and current role.
- CTA buttons: "View Research", "Download CV", "Contact Me".
- Subtle background (abstract or neutral; no heavy graphics).

### 4.2 About Section
- Expanded personal bio (~100–150 words).
- Current position: Junior Researcher at BINUS University (Feb 2025 – Jan 2026, Hybrid).
- Research interests: NLP, transformer-based models, ensemble regression, cross-domain adaptation.
- Languages spoken / working languages (e.g., Indonesian, English, Mandarin coursework).

### 4.3 Research / Publications Section

> This is the most important content block for Darren's target audience.

#### Publication 1
- **Title:** "Enhancing Story Point Estimation in Software Projects Using Transformer-Based Embeddings and Ensemble Regression Models"
- **Key contributions:**
  - Pipeline combining transformer-based embeddings with ensemble regression models.
  - Demonstrated that contextual embeddings improve story point estimation from user stories.
- **Tags:** Transformer Models · Ensemble Learning · Software Engineering · NLP
- **Paper:** [IEEE Xplore — doi.org/10.1109/11383851](https://ieeexplore.ieee.org/abstract/document/11383851)

#### Publication 2
- **Title:** "From Twitter to Reddit: Cross-Domain Indonesian Sarcasm Detection with Pretrained Transformers"
- **Key contributions:**
  - Indonesian-language NLP for sarcasm detection using pretrained transformers (BERT).
  - Unified pipeline to evaluate model transferability across social media domains.
  - Analysis of performance degradation from domain shift and robustness improvements.
- **Tags:** BERT · Indonesian NLP · Cross-Domain Transfer · Sarcasm Detection
- **Paper:** [IEEE Xplore — doi.org/10.1109/11519738](https://ieeexplore.ieee.org/document/11519738)

### 4.4 Experience Section

#### Junior Researcher — BINUS University
- **Duration:** Feb 2025 – Jan 2026 (1 year) · Indonesia · Hybrid
- Responsibilities: Led research pipelines for two published papers; applied NLP and ML techniques in academic settings.
- **Key skills used:** Python, BERT, Transformer Models, Regression Models, Matplotlib, Seaborn

### 4.5 Education Section

#### BINUS University
- **Degree:** Bachelor's in Computer Science (Sep 2022 – 2026)
- **GPA:** 3.82 / 4.00
- **Relevant skills:** MySQL, Apache Spark, PySpark, HiveQL, Python, Transformer Models

#### Feng Chia University (逢甲大學)
- **Program:** International Mandarin Language Course (Non-Degree), 華語中心
- **Completed:** March 2026

### 4.6 Skills Section

Display skills grouped by category with visual proficiency indicators.

#### NLP & Machine Learning
BERT / Transformer Models · Regression Models · Ensemble Methods · Sarcasm Detection

#### Data Engineering & Analysis
Python · Apache Spark · PySpark · HiveQL · MySQL · Matplotlib · Seaborn

#### Cloud & Tools
Introduction to Cloud (IBM / Cognitive Class)

### 4.7 Certifications Section

| Certification | Issuer | Date | Credential ID | Verify |
|---|---|---|---|---|
| SQL (Intermediate) | HackerRank | Sep 2024 | a33dfde3281a | [View](https://www.hackerrank.com/certificates/a33dfde3281a) |
| SQL (Basic) | HackerRank | Sep 2024 | 86260ba89f9c | [View](https://www.hackerrank.com/certificates/86260ba89f9c) |
| Introduction to Cloud | Cognitive Class / IBM | May 2024 | course-v1:IBMDeveloperSkillsNetwork CC0101EN v1 | [View](https://courses.cognitiveclass.ai/certificates/ccfcd68863824937aa1295ef240ac4c6) |
| Data Analysis with Python | Cognitive Class | May 2024 | course-v1:CognitiveClass DA0101EN v2 | [View](https://courses.cognitiveclass.ai/certificates/78db9ef33a8746548031ec08facebbf2) |

Each cert card should include issuer logo, issue date, credential ID, and a "Verify" link.

### 4.8 Contact / Footer Section
- Contact form (Name, Email, Message) or mailto link.
- LinkedIn profile link: [linkedin.com/in/darren-cornelius-citra-wijaya](https://www.linkedin.com/in/darren-cornelius-citra-wijaya)
- GitHub link (if applicable).
- Email address.
- Copyright line.

---

## 5. Functional Requirements

### 5.1 Navigation
- Sticky top navigation bar with smooth-scroll links: Home, About, Research, Experience, Skills, Certifications, Contact.
- Mobile hamburger menu.
- Active section highlighting as user scrolls.

### 5.2 Research Cards
- Each publication rendered as an expandable card with title, abstract summary, key contributions, and tags.
- External link to full paper (opens in new tab).

### 5.3 Skills Display
- Visual skill tags or bar indicators grouped by category.
- Optionally animated on scroll-in.

### 5.4 Certifications
- Card grid with cert name, issuer, date, and a verify external link.

### 5.5 Dark / Light Mode *(Optional v1.1)*
- Toggle in the navbar for theme switching with persistent preference via localStorage.

### 5.6 Analytics
- Integrate Google Analytics or Plausible for visitor tracking.

---

## 6. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Performance | Lighthouse score ≥ 90 on mobile and desktop. First Contentful Paint < 2s. |
| Accessibility | WCAG 2.1 AA compliant. Semantic HTML, alt text on all images. |
| Responsiveness | Fully responsive: 320px (mobile) to 1440px+ (desktop). |
| SEO | Meta tags, Open Graph, structured data (Person schema), sitemap.xml. |
| Hosting | Static site deployable to Vercel, Netlify, or GitHub Pages. |
| Maintainability | Content editable via markdown or JSON data files without touching HTML. |

---

## 7. Recommended Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (React) or plain HTML/CSS/JS for simplicity |
| Styling | Tailwind CSS |
| Hosting | Vercel (recommended) or GitHub Pages |
| Fonts | Inter or DM Sans (clean, professional) |
| Animations | Framer Motion (subtle) or CSS transitions |
| Contact Form | Formspree or EmailJS (serverless) |

---

## 8. Information Architecture

The portfolio is a single-page application (SPA) with anchor-based navigation:

- `#hero` — Intro, name, tagline, CTA
- `#about` — Bio, current role
- `#research` — Publications (2 cards)
- `#experience` — Junior Researcher role
- `#education` — BINUS + Feng Chia
- `#skills` — Skill categories with tags
- `#certifications` — Four cert cards
- `#contact` — Contact form + social links

---

## 9. Design Guidelines

### 9.1 Visual Identity
- **Primary color:** Deep blue (#1A56DB) — conveys professionalism and research credibility.
- **Neutral backgrounds:** white / light grey (#F8FAFC).
- **Typography:** clean sans-serif (Inter); headings bold, body regular.
- Avoid overly colorful or playful aesthetics; the audience is academic/professional.

### 9.2 Tone & Copywriting
- Professional, precise, and confident.
- Research summaries should be accessible to non-specialists.
- Avoid jargon-heavy hero text; save technical detail for research cards.

---

## 10. Milestones & Timeline

| # | Milestone | Deliverable | Est. Duration |
|---|---|---|---|
| 1 | Content & copy finalized | Text, bio, research summaries ready | 1 week |
| 2 | Design mockup approved | Figma or wireframe approved | 1 week |
| 3 | Development (core sections) | Hero, About, Research, Experience | 2 weeks |
| 4 | Development (remaining) | Skills, Certs, Contact, SEO | 1 week |
| 5 | QA & accessibility audit | Lighthouse ≥ 90, WCAG check | 3 days |
| 6 | Launch | Live URL, domain configured | 1 day |

---

## 11. Success Metrics

- Lighthouse Performance score ≥ 90 on both mobile and desktop.
- At least one recruiter or research collaborator outreach attributed to the portfolio within 3 months of launch.
- Site accessible and renders correctly on Chrome, Firefox, Safari, and Edge.
- All certification verify links are functional and up to date.
- Zero broken links or missing images at launch.

---

## 12. Out of Scope (v1.0)

- Blog or long-form writing section *(defer to v1.1)*.
- Project showcase beyond research papers *(defer to v1.1)*.
- Multi-language toggle (English/Indonesian) *(defer to v1.2)*.
- Dark mode *(optional v1.1)*.
- CMS integration for non-technical content updates *(defer to v2.0)*.

---

*End of Document*
