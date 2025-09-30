import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import heroImage from '@/assets/conference-hero.jpg';
import ieeeImage from '@/assets/ieee-logo.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="TEMSMET 2026 Conference Hero Banner"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* IEEE Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={ieeeImage} 
            alt="IEEE Logo"
            className="h-16 w-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="block text-white">TEMSMET 2026</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-blue-100 mt-4">
            5th IEEE International Conference
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          Technology, Engineering, Management for Societal Impact using
          <br className="hidden md:block" />
          Marketing, Entrepreneurship, and Talent
        </p>

        {/* Conference Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-lg">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-200" />
            <span className="text-blue-100">October 21–23, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-blue-200" />
            <span className="text-blue-100">Symbiosis Institute of Technology Hyderabad</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 text-lg font-semibold"
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 text-lg font-semibold"
          >
            Submit Paper
          </Button>
        </div>

        {/* Conference Number */}
        <p className="mt-8 text-blue-200 text-sm">
          IEEE Conference #65536
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};