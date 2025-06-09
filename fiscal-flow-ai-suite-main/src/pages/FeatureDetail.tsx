
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureDetail = () => {
  const { featureId } = useParams();

  const features = {
    'mobile-scanner': {
      title: 'Mobile Scanner & Multilingual OCR',
      subtitle: 'AI-Powered Document Recognition',
      description: 'Transform any smartphone into a professional invoice scanner with industry-leading OCR accuracy.',
      heroImage: '/placeholder.svg',
      benefits: [
        '99% OCR accuracy across 15+ languages',
        'Real-time data extraction and validation',
        'Support for PDF, JPG, PNG, and scanned documents',
        'Automatic HSN/SAC code detection',
        'Batch processing for multiple invoices',
        'Cloud sync with offline capability'
      ],
      features: [
        {
          title: 'Multi-language Support',
          description: 'Extract text accurately from documents in Hindi, English, Tamil, Telugu, and 12+ regional languages.',
          icon: '🌐'
        },
        {
          title: 'Smart Auto-Crop',
          description: 'Automatically detects document boundaries and crops images for optimal OCR results.',
          icon: '✂️'
        },
        {
          title: 'Real-time Processing',
          description: 'Get instant results as you scan, with data validation and error detection.',
          icon: '⚡'
        },
        {
          title: 'Batch Upload',
          description: 'Process multiple invoices simultaneously with bulk upload and processing capabilities.',
          icon: '📚'
        }
      ],
      technicalSpecs: [
        'Supported formats: PDF, JPEG, PNG, TIFF',
        'Max file size: 50MB per document',
        'Processing time: <3 seconds per page',
        'API integration available',
        'Webhook notifications',
        'Audit trail and version history'
      ]
    },
    'gst-reconciliation': {
      title: 'GST Reconciliation Assistant',
      subtitle: 'AI-Driven Tax Compliance',
      description: 'Automate GST categorization and generate comprehensive match reports with intelligent AI assistance.',
      heroImage: '/placeholder.svg',
      benefits: [
        'Automated GST categorization with 98% accuracy',
        'Real-time GSTIN validation and verification',
        'Intelligent mismatch detection and resolution',
        'Comprehensive compliance reporting',
        'One-click GST return preparation',
        'Audit trail for all transactions'
      ],
      features: [
        {
          title: 'Smart Categorization',
          description: 'AI automatically categorizes transactions based on GST rules and historical patterns.',
          icon: '🎯'
        },
        {
          title: 'Mismatch Detection',
          description: 'Identifies discrepancies between purchase and sales data with detailed explanations.',
          icon: '🔍'
        },
        {
          title: 'Compliance Monitoring',
          description: 'Continuous monitoring of GST compliance with automated alerts for potential issues.',
          icon: '⚠️'
        },
        {
          title: 'Report Generation',
          description: 'Generate comprehensive GST reports in multiple formats (Excel, PDF, CSV).',
          icon: '📊'
        }
      ],
      technicalSpecs: [
        'Supports all GST return types (GSTR-1, 2A, 3B)',
        'Real-time GSTIN validation via government API',
        'Historical data analysis up to 7 years',
        'Automated backup and recovery',
        'Role-based access control',
        'Integration with popular accounting software'
      ]
    }
    // Add more features as needed
  };

  const feature = features[featureId as keyof typeof features];

  if (!feature) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Feature Not Found</h1>
          <p className="text-gray-600 mb-8">The feature you're looking for doesn't exist.</p>
          <Link to="/features">
            <Button className="btn-primary">
              View All Features
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
                  <span className="text-sm font-medium text-accent">Featured Solution</span>
                </div>
                
                <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
                  {feature.title}
                </h1>
                
                <p className="text-xl text-accent font-medium mb-4">
                  {feature.subtitle}
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button className="btn-primary text-lg px-8 py-4">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Button variant="outline" className="text-lg px-8 py-4 border-gray-300 hover:border-accent hover:text-accent">
                    Schedule Demo
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8">
                  <div className="h-64 bg-gradient-to-br from-navy-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{feature.features[0]?.icon}</div>
                      <p className="text-gray-600">Interactive Feature Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how this feature transforms your financial operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-navy-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Breakdown */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep dive into the capabilities that make this feature powerful
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {feature.features.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover-lift">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade capabilities and integration options
              </p>
            </div>

            <div className="bg-navy-50 rounded-xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {feature.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Start using {feature.title} today with our 14-day free trial. 
              No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default FeatureDetail;
