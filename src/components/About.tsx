
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const principles = [
    {
      title: "Maximize Revenues",
      description: "Strategic guidance to optimize income streams and financial performance across all business verticals."
    },
    {
      title: "Enhance Human Capital",
      description: "Developing talent and organizational capabilities to drive sustainable growth and innovation."
    },
    {
      title: "Optimize Wealth Journey",
      description: "Comprehensive wealth management strategies tailored to African market dynamics and opportunities."
    },
    {
      title: "Provide Actionable Research",
      description: "Data-driven insights and intelligence to inform strategic decisions and market entry strategies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Lan-x Africa
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Lan-x Africa Limited is a wealth infopreneurship company supporting individuals, 
                MSMEs, corporates, governments, and NGOs to create, nurture, and build sustainable 
                wealth in Africa. Since 2004, we have been at the forefront of African financial 
                consulting and strategic advisory services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Since 2004</h3>
              <p className="text-gray-700">
                Two decades of proven expertise in navigating Africa's dynamic business landscape, 
                building lasting partnerships, and delivering measurable results for our clients 
                across the continent.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Our Core Principles</h3>
            
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">{principle.title}</h4>
                  <p className="text-gray-700">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Wealth Journey?</h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of organizations that trust Lan-x Africa for strategic guidance and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
