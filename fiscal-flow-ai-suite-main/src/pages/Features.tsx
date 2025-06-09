
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Search, 
  CreditCard, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Wifi, 
  Users, 
  Truck, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const allFeatures = [
    {
      icon: Camera,
      title: 'Mobile Scanner & Multilingual OCR',
      description: 'Scan invoices with 99% accuracy in multiple languages. AI-powered text extraction from any document format with real-time validation.',
      benefits: ['15+ languages supported', 'Batch processing', 'Real-time validation', 'Cloud sync'],
      link: '/features/mobile-scanner',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Auto-HSN/SAC Lookup & GSTIN Validation',
      description: 'Automatic HSN/SAC code detection and real-time GSTIN validation for accurate tax classification and compliance.',
      benefits: ['Automated code detection', 'Real-time validation', 'Compliance assurance', 'Error prevention'],
      link: '/features/hsn-lookup',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: CreditCard,
      title: 'Automated Bank Reconciliation',
      description: 'Intelligent matching of bank transactions with invoices for seamless financial reconciliation and cash flow management.',
      benefits: ['Smart matching', 'Multi-bank support', 'Automated workflows', 'Exception handling'],
      link: '/features/bank-reconciliation',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'GST Reconciliation Assistant',
      description: 'AI-driven GST categorization and automated match reports for compliance and filing with intelligent error detection.',
      benefits: ['Auto categorization', 'Mismatch detection', 'Compliance reports', 'Audit trails'],
      link: '/features/gst-reconciliation',
      color: 'bg-accent',
      gradient: 'from-accent to-cyan-600'
    },
    {
      icon: Calendar,
      title: 'One-Click GST Return Filing',
      description: 'Automated GST return preparation and filing with built-in compliance checks and validation.',
      benefits: ['Auto preparation', 'Compliance checks', 'E-filing integration', 'Status tracking'],
      link: '/features/gst-filing',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow Forecasting & Alerts',
      description: 'Predictive analytics for cash flow management with intelligent alerts and actionable insights.',
      benefits: ['Predictive analytics', 'Smart alerts', 'Scenario planning', 'Visual dashboards'],
      link: '/features/cash-flow',
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Wifi,
      title: 'Offline Mode & Seamless Sync',
      description: 'Work offline with PWA capabilities and automatic data synchronization when connected.',
      benefits: ['PWA technology', 'Auto sync', 'Offline processing', 'Data integrity'],
      link: '/features/offline-mode',
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Role-Based Access & Collaboration',
      description: 'Secure multi-user access with customizable permissions and team collaboration tools.',
      benefits: ['Custom roles', 'Team collaboration', 'Secure access', 'Activity tracking'],
      link: '/features/role-access',
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Truck,
      title: 'E-Way Bill Auto-Generation',
      description: 'Automated E-Way bill creation and management dashboard for seamless logistics and compliance.',
      benefits: ['Auto generation', 'Logistics integration', 'Compliance tracking', 'Real-time updates'],
      link: '/features/eway-bill',
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Multilingual AI Chatbot',
      description: 'AI-powered assistant for finance queries, compliance guidance, and operational support in multiple languages.',
      benefits: ['24/7 availability', 'Multi-language', 'Smart responses', 'Learning capability'],
      link: '/features/ai-chatbot',
      color: 'bg-yellow-500',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  const categories = [
    {
      title: 'Document Processing',
      features: allFeatures.slice(0, 2),
      description: 'Intelligent document scanning and data extraction'
    },
    {
      title: 'Financial Reconciliation',
      features: allFeatures.slice(2, 4),
      description: 'Automated matching and reconciliation workflows'
    },
    {
      title: 'Compliance & Reporting',
      features: allFeatures.slice(4, 6),
      description: 'GST compliance and financial reporting tools'
    },
    {
      title: 'Collaboration & Support',
      features: allFeatures.slice(6, 10),
      description: 'Team collaboration and intelligent assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Complete Financial Automation Suite
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover all 10 high-priority features designed to transform your financial operations 
              with AI-powered automation, seamless GST compliance, and intelligent insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="btn-primary text-lg px-8 py-4">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="text-lg px-8 py-4 border-gray-300 hover:border-accent hover:text-accent">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features by Category */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover-lift">
                    {/* Feature Header */}
                    <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                    
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mr-4`}>
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-xl text-primary mb-1">
                            {feature.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Benefits Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {feature.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={feature.link}>
                        <Button variant="outline" className="w-full group hover:bg-navy-50 hover:border-accent">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Feature Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
                Why Choose FinanceAI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare our comprehensive feature set with traditional solutions
              </p>
            </div>

            <div className="bg-navy-50 rounded-2xl p-8 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-4 font-heading font-semibold text-primary">Capability</th>
                      <th className="text-center py-4 font-heading font-semibold text-primary">Traditional Solutions</th>
                      <th className="text-center py-4 font-heading font-semibold text-accent">FinanceAI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { capability: 'OCR Accuracy', traditional: '70-80%', financeai: '99%' },
                      { capability: 'Multi-language Support', traditional: 'Limited', financeai: '15+ Languages' },
                      { capability: 'Real-time Processing', traditional: 'Batch Only', financeai: 'Real-time + Batch' },
                      { capability: 'GST Compliance', traditional: 'Manual', financeai: 'Automated' },
                      { capability: 'Offline Capability', traditional: '✗', financeai: '✓' },
                      { capability: 'AI-Powered Insights', traditional: '✗', financeai: '✓' },
                      { capability: 'Implementation Time', traditional: '3-6 months', financeai: '< 1 week' }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-white">
                        <td className="py-4 font-medium text-gray-900">{row.capability}</td>
                        <td className="py-4 text-center text-gray-600">{row.traditional}</td>
                        <td className="py-4 text-center font-semibold text-accent">{row.financeai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Ready to Experience All Features?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial and get access to all 10 high-priority features. 
              No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  View Dashboard Demo
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

export default Features;
