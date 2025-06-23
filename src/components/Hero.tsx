
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-yellow-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-400 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-20 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Optimizing</span>
              <span className="block text-yellow-400">Africa's</span>
              <span className="block">Wealth Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Supporting individuals, MSMEs, corporates, governments, and NGOs to create, 
              nurture, and build sustainable wealth across Africa since 2004.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-3 text-lg transition-all transform hover:scale-105"
            >
              Reach Our Transaction Advisory Team
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg transition-all"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">54</div>
              <div className="text-blue-100">African Countries Covered</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-blue-100">Clients Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
