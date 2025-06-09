
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', formData);
    // Handle signup logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    '14-day free trial with full access',
    'No credit card required to start',
    'Process unlimited invoices during trial',
    'Full customer support included',
    'Cancel anytime, no commitments'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Benefits (Hidden on mobile) */}
        <div className="hidden lg:block">
          <div className="text-center lg:text-left">
            <Link to="/" className="inline-flex items-center space-x-2 mb-8">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-12 h-12 gradient-navy-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <span className="font-heading font-bold text-3xl text-primary">FinanceAI</span>
            </div>
            
            <h1 className="font-heading text-4xl font-bold text-primary mb-4">
              Start your
              <span className="block text-accent">Financial Automation Journey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of businesses already saving time and money with 
              AI-powered financial operations and seamless GST compliance.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                Trusted by Industry Leaders
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">99%</div>
                  <div className="text-sm text-gray-600">OCR Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">10x</div>
                  <div className="text-sm text-gray-600">Faster Processing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Signup Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Back to Home</span>
            </Link>
            
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-navy-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">FinanceAI</span>
            </div>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-heading text-2xl font-bold text-primary">
                Create Your Account
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Start your 14-day free trial today
              </p>
            </CardHeader>
            
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="h-12"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-1 rounded border-gray-300 text-accent focus:ring-accent" 
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-accent hover:text-accent/80">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-accent hover:text-accent/80">Privacy Policy</Link>
                  </span>
                </div>

                <Button type="submit" className="w-full h-12 btn-primary text-lg">
                  Start Free Trial
                </Button>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-accent hover:text-accent/80 font-medium">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Security Badges */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-4">
              Your data is secure with enterprise-grade protection
            </p>
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">256-bit SSL</div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">SOC 2</div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">GDPR</div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
