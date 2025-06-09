
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      position: 'Finance Director',
      company: 'TechnoWave Solutions',
      content: 'FinanceAI has revolutionized our invoice processing. We\'ve reduced manual work by 85% and our GST compliance is now seamless. The OCR accuracy is incredible!',
      rating: 5,
      image: '/placeholder.svg'
    },
    {
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'ModernRetail Ltd',
      content: 'The automated bank reconciliation feature alone has saved us 20 hours per week. The multilingual support helped us expand to regional markets effortlessly.',
      rating: 5,
      image: '/placeholder.svg'
    },
    {
      name: 'Anita Desai',
      position: 'CFO',
      company: 'GreenEnergy Corp',
      content: 'Cash flow forecasting with AI has given us unprecedented visibility into our finances. The offline mode ensures we never miss critical deadlines.',
      rating: 5,
      image: '/placeholder.svg'
    }
  ];

  const stats = [
    { value: '10x', label: 'Faster Processing' },
    { value: '99%', label: 'OCR Accuracy' },
    { value: '85%', label: 'Time Saved' },
    { value: '1000+', label: 'Happy Clients' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            Trusted by Finance Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses are transforming their financial operations with FinanceAI.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-50 rounded-xl p-6 border border-gray-200 hover-lift">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="font-heading font-semibold text-2xl mb-4">
              Join the Finance Revolution
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Experience the power of AI-driven financial automation. Start your free trial today and 
              see why thousands of businesses choose FinanceAI.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Free Trial - No Credit Card Required
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
