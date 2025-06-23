
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, MapPin, ArrowRight, Building, DollarSign, Factory, Zap, Leaf, Smartphone } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyInvestments: ["Suez Canal Expansion", "Morocco Solar Program", "Egypt New Capital"],
      fdi: "$12.5B"
    },
    {
      name: "West Africa",
      countries: ["Nigeria", "Ghana", "Cameroon", "Niger", "Cote D'Ivoire", "Sierra Leone"],
      description: "Economic powerhouse with abundant natural resources and rapidly growing populations.",
      opportunities: "Oil & Gas, Agriculture, Technology, Financial Services",
      color: "bg-green-500",
      stats: { gdp: "$1.2T", population: "420M", growth: "5.8%" },
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyInvestments: ["Lagos Free Zone", "Ghana Tech Hub", "Cocoa Processing"],
      fdi: "$18.7B"
    },
    {
      name: "East Africa",
      countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "Ethiopia", "Somalia", "DRC", "South Sudan"],
      description: "Hub for innovation and technology with strong regional integration and growth potential.",
      opportunities: "Technology, Agriculture, Infrastructure, Manufacturing",
      color: "bg-blue-500",
      stats: { gdp: "$0.9T", population: "480M", growth: "6.2%" },
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyInvestments: ["SGR Railway", "Fintech Innovation", "Coffee Export"],
      fdi: "$15.3B"
    },
    {
      name: "Southern Africa",
      countries: ["South Africa", "Namibia", "Zimbabwe", "Mozambique", "Madagascar", "Zambia", "Angola"],
      description: "Mineral-rich region with advanced financial markets and established industrial base.",
      opportunities: "Mining, Financial Services, Tourism, Renewable Energy",
      color: "bg-purple-500",
      stats: { gdp: "$0.7T", population: "180M", growth: "3.5%" },
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      keyInvestments: ["Mining Operations", "Renewable Energy", "Port Development"],
      fdi: "$14.2B"
    }
  ];

  const investmentHighlights = [
    {
      title: "Fastest Growing Economies",
      description: "Africa hosts 6 of the world's 10 fastest-growing economies with GDP growth averaging 5.4%",
      icon: TrendingUp,
      stat: "5.4%"
    },
    {
      title: "Young Demographics",
      description: "60% of Africa's population is under 25, representing a massive consumer market",
      icon: Users,
      stat: "60%"
    },
    {
      title: "Natural Resources",
      description: "Rich in minerals, oil, gas, and renewable energy potential worth trillions",
      icon: Globe,
      stat: "$82T"
    },
    {
      title: "Digital Revolution",
      description: "Leading mobile banking and fintech innovation with 469M mobile money accounts",
      icon: Smartphone,
      stat: "469M"
    }
  ];

  const sectors = [
    {
      name: "Energy & Utilities",
      icon: Zap,
      investment: "$45B",
      growth: "12%",
      description: "Renewable energy projects and power infrastructure development"
    },
    {
      name: "Agriculture & Food",
      icon: Leaf,
      investment: "$38B",
      growth: "8.5%",
      description: "Food processing, agribusiness, and sustainable farming initiatives"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      investment: "$32B",
      growth: "9.2%",
      description: "Industrial parks, automotive assembly, and textile production"
    },
    {
      name: "Financial Services",
      icon: DollarSign,
      investment: "$28B",
      growth: "15%",
      description: "Banking expansion, insurance, and fintech solutions"
    },
    {
      name: "Infrastructure",
      icon: Building,
      investment: "$55B",
      growth: "11%",
      description: "Transportation, telecommunications, and urban development"
    },
    {
      name: "Technology",
      icon: Smartphone,
      investment: "$25B",
      growth: "18%",
      description: "Software development, e-commerce, and digital platforms"
    }
  ];

  const successStories = [
    {
      company: "Jumia Technologies",
      sector: "E-commerce",
      investment: "$500M",
      impact: "Leading African e-commerce platform serving 11 countries"
    },
    {
      company: "M-Pesa",
      sector: "Fintech",
      investment: "$200M",
      impact: "Revolutionary mobile money service with 45M+ users"
    },
    {
      company: "Dangote Group",
      sector: "Manufacturing",
      investment: "$15B",
      impact: "Africa's largest cement producer and refinery operator"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Invest in Africa</h1>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover investment opportunities across Africa's diverse regions. Each area offers unique advantages and tremendous growth potential.
          </p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Why Invest in Africa?</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Africa represents the world's last great investment frontier with unprecedented opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-red-900">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-red-900 mb-2">{highlight.stat}</div>
                  <h3 className="text-xl font-bold text-black mb-4">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Key Investment Sectors</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-growth sectors driving Africa's economic transformation and offering attractive returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-red-900">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <sector.icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-black">{sector.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                          +{sector.growth}
                        </span>
                        <span className="text-sm text-gray-600">{sector.investment}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Investment by Region</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore investment opportunities across Africa's four major regions, each with distinct advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {regions.map((region, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedRegion === region.name ? 'ring-4 ring-red-900 shadow-xl' : ''
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
                  <CardTitle className="text-xl font-bold text-black">
                    {region.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {region.countries.length} Countries • FDI: {region.fdi}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-black">{region.stats.gdp}</div>
                      <div className="text-xs text-gray-600">GDP</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black">{region.stats.population}</div>
                      <div className="text-xs text-gray-600">Population</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black">{region.stats.growth}</div>
                      <div className="text-xs text-gray-600">Growth</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{region.description}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-black">Key Sectors:</span>
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
                <Card key={index} className="bg-white border-l-4 border-l-red-900">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black flex items-center">
                      <div className={`w-8 h-8 ${region.color} rounded mr-3`}></div>
                      {region.name} - Investment Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-4">Countries:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {region.countries.map((country, countryIndex) => (
                            <div key={countryIndex} className="bg-gray-100 px-3 py-2 rounded text-sm font-medium">
                              {country}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-4">Key Investments:</h4>
                        <ul className="space-y-2">
                          {region.keyInvestments.map((investment, investmentIndex) => (
                            <li key={investmentIndex} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-red-900 rounded-full mr-2"></div>
                              {investment}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-4">Investment Climate:</h4>
                        <p className="text-gray-700 mb-4">{region.description}</p>
                        <div className="bg-red-50 p-4 rounded">
                          <span className="font-semibold text-black">Priority Sectors: </span>
                          <span className="text-red-900">{region.opportunities}</span>
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading companies that have successfully invested and grown in African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-red-900">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-2">{story.company}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">{story.sector}</span>
                    <span className="text-sm font-semibold text-green-600">{story.investment}</span>
                  </div>
                  <p className="text-gray-700">{story.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Africa by Numbers</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-900 mb-2">54</div>
              <div className="text-gray-300">African Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-900 mb-2">1.4B</div>
              <div className="text-gray-300">Population</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-900 mb-2">$3.4T</div>
              <div className="text-gray-300">Combined GDP</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-900 mb-2">$61B</div>
              <div className="text-gray-300">Annual FDI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Invest in Africa's Future?</h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the opportunities and help you make informed investment decisions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100 px-8 py-3 text-lg">
              Explore Investment Opportunities <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestInAfrica;
