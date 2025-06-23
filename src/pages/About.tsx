
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Search, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const About = () => {
  const principles = [
    {
      title: "Maximize Revenues",
      description: "Strategic guidance to optimize income streams and financial performance across all business verticals.",
      icon: TrendingUp
    },
    {
      title: "Enhance Human Capital",
      description: "Developing talent and organizational capabilities to drive sustainable growth and innovation.",
      icon: Users
    },
    {
      title: "Optimize Wealth Journey",
      description: "Comprehensive wealth management strategies tailored to African market dynamics and opportunities.",
      icon: Target
    },
    {
      title: "Provide Actionable Research",
      description: "Data-driven insights and intelligence to inform strategic decisions and market entry strategies.",
      icon: Search
    }
  ];

  const achievements = [
    { number: "20+", label: "Years of Excellence", icon: Award },
    { number: "54", label: "African Countries", icon: Globe },
    { number: "1000+", label: "Clients Served", icon: Users },
    { number: "500+", label: "Projects Completed", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Lan-x Africa</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Two decades of proven expertise in navigating Africa's dynamic business landscape, 
            building lasting partnerships, and delivering measurable results.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-yellow-500 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lan-x Africa Limited is a wealth infopreneurship company supporting individuals, 
                MSMEs, corporates, governments, and NGOs to create, nurture, and build sustainable 
                wealth across Africa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Since 2004, we have been at the forefront of African financial consulting and 
                strategic advisory services, helping organizations unlock their potential and 
                achieve sustainable growth in an ever-evolving marketplace.
              </p>
              <Link to="/services">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            
            <div 
              className="relative h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Core Principles</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <principle.icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{principle.title}</h3>
                      <p className="text-gray-700">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Two decades of excellence in African wealth management and strategic consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6">
                <achievement.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust Lan-x Africa for strategic guidance and sustainable growth.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
