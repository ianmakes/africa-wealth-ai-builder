
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Users, Search, Target, CheckCircle, ArrowRight, Building, Briefcase, DollarSign } from "lucide-react";
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
        "Market Entry Strategy",
        "Post-Transaction Integration",
        "Regulatory Compliance"
      ],
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricing: "Custom Quote",
      timeline: "4-12 weeks"
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
        "Market Research & Analytics",
        "Investment Strategy Development",
        "Asset Allocation Guidance"
      ],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricing: "From $5,000",
      timeline: "Ongoing"
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
        "Skills Enhancement Programs",
        "Industry Benchmarking",
        "Competitive Analysis"
      ],
      icon: Search,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricing: "From $2,500",
      timeline: "2-8 weeks"
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
        "Training & Development",
        "Payroll Management",
        "Employee Relations"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricing: "From $1,000/month",
      timeline: "Ongoing"
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
        "Business Process Improvement",
        "Digital Transformation",
        "Operational Excellence"
      ],
      icon: Target,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pricing: "Custom Quote",
      timeline: "6-16 weeks"
    }
  ];

  const industries = [
    { name: "Financial Services", icon: DollarSign, projects: "150+" },
    { name: "Technology", icon: Target, projects: "120+" },
    { name: "Manufacturing", icon: Building, projects: "100+" },
    { name: "Healthcare", icon: Users, projects: "80+" },
    { name: "Agriculture", icon: Globe, projects: "90+" },
    { name: "Energy", icon: TrendingUp, projects: "70+" }
  ];

  const benefits = [
    {
      title: "Pan-African Expertise",
      description: "Deep understanding of African markets, regulations, and business practices across all 54 countries.",
      icon: Globe
    },
    {
      title: "Proven Track Record",
      description: "Over 1000 clients served with successful outcomes and measurable results since 2004.",
      icon: CheckCircle
    },
    {
      title: "Comprehensive Solutions",
      description: "End-to-end services covering all aspects of wealth creation and business development.",
      icon: Target
    },
    {
      title: "Local Partnerships",
      description: "Strong network of local partners and experts in every African country we serve.",
      icon: Users
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Initial consultation to understand your needs and objectives" },
    { step: "02", title: "Strategy", description: "Develop customized approach and detailed project roadmap" },
    { step: "03", title: "Implementation", description: "Execute solutions with dedicated project teams and oversight" },
    { step: "04", title: "Optimization", description: "Continuous monitoring and refinement for maximum impact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial and strategic solutions designed to maximize value and drive sustainable growth across Africa.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Service Portfolio</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From transaction advisory to labor management, we provide end-to-end solutions for your business needs.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full border-l-4 border-l-red-900 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-red-100 rounded-lg">
                          <service.icon className="w-8 h-8 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-black">
                            {service.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm bg-red-900 text-white px-2 py-1 rounded">
                              {service.pricing}
                            </span>
                            <span className="text-sm text-gray-600">
                              Timeline: {service.timeline}
                            </span>
                          </div>
                        </div>
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
                    <div className="h-full bg-black/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Industry Expertise</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve clients across diverse industries with specialized knowledge and tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-red-900">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{industry.name}</h3>
                  <div className="text-2xl font-bold text-red-900 mb-2">{industry.projects}</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Process</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-red-900 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-red-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Why Choose Lan-x Africa?</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over two decades of experience, we bring unparalleled expertise to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-900">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Explore Opportunities Together</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to unlock your organization's potential? Our expert team is here to guide you through every step of your wealth optimization journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white font-semibold px-8 py-3 text-lg w-full sm:w-auto">
                Try Our Services
              </Button>
            </Link>
            <Link to="/invest-in-africa">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg w-full sm:w-auto">
                Explore Opportunities <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
