
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InvestInAfrica = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      name: "North Africa",
      countries: ["Egypt", "Morocco", "Algeria", "Libya", "Tunisia"],
      description: "Gateway to Europe and the Middle East with established infrastructure and growing markets.",
      opportunities: "Energy, Tourism, Manufacturing, Agriculture",
      color: "bg-red-500"
    },
    {
      name: "West Africa",
      countries: ["Nigeria", "Ghana", "Cameroon", "Niger", "Cote D'Ivoire", "Sierra Leone"],
      description: "Economic powerhouse with abundant natural resources and rapidly growing populations.",
      opportunities: "Oil & Gas, Agriculture, Technology, Financial Services",
      color: "bg-green-500"
    },
    {
      name: "East Africa",
      countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Ethiopia", "Somalia", "DRC", "South Sudan"],
      description: "Hub for innovation and technology with strong regional integration and growth potential.",
      opportunities: "Technology, Agriculture, Infrastructure, Manufacturing",
      color: "bg-blue-500"
    },
    {
      name: "Southern Africa",
      countries: ["South Africa", "Namibia", "Zimbabwe", "Mozambique", "Madagascar", "Zambia", "Angola"],
      description: "Mineral-rich region with advanced financial markets and established industrial base.",
      opportunities: "Mining, Financial Services, Tourism, Renewable Energy",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="invest" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Invest in Africa
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover investment opportunities across Africa's diverse regions. Each area offers unique advantages and growth potential.
          </p>
        </div>

        {/* Interactive Map/Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                selectedRegion === region.name ? 'ring-4 ring-yellow-500 shadow-xl' : ''
              }`}
              onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${region.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{region.name.split(' ')[0][0]}{region.name.split(' ')[1] ? region.name.split(' ')[1][0] : ''}</span>
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  {region.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {region.countries.length} Countries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{region.description}</p>
                <div className="text-sm">
                  <span className="font-semibold text-blue-900">Key Opportunities:</span>
                  <p className="text-gray-700">{region.opportunities}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Region View */}
        {selectedRegion && (
          <div className="mb-12 animate-fade-in">
            {regions.filter(region => region.name === selectedRegion).map((region, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-900 flex items-center">
                    <div className={`w-8 h-8 ${region.color} rounded mr-3`}></div>
                    {region.name} - Investment Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Countries in Region:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {region.countries.map((country, countryIndex) => (
                          <div key={countryIndex} className="bg-gray-100 px-3 py-2 rounded text-sm font-medium">
                            {country}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Investment Focus Areas:</h4>
                      <p className="text-gray-700 mb-4">{region.description}</p>
                      <div className="bg-blue-50 p-4 rounded">
                        <span className="font-semibold text-blue-900">Priority Sectors: </span>
                        <span className="text-blue-800">{region.opportunities}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-900 mb-2">54</div>
            <div className="text-gray-600">African Countries</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-900 mb-2">1.4B</div>
            <div className="text-gray-600">Population</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-900 mb-2">$3.4T</div>
            <div className="text-gray-600">Combined GDP</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-900 mb-2">60%</div>
            <div className="text-gray-600">Under 25 Years</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Invest in Africa's Future?</h3>
            <p className="text-lg mb-6">
              Let our experts guide you through the opportunities and help you make informed investment decisions.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Investment Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestInAfrica;
