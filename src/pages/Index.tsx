
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Calendar } from "lucide-react";
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import InvestInAfrica from '../components/InvestInAfrica';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <InvestInAfrica />
      <Contact />
    </div>
  );
};

export default Index;
