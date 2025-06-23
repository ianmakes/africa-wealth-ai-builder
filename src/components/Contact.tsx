
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Ready to start your wealth optimization journey? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-800 mb-4">
                  Head Office - Nairobi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-100">15th Floor, ABSA Towers<br />Loita Street, Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-gray-100">+254 755 450450</p>
                    <p className="text-gray-100">+254 741 991 735</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-red-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-100">admin@lanxafrica.co.ke</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-800">Quick Contact Options</h3>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2">Conference Inquiries</h4>
                  <p className="text-gray-100 text-sm mb-3">Interested in hosting or attending our conferences?</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white"
                  >
                    Conference Info
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2">Investment Inquiries</h4>
                  <p className="text-gray-100 text-sm mb-3">Ready to explore investment opportunities?</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white"
                  >
                    Investment Advisory
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white">
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
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger>
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
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-black hover:bg-gray-800 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="bg-white/20 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-red-800" />
                  <h3 className="text-xl font-bold mb-2">ABSA Towers, Nairobi</h3>
                  <p className="text-gray-100">15th Floor, Loita Street</p>
                  <p className="text-gray-100">Interactive map coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
