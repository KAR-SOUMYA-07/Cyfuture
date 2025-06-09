
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        'Mobile Scanner & OCR (100 invoices/month)',
        'Basic HSN/SAC Lookup',
        'Manual Bank Reconciliation',
        'GST Reconciliation Assistant',
        'Email Support',
        'Basic Dashboard',
        'Single User Access'
      ],
      notIncluded: [
        'Automated Bank Reconciliation',
        'One-Click GST Filing',
        'Cash Flow Forecasting',
        'Offline Mode',
        'Role-Based Access',
        'E-Way Bill Generation',
        'Priority Support'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 2999,
      annualPrice: 2399,
      features: [
        'Mobile Scanner & OCR (1000 invoices/month)',
        'Auto-HSN/SAC Lookup & GSTIN Validation',
        'Automated Bank Reconciliation',
        'Advanced GST Reconciliation',
        'One-Click GST Return Filing',
        'Cash Flow Forecasting & Alerts',
        'Basic Role-Based Access (5 users)',
        'E-Way Bill Auto-Generation',
        'Priority Email Support',
        'Advanced Dashboard & Analytics'
      ],
      notIncluded: [
        'Offline Mode & PWA',
        'Unlimited Users',
        'Advanced Collaboration Tools',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      buttonText: 'Start Free Trial',
      buttonVariant: 'default' as const
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: [
        'Unlimited Invoice Processing',
        'Complete Feature Suite',
        'Offline Mode & Seamless Sync (PWA)',
        'Unlimited Role-Based Access',
        'Advanced Collaboration Tools',
        'Multilingual AI Chatbot',
        'Custom Integrations & API Access',
        'Advanced Analytics & Reporting',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Custom Training & Onboarding',
        'SLA Guarantees'
      ],
      notIncluded: [],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'The 14-day free trial includes full access to all features in your selected plan. No credit card required to start.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at your next billing cycle.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security with 256-bit SSL encryption, SOC 2 compliance, and regular security audits.'
    },
    {
      question: 'Do you offer data migration assistance?',
      answer: 'Yes, our team provides free migration assistance to help you transfer data from your existing systems.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and UPI for Indian customers. Enterprise clients can also pay via purchase orders.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any plan. You only pay the monthly or annual subscription fee.'
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include a 14-day free trial 
              with full access to features.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`font-medium ${!isAnnual ? 'text-primary' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-accent' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-medium ${isAnnual ? 'text-primary' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                Save 20%
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${
                    plan.popular
                      ? 'border-accent shadow-2xl scale-105'
                      : 'border-gray-200 shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-white px-6 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      {typeof plan.monthlyPrice === 'number' ? (
                        <>
                          <span className="text-4xl font-heading font-bold text-primary">
                            ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-600 ml-2">/month</span>
                          {isAnnual && (
                            <div className="text-sm text-accent mt-1">
                              Billed annually
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-4xl font-heading font-bold text-primary">
                          {plan.monthlyPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start opacity-50">
                        <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={plan.buttonText === 'Contact Sales' ? '/contact' : '/signup'}
                    className="block"
                  >
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full py-3 ${
                        plan.popular 
                          ? 'bg-accent hover:bg-accent/90 text-white' 
                          : ''
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Detailed Feature Comparison
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-navy-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-primary">Features</th>
                      <th className="px-6 py-4 text-center font-heading font-semibold text-primary">Starter</th>
                      <th className="px-6 py-4 text-center font-heading font-semibold text-primary">Professional</th>
                      <th className="px-6 py-4 text-center font-heading font-semibold text-primary">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { feature: 'Mobile Scanner & OCR', starter: '100/month', pro: '1000/month', enterprise: 'Unlimited' },
                      { feature: 'HSN/SAC Lookup', starter: 'Basic', pro: 'Auto + Validation', enterprise: 'Advanced' },
                      { feature: 'Bank Reconciliation', starter: 'Manual', pro: 'Automated', enterprise: 'Advanced AI' },
                      { feature: 'GST Reconciliation', starter: '✓', pro: '✓', enterprise: '✓' },
                      { feature: 'One-Click GST Filing', starter: '✗', pro: '✓', enterprise: '✓' },
                      { feature: 'Cash Flow Forecasting', starter: '✗', pro: '✓', enterprise: 'Advanced AI' },
                      { feature: 'Offline Mode (PWA)', starter: '✗', pro: '✗', enterprise: '✓' },
                      { feature: 'Role-Based Access', starter: '✗', pro: '5 users', enterprise: 'Unlimited' },
                      { feature: 'E-Way Bill Generation', starter: '✗', pro: '✓', enterprise: '✓' },
                      { feature: 'AI Chatbot', starter: '✗', pro: 'Basic', enterprise: 'Multilingual' },
                      { feature: 'Support', starter: 'Email', pro: 'Priority Email', enterprise: '24/7 Dedicated' }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.starter}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.pro}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Pricing;
