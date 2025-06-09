
import React from 'react';
import { Upload, Cpu, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload & Scan',
      description: 'Simply upload invoices or scan them using our mobile app. Our OCR technology works in multiple languages.',
      step: '01'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Our AI extracts data, validates GSTIN, matches HSN/SAC codes, and categorizes transactions automatically.',
      step: '02'
    },
    {
      icon: CheckCircle,
      title: 'Automated Compliance',
      description: 'Get automated GST reconciliation, bank matching, and one-click return filing with full compliance.',
      step: '03'
    }
  ];

  return (
    <section className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            How FinanceAI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your financial operations in three simple steps with our intelligent automation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-heading font-bold text-xl mb-6">
                {step.step}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6 mx-auto">
                <step.icon className="h-10 w-10 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-accent to-primary transform translate-x-8">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Ready to Automate Your Finance Operations?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already saving time and money with FinanceAI.
            </p>
            <button className="btn-primary inline-flex items-center">
              Start Your Free Trial
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
