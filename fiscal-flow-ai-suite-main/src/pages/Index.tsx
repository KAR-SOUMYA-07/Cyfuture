
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import HowItWorksSection from '@/components/homepage/HowItWorksSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import CTASection from '@/components/homepage/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
