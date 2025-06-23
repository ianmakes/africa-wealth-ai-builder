
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Calendar, ArrowRight, Users, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
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
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-3 text-lg transition-all transform hover:scale-105"
                >
                  Reach Our Transaction Advisory Team
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg transition-all"
                >
                  Book a Consultation
                </Button>
              </Link>
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

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial and strategic solutions designed to maximize value and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-blue-900">Transaction Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Strategic M&A support and financial due diligence.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <Globe className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-blue-900">Investment Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Market insights across bonds, derivatives, and forex.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-blue-900">Labor Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Complete talent sourcing and HR management solutions.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-blue-900">Research & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Comprehensive research and custom corporate training.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Wealth Journey?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today and discover the opportunities waiting for you across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/invest-in-africa">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                Explore Investment Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
