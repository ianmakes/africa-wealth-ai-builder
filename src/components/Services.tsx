
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Transaction Advisory Services",
      description: "Strategic M&A support, financial due diligence, and comprehensive risk assessment for informed decision-making.",
      features: [
        "Strategic M&A Support",
        "Financial Due Diligence",
        "Risk Assessment & Mitigation",
        "Deal Structuring & Negotiation"
      ],
      icon: "🏢"
    },
    {
      title: "Investment Advisory Services", 
      description: "Market insights across bonds, derivatives, commodities, and forex with personalized security recommendations.",
      features: [
        "Bonds & Securities Analysis",
        "Derivatives & Commodities",
        "Forex Market Intelligence",
        "Risk-Managed Wealth Building"
      ],
      icon: "📈"
    },
    {
      title: "Research & Training",
      description: "Comprehensive research for corporate strategy, markets, and policy with Pan-African coverage and custom training.",
      features: [
        "Corporate Strategy Research",
        "Market Intelligence",
        "Policy Analysis",
        "Custom Corporate Training"
      ],
      icon: "🔬"
    },
    {
      title: "Outsourced Labor Management",
      description: "Complete talent sourcing, onboarding, and management solutions ideal for foreign investors and scaling companies.",
      features: [
        "Talent Sourcing & Recruitment",
        "Employee Onboarding",
        "HR Management Systems",
        "Compliance & Documentation"
      ],
      icon: "👥"
    },
    {
      title: "Consultancy Services",
      description: "Revenue improvement, organizational diagnostics, and comprehensive strategy development and implementation.",
      features: [
        "Revenue Optimization",
        "Organizational Diagnostics",
        "Strategy Development",
        "Implementation Support"
      ],
      icon: "🎯"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial and strategic solutions designed to maximize value and drive sustainable growth across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-yellow-500">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Let's Explore Opportunities Together</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to unlock your organization's potential? Our expert team is here to guide you through every step of your wealth optimization journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Try Our Services
              </Button>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
