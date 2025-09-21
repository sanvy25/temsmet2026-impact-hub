import React from 'react';
import { HeroSection } from '@/components/conference/HeroSection';
import { AboutSection } from '@/components/conference/AboutSection';
import { CallForPapers } from '@/components/conference/CallForPapers';
import { RegistrationSection } from '@/components/conference/RegistrationSection';
import { SpeakersSection } from '@/components/conference/SpeakersSection';
import { ProgramSection } from '@/components/conference/ProgramSection';
import { VenueSection } from '@/components/conference/VenueSection';
import { ContactSection } from '@/components/conference/ContactSection';
import { Footer } from '@/components/conference/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <CallForPapers />
      <RegistrationSection />
      <SpeakersSection />
      <ProgramSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;