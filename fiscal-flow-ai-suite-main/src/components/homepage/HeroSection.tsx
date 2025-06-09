
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 to-cyan-50 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">AI-Powered Financial Operations</span>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Automate Your{' '}
              <span className="text-gradient">Financial Operations</span>{' '}
              with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline invoice processing, automate GST reconciliation, and enhance financial workflows 
              with our intelligent platform. Process invoices 10x faster with AI-powered OCR and automated compliance.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-2" />
                <span className="text-gray-700">99% OCR Accuracy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-2" />
                <span className="text-gray-700">Automated GST Filing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-2" />
                <span className="text-gray-700">Multi-language Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/signup">
                <Button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto border-gray-300 hover:border-accent hover:text-accent">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-500 mb-4">Trusted by 1000+ businesses</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
                <div className="h-8 bg-gray-300 rounded w-20"></div>
                <div className="h-8 bg-gray-300 rounded w-24"></div>
                <div className="h-8 bg-gray-300 rounded w-20"></div>
                <div className="h-8 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-lg text-primary">Financial Dashboard</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Processed Today</p>
                      <p className="text-2xl font-bold text-primary">₹2.4L</p>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">GST Saved</p>
                      <p className="text-2xl font-bold text-accent">₹45K</p>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-8 h-8 bg-accent rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-600">Real-time Analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse-slow">
                99% Accurate
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Offline Sync Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
