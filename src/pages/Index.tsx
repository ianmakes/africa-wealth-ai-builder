
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
      
      {/* Hero Section - Modern Redesign */}
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

      {/* Key Stats - Updated with new theme */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-red-900 mb-2">20+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-red-900 mb-2">54</div>
              <div className="text-gray-600">African Countries Covered</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-red-900 mb-2">1000+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Updated with new theme */}
      <section className="py-20 bg-white">
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
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-red-900">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-black mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-black">Transaction Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Strategic M&A support and financial due diligence.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-red-900">
              <CardHeader className="text-center">
                <Globe className="w-12 h-12 text-black mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-black">Investment Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Market insights across bonds, derivatives, and forex.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-red-900">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-black mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-black">Labor Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Complete talent sourcing and HR management solutions.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-red-900">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-black mx-auto mb-4" />
                <CardTitle className="text-lg font-bold text-black">Research & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Comprehensive research and custom corporate training.</p>
              </CardContent>
            </Card>
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

      {/* Quick Contact - Updated with new theme */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Wealth Journey?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today and discover the opportunities waiting for you across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 w-full sm:w-auto">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/invest-in-africa">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 w-full sm:w-auto">
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
