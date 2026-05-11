import React from 'react';
import { Separator } from '@/components/ui/separator';
import NavbarSection from '@/components/sections/NavbarSection';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import TechStackSection from '@/components/sections/TechStackSection';
import FooterSection from '@/components/sections/FooterSection';

const HomePage = () => (
  <div className="min-h-screen bg-[#020202] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
    {/* Background grid & neon blobs */}
    <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>
    <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none"></div>

    <NavbarSection />

    <main className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-12 space-y-32">
      <HeroSection />
      <Separator className="bg-cyan-500/20" />
      <AboutSection />
      <Separator className="bg-cyan-500/20" />
      <PortfolioSection />
      <ExperienceSection />
      <EducationSection />
      <TechStackSection />
    </main>

    <FooterSection />
  </div>
);

export default HomePage;
