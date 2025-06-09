
import React from 'react';
import { Link } from 'react-router-dom';
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
  MessageSquare 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: 'Mobile Scanner & Multilingual OCR',
      description: 'Scan invoices with 99% accuracy in multiple languages. AI-powered text extraction from any document format.',
      link: '/features/mobile-scanner',
      color: 'bg-blue-500'
    },
    {
      icon: Search,
      title: 'Auto-HSN/SAC Lookup & GSTIN Validation',
      description: 'Automatic HSN/SAC code detection and real-time GSTIN validation for accurate tax classification.',
      link: '/features/hsn-lookup',
      color: 'bg-green-500'
    },
    {
      icon: CreditCard,
      title: 'Automated Bank Reconciliation',
      description: 'Intelligent matching of bank transactions with invoices for seamless financial reconciliation.',
      link: '/features/bank-reconciliation',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'GST Reconciliation Assistant',
      description: 'AI-driven GST categorization and automated match reports for compliance and filing.',
      link: '/features/gst-reconciliation',
      color: 'bg-accent'
    },
    {
      icon: Calendar,
      title: 'One-Click GST Return Filing',
      description: 'Automated GST return preparation and filing with built-in compliance checks.',
      link: '/features/gst-filing',
      color: 'bg-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow Forecasting & Alerts',
      description: 'Predictive analytics for cash flow management with intelligent alerts and insights.',
      link: '/features/cash-flow',
      color: 'bg-cyan-500'
    },
    {
      icon: Wifi,
      title: 'Offline Mode & Seamless Sync',
      description: 'Work offline with PWA capabilities and automatic data synchronization when connected.',
      link: '/features/offline-mode',
      color: 'bg-indigo-500'
    },
    {
      icon: Users,
      title: 'Role-Based Access & Collaboration',
      description: 'Secure multi-user access with customizable permissions and team collaboration tools.',
      link: '/features/role-access',
      color: 'bg-pink-500'
    },
    {
      icon: Truck,
      title: 'E-Way Bill Auto-Generation',
      description: 'Automated E-Way bill creation and management dashboard for seamless logistics.',
      link: '/features/eway-bill',
      color: 'bg-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Multilingual Chatbot for Finance',
      description: 'AI-powered assistant for finance queries, compliance guidance, and operational support.',
      link: '/features/ai-chatbot',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Financial Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform offers everything you need to streamline financial operations, 
            ensure GST compliance, and enhance business efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              to={feature.link}
              className="group block"
            >
              <div className="feature-card h-full">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-accent font-medium text-sm group-hover:text-primary transition-colors">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/features">
            <button className="btn-accent inline-flex items-center">
              Explore All Features
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
