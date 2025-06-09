
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-heading font-bold text-xl">FinanceAI</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing financial operations with AI-powered automation, 
              smart reconciliation, and seamless GST compliance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features/mobile-scanner" className="text-gray-300 hover:text-accent transition-colors">Mobile Scanner & OCR</Link></li>
              <li><Link to="/features/gst-reconciliation" className="text-gray-300 hover:text-accent transition-colors">GST Reconciliation</Link></li>
              <li><Link to="/features/bank-reconciliation" className="text-gray-300 hover:text-accent transition-colors">Bank Reconciliation</Link></li>
              <li><Link to="/features/cash-flow" className="text-gray-300 hover:text-accent transition-colors">Cash Flow Forecasting</Link></li>
              <li><Link to="/features/offline-mode" className="text-gray-300 hover:text-accent transition-colors">Offline Mode</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 FinanceAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
