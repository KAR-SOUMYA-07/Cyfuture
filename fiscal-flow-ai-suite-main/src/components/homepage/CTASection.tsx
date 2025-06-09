
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    '14-day free trial',
    'No setup fees',
    'Cancel anytime',
    '24/7 support',
    'Migration assistance',
    'Training included'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-primary to-navy-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block text-accent">Financial Operations?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses automating their finance workflows with AI. 
            Start processing invoices 10x faster today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6">
              Everything you need to get started:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h4 className="font-heading font-semibold text-lg mb-2">
                Special Launch Offer
              </h4>
              <p className="text-gray-200 text-sm">
                Get 3 months free when you upgrade to our Pro plan during your trial. 
                Limited time offer for new customers.
              </p>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="text-center lg:text-left">
            <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Start Your Free Trial
                </h3>
                <p className="text-gray-600">
                  No credit card required. Full access to all features.
                </p>
              </div>

              <div className="space-y-4">
                <Link to="/signup" className="block">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>

                <Link to="/demo" className="block">
                  <button className="w-full border border-gray-300 hover:border-accent text-gray-700 hover:text-accent py-4 px-6 rounded-lg font-semibold transition-colors">
                    Schedule a Demo
                  </button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  Trusted by 1000+ businesses worldwide
                </p>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Join them today</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-300 mb-4">
            Enterprise-grade security and compliance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xs font-medium bg-white/10 px-3 py-1 rounded">ISO 27001</div>
            <div className="text-xs font-medium bg-white/10 px-3 py-1 rounded">SOC 2</div>
            <div className="text-xs font-medium bg-white/10 px-3 py-1 rounded">GDPR</div>
            <div className="text-xs font-medium bg-white/10 px-3 py-1 rounded">256-bit SSL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
