
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Search, Award, Globe, CheckCircle, Building, MapPin, Calendar } from "lucide-react";
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
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "15+", label: "Industry Sectors", icon: Building },
    { number: "98%", label: "Client Satisfaction", icon: CheckCircle }
  ];

  const timeline = [
    { year: "2004", event: "Founded Lan-x Africa", description: "Started our journey to optimize Africa's wealth landscape" },
    { year: "2008", event: "Pan-African Expansion", description: "Extended services across all 54 African countries" },
    { year: "2012", event: "1000+ Clients Milestone", description: "Reached significant client base across the continent" },
    { year: "2016", event: "Digital Transformation", description: "Integrated technology solutions for better service delivery" },
    { year: "2020", event: "Research Excellence", description: "Established comprehensive research and training division" },
    { year: "2024", event: "Leading Market Position", description: "Recognized as top wealth optimization firm in Africa" }
  ];

  const teamValues = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings",
      icon: CheckCircle
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every service we deliver",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge solutions for complex challenges",
      icon: TrendingUp
    },
    {
      title: "Partnership",
      description: "We build lasting relationships with our clients and stakeholders",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Lan-x Africa</h1>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Two decades of proven expertise in navigating Africa's dynamic business landscape, 
            building lasting partnerships, and delivering measurable results.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-red-900 mb-8"></div>
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
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-900">
                <h3 className="text-xl font-bold text-black mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be Africa's leading wealth optimization partner, empowering every individual, 
                  organization, and nation to achieve financial prosperity and sustainable development.
                </p>
              </div>
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

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Core Principles</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-900">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <principle.icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">{principle.title}</h3>
                      <p className="text-gray-700">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of growth, innovation, and impact across Africa.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-900"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Calendar className="w-5 h-5 text-red-900" />
                          <span className="text-2xl font-bold text-red-900">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">{item.event}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-900 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that drive our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-red-900" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two decades of excellence in African wealth management and strategic consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <achievement.icon className="w-12 h-12 text-red-900 mx-auto mb-4" />
                <div className="text-4xl font-bold text-red-900 mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Leadership Message</h2>
              <div className="w-16 h-1 bg-red-900 mb-8"></div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-900">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "Africa represents the world's greatest untapped potential for wealth creation and 
                  sustainable development. At Lan-x Africa, we are committed to unlocking this potential 
                  through strategic partnerships, innovative solutions, and unwavering dedication to excellence."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-black">Executive Leadership Team</div>
                  <div className="text-sm text-gray-600">Lan-x Africa Limited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust Lan-x Africa for strategic guidance and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100 px-8 py-3 w-full sm:w-auto">
                Get Started Today
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900 px-8 py-3 w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
