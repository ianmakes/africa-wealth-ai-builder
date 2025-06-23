
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Users, Search, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const Services = () => {
  const services = [
    {
      title: "Transaction Advisory Services",
      description: "Strategic M&A support, financial due diligence, and comprehensive risk assessment for informed decision-making.",
      features: [
        "Strategic M&A Support",
        "Financial Due Diligence",
        "Risk Assessment & Mitigation",
        "Deal Structuring & Negotiation",
        "Valuation Services",
        "Market Entry Strategy"
      ],
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Investment Advisory Services", 
      description: "Market insights across bonds, derivatives, commodities, and forex with personalized security recommendations.",
      features: [
        "Bonds & Securities Analysis",
        "Derivatives & Commodities",
        "Forex Market Intelligence",
        "Risk-Managed Wealth Building",
        "Portfolio Optimization",
        "Market Research & Analytics"
      ],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Research & Training",
      description: "Comprehensive research for corporate strategy, markets, and policy with Pan-African coverage and custom training.",
      features: [
        "Corporate Strategy Research",
        "Market Intelligence",
        "Policy Analysis",
        "Custom Corporate Training",
        "Leadership Development",
        "Skills Enhancement Programs"
      ],
      icon: Search,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outsourced Labor Management",
      description: "Complete talent sourcing, onboarding, and management solutions ideal for foreign investors and scaling companies.",
      features: [
        "Talent Sourcing & Recruitment",
        "Employee Onboarding",
        "HR Management Systems",
        "Compliance & Documentation",
        "Performance Management",
        "Training & Development"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Consultancy Services",
      description: "Revenue improvement, organizational diagnostics, and comprehensive strategy development and implementation.",
      features: [
        "Revenue Optimization",
        "Organizational Diagnostics",
        "Strategy Development",
        "Implementation Support",
        "Change Management",
        "Business Process Improvement"
      ],
      icon: Target,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial and strategic solutions designed to maximize value and drive sustainable growth across Africa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full border-l-4 border-l-yellow-500 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <service.icon className="w-8 h-8 text-blue-900" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-blue-900">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div 
                    className="h-80 bg-cover bg-center rounded-lg shadow-xl"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  >
                    <div className="h-full bg-blue-900/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Lan-x Africa?</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over two decades of experience, we bring unparalleled expertise to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Pan-African Expertise</h3>
                <p className="text-gray-600">Deep understanding of African markets, regulations, and business practices across all 54 countries.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">Over 1000 clients served with successful outcomes and measurable results since 2004.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Comprehensive Solutions</h3>
                <p className="text-gray-600">End-to-end services covering all aspects of wealth creation and business development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Explore Opportunities Together</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to unlock your organization's potential? Our expert team is here to guide you through every step of your wealth optimization journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-3 text-lg">
                Try Our Services
              </Button>
            </Link>
            <Link to="/invest-in-africa">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                Explore Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
