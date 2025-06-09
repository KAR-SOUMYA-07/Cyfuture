
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const features = [
    { name: 'Mobile Scanner & OCR', href: '/features/mobile-scanner' },
    { name: 'HSN/SAC Lookup', href: '/features/hsn-lookup' },
    { name: 'Bank Reconciliation', href: '/features/bank-reconciliation' },
    { name: 'GST Reconciliation', href: '/features/gst-reconciliation' },
    { name: 'GST Return Filing', href: '/features/gst-filing' },
    { name: 'Cash Flow Forecasting', href: '/features/cash-flow' },
    { name: 'Offline Mode', href: '/features/offline-mode' },
    { name: 'Role-Based Access', href: '/features/role-access' },
    { name: 'E-Way Bill Generation', href: '/features/eway-bill' },
    { name: 'AI Chatbot', href: '/features/ai-chatbot' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-navy-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-heading font-bold text-xl text-primary">FinanceAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            
            {/* Features Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
                className="flex items-center font-medium text-gray-700 hover:text-accent transition-colors"
              >
                Features
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isFeaturesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                >
                  {features.map((feature) => (
                    <Link
                      key={feature.href}
                      to={feature.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className={`font-medium transition-colors hover:text-accent ${
                isActive('/pricing') ? 'text-accent' : 'text-gray-700'
              }`}
            >
              Pricing
            </Link>
            
            <Link 
              to="/dashboard" 
              className={`font-medium transition-colors hover:text-accent ${
                isActive('/dashboard') ? 'text-accent' : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700 hover:text-accent">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-primary">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-accent font-medium">
                Home
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-accent font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-accent font-medium">
                Pricing
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-accent font-medium">
                Dashboard
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Link to="/login">
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="btn-primary w-full">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
