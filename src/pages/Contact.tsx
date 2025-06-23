
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navigation from '../components/Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      details: ["+254 755 450450", "+254 741 991 735"]
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      details: ["admin@lanxafrica.co.ke"]
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet us at our head office",
      details: ["15th Floor, ABSA Towers", "Loita Street, Nairobi"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're available during",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"]
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
            backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            Ready to start your wealth optimization journey? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you navigate Africa's opportunities. Choose your preferred way to reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-red-800">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-1">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm font-medium text-gray-700">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="border-gray-300 focus:border-red-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          className="border-gray-300 focus:border-red-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+254 xxx xxx xxx"
                          className="border-gray-300 focus:border-red-800"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          className="border-gray-300 focus:border-red-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-red-800">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transaction-advisory">Transaction Advisory</SelectItem>
                          <SelectItem value="investment-advisory">Investment Advisory</SelectItem>
                          <SelectItem value="research-training">Research & Training</SelectItem>
                          <SelectItem value="labor-management">Labor Management</SelectItem>
                          <SelectItem value="consultancy">Consultancy Services</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your inquiry in detail..."
                        className="border-gray-300 focus:border-red-800"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-black hover:bg-gray-800 text-white py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-red-800" />
                    Head Office - Nairobi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div 
                    className="h-48 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  >
                    <div className="h-full bg-black/80 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPin className="w-12 h-12 mx-auto mb-2 text-red-800" />
                        <p className="font-bold">ABSA Towers</p>
                        <p>15th Floor, Loita Street</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black">Phone Numbers</p>
                        <p className="text-gray-700">+254 755 450450</p>
                        <p className="text-gray-700">+254 741 991 735</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-black">Email</p>
                        <p className="text-gray-700">admin@lanxafrica.co.ke</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">Specialized Services</h3>
                
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Globe className="w-8 h-8 text-black" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-black mb-1">Conference Inquiries</h4>
                        <p className="text-gray-600 text-sm">Interested in hosting or attending our conferences?</p>
                      </div>
                      <Button size="sm" className="bg-red-800 hover:bg-red-700 text-white">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Users className="w-8 h-8 text-black" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-black mb-1">Investment Inquiries</h4>
                        <p className="text-gray-600 text-sm">Ready to explore investment opportunities?</p>
                      </div>
                      <Button size="sm" className="bg-red-800 hover:bg-red-700 text-white">
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
                }}
              >
                <div className="h-full bg-black/60 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-red-800" />
                    <h3 className="text-2xl font-bold mb-2">Find Us in Nairobi</h3>
                    <p className="text-gray-100">15th Floor, ABSA Towers, Loita Street</p>
                    <p className="text-gray-100">Interactive map integration coming soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
