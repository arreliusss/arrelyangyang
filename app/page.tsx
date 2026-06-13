import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ResearchSection from "@/components/research-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import SocialsSection from "@/components/socials-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <SocialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
