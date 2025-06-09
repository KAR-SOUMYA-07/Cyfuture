
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Branding (Hidden on mobile) */}
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
              Welcome back to your
              <span className="block text-accent">Financial Command Center</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access your automated finance dashboard, manage GST compliance, 
              and streamline operations with AI-powered insights.
            </p>

            {/* Features Preview */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time financial analytics</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Automated invoice processing</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Seamless GST compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form */}
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
                Sign In
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Enter your credentials to access your dashboard
              </p>
            </CardHeader>
            
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your email"
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
                      placeholder="Enter your password"
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-accent focus:ring-accent" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-accent hover:text-accent/80">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full h-12 btn-primary text-lg">
                  Sign In
                </Button>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-accent hover:text-accent/80 font-medium">
                      Sign up for free
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by 1000+ businesses worldwide
            </p>
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">256-bit SSL</div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">SOC 2</div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">GDPR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
