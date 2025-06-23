
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Calendar, ArrowRight, Users, Globe, TrendingUp, Shield, Target, Search, Award, CheckCircle, Building, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import TalkToUsModal from '../components/TalkToUsModal';

const Index = () => {
  const services = [
    {
      title: "Transaction Advisory",
      description: "Strategic M&A support and financial due diligence",
      icon: TrendingUp,
      features: ["M&A Support", "Due Diligence", "Risk Assessment"]
    },
    {
      title: "Investment Advisory",
      description: "Market insights across bonds, derivatives, and forex",
      icon: Globe,
      features: ["Securities Analysis", "Market Intelligence", "Portfolio Optimization"]
    },
    {
      title: "Labor Management",
      description: "Complete talent sourcing and HR management",
      icon: Users,
      features: ["Talent Sourcing", "HR Systems", "Compliance Management"]
    },
    {
      title: "Research & Training",
      description: "Comprehensive research and corporate training",
      icon: Search,
      features: ["Strategy Research", "Market Analysis", "Corporate Training"]
    }
  ];

  const regions = [
    { name: "North Africa", countries: 5, gdp: "$0.8T", color: "bg-red-600" },
    { name: "West Africa", countries: 6, gdp: "$1.2T", color: "bg-green-600" },
    { name: "East Africa", countries: 9, gdp: "$0.9T", color: "bg-blue-600" },
    { name: "Southern Africa", countries: 7, gdp: "$0.7T", color: "bg-purple-600" }
  ];

  const achievements = [
    { number: "20+", label: "Years Excellence", icon: Award },
    { number: "54", label: "African Countries", icon: Globe },
    { number: "1000+", label: "Clients Served", icon: Users },
    { number: "500+", label: "Projects Completed", icon: Briefcase }
  ];

  const testimonials = [
    {
      quote: "Lan-x Africa's strategic guidance helped us navigate complex market entry challenges across three African countries.",
      author: "Sarah Johnson",
      position: "CEO, Global Ventures Ltd",
      company: "International Investment Firm"
    },
    {
      quote: "Their research and training programs elevated our team's understanding of African markets significantly.",
      author: "Dr. Michael Okonkwo",
      position: "Director of Strategy",
      company: "Pan-African Development Bank"
    },
    {
      quote: "Outstanding transaction advisory services that delivered measurable results for our M&A activities.",
      author: "Elena Rodriguez",
      position: "Managing Partner",
      company: "Meridian Capital"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        {/* Modern geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-red-900 rotate-45 opacity-50"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-red-900/20 rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-red-900 rounded-full opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Optimizing</span>
                <span className="block text-red-900">Africa's</span>
                <span className="block">Wealth Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Supporting individuals, MSMEs, corporates, governments, and NGOs to create, 
                nurture, and build sustainable wealth across Africa since 2004.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-red-900 hover:bg-red-800 text-white font-semibold px-8 py-3 text-base transition-all transform hover:scale-105 w-full sm:w-auto"
                  >
                    Reach Our Advisory Team
                  </Button>
                </Link>
                <Link to="/invest-in-africa">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-8 py-3 text-base transition-all w-full sm:w-auto"
                  >
                    Explore Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <achievement.icon className="w-12 h-12 text-red-900 mx-auto mb-4" />
                <div className="text-4xl font-bold text-red-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">About Lan-x Africa</h2>
              <div className="w-16 h-1 bg-red-900 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lan-x Africa Limited is a wealth infopreneurship company supporting individuals, 
                MSMEs, corporates, governments, and NGOs to create, nurture, and build sustainable 
                wealth across Africa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Since 2004, we have been at the forefront of African financial consulting and 
                strategic advisory services, helping organizations unlock their potential and 
                achieve sustainable growth.
              </p>
              
              {/* Core Principles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-900" />
                  <span className="font-semibold">Maximize Revenues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-900" />
                  <span className="font-semibold">Enhance Human Capital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-900" />
                  <span className="font-semibold">Optimize Wealth Journey</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-900" />
                  <span className="font-semibold">Actionable Research</span>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Learn More About Us <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div 
              className="relative h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial and strategic solutions designed to maximize value and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-red-900">
                <CardHeader className="text-center">
                  <service.icon className="w-12 h-12 text-black mx-auto mb-4" />
                  <CardTitle className="text-lg font-bold text-black">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-900 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Investment Opportunities Across Africa</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover investment opportunities across Africa's diverse regions, each offering unique advantages and growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${region.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{region.name}</h3>
                  <p className="text-gray-600 mb-4">{region.countries} Countries</p>
                  <div className="text-2xl font-bold text-red-900">{region.gdp}</div>
                  <div className="text-sm text-gray-600">Combined GDP</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/invest-in-africa">
              <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white px-8 py-3">
                Explore Regional Opportunities <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from organizations that have partnered with us to achieve their wealth optimization goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl text-red-900 mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-red-900">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Wealth Journey?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today and discover the opportunities waiting for you across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TalkToUsModal>
              <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 w-full sm:w-auto">
                Talk to Our Team
              </Button>
            </TalkToUsModal>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 w-full sm:w-auto">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
