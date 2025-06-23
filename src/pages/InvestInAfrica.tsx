
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';

const InvestInAfrica = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      name: "North Africa",
      countries: ["Egypt", "Morocco", "Algeria", "Libya", "Tunisia"],
      description: "Gateway to Europe and the Middle East with established infrastructure and growing markets.",
      opportunities: "Energy, Tourism, Manufacturing, Agriculture",
      color: "bg-red-500",
      stats: { gdp: "$0.8T", population: "250M", growth: "4.2%" },
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "West Africa",
      countries: ["Nigeria", "Ghana", "Cameroon", "Niger", "Cote D'Ivoire", "Sierra Leone"],
      description: "Economic powerhouse with abundant natural resources and rapidly growing populations.",
      opportunities: "Oil & Gas, Agriculture, Technology, Financial Services",
      color: "bg-green-500",
      stats: { gdp: "$1.2T", population: "420M", growth: "5.8%" },
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "East Africa",
      countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Ethiopia", "Somalia", "DRC", "South Sudan"],
      description: "Hub for innovation and technology with strong regional integration and growth potential.",
      opportunities: "Technology, Agriculture, Infrastructure, Manufacturing",
      color: "bg-blue-500",
      stats: { gdp: "$0.9T", population: "480M", growth: "6.2%" },
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Southern Africa",
      countries: ["South Africa", "Namibia", "Zimbabwe", "Mozambique", "Madagascar", "Zambia", "Angola"],
      description: "Mineral-rich region with advanced financial markets and established industrial base.",
      opportunities: "Mining, Financial Services, Tourism, Renewable Energy",
      color: "bg-purple-500",
      stats: { gdp: "$0.7T", population: "180M", growth: "3.5%" },
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const investmentHighlights = [
    {
      title: "Fastest Growing Economies",
      description: "Africa hosts 6 of the world's 10 fastest-growing economies",
      icon: TrendingUp
    },
    {
      title: "Young Demographics",
      description: "60% of Africa's population is under 25, representing a massive consumer market",
      icon: Users
    },
    {
      title: "Natural Resources",
      description: "Rich in minerals, oil, gas, and renewable energy potential",
      icon: Globe
    },
    {
      title: "Digital Revolution",
      description: "Leading mobile banking and fintech innovation globally",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Invest in Africa</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Discover investment opportunities across Africa's diverse regions. Each area offers unique advantages and tremendous growth potential.
          </p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Invest in Africa?</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Africa represents the world's last great investment frontier with unprecedented opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Investment by Region</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore investment opportunities across Africa's four major regions, each with distinct advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {regions.map((region, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedRegion === region.name ? 'ring-4 ring-yellow-500 shadow-xl' : ''
                }`}
                onClick={() => setSelectedRegion(selectedRegion === region.name ? null : region.name)}
              >
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url('${region.image}')` }}
                >
                  <div className="h-full bg-black/30 rounded-t-lg flex items-center justify-center">
                    <div className={`w-16 h-16 ${region.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {region.name.split(' ')[0][0]}{region.name.split(' ')[1] ? region.name.split(' ')[1][0] : ''}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-900">
                    {region.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {region.countries.length} Countries
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-900">{region.stats.gdp}</div>
                      <div className="text-xs text-gray-600">GDP</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-900">{region.stats.population}</div>
                      <div className="text-xs text-gray-600">Population</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-900">{region.stats.growth}</div>
                      <div className="text-xs text-gray-600">Growth</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{region.description}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-blue-900">Key Sectors:</span>
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
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Africa by Numbers</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">54</div>
              <div className="text-blue-100">African Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1.4B</div>
              <div className="text-blue-100">Population</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$3.4T</div>
              <div className="text-blue-100">Combined GDP</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
              <div className="text-blue-100">Under 25 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Invest in Africa's Future?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the opportunities and help you make informed investment decisions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg">
              Explore Investment Opportunities <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestInAfrica;
