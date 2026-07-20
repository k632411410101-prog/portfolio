'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/lib/store/gameStore';
import { LandingSection } from './sections/LandingSection';
import { HomeSection } from './sections/HomeSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { LanguagesSection } from './sections/LanguagesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';

export function GameWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useGameStore((state) => state.scrollProgress);
  const setScrollProgress = useGameStore((state) => state.setScrollProgress);
  const setDayTime = useGameStore((state) => state.setDayTime);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollX = window.scrollX || 0;
        const maxScroll = document.documentElement.scrollWidth - window.innerWidth;
        const progress = maxScroll > 0 ? scrollX / maxScroll : 0;
        setScrollProgress(progress);

        // Update day time based on scroll
        if (progress < 0.2) {
          setDayTime('morning');
        } else if (progress < 0.5) {
          setDayTime('afternoon');
        } else if (progress < 0.8) {
          setDayTime('sunset');
        } else {
          setDayTime('night');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress, setDayTime]);

  return (
    <div
      ref={containerRef}
      className="relative w-max min-h-screen bg-gradient-to-r from-sky-light via-sky-bright to-sky-night"
    >
      <div className="flex">
        <LandingSection />
        <HomeSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <LanguagesSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </div>
  );
}