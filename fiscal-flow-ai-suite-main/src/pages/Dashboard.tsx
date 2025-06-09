import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InvoiceUpload } from '@/components/InvoiceUpload';
import { 
  TrendingUp, 
  FileText, 
  Calendar, 
  Users, 
  Camera, 
  CreditCard,
  Truck,
  WifiOff,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const summaryCards = [
    {
      title: 'Total Processed',
      value: '₹12.4L',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Invoices Scanned',
      value: '1,247',
      change: '+8.2%',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'GST Saved',
      value: '₹45.2K',
      change: '+15.3%',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      title: 'Active Users',
      value: '24',
      change: '+2',
      icon: Users,
      color: 'text-cyan-600'
    }
  ];

  const recentTransactions = [
    { id: 'INV-001', vendor: 'TechCorp Solutions', amount: '₹1,25,000', status: 'Processed', date: '2024-01-15' },
    { id: 'INV-002', vendor: 'ModernRetail Ltd', amount: '₹85,450', status: 'Pending', date: '2024-01-15' },
    { id: 'INV-003', vendor: 'GreenEnergy Corp', amount: '₹2,15,800', status: 'Processed', date: '2024-01-14' },
    { id: 'INV-004', vendor: 'DataFlow Systems', amount: '₹95,200', status: 'Review', date: '2024-01-14' },
    { id: 'INV-005', vendor: 'CloudTech Inc', amount: '₹1,75,000', status: 'Processed', date: '2024-01-13' }
  ];

  const quickActions = [
    { title: 'Scan Invoice', icon: Camera, description: 'Upload and scan new invoices', action: '/scan' },
    { title: 'Bank Reconciliation', icon: CreditCard, description: 'Match bank transactions', action: '/reconcile' },
    { title: 'GST Returns', icon: Calendar, description: 'File GST returns', action: '/gst-filing' },
    { title: 'E-Way Bills', icon: Truck, description: 'Generate E-Way bills', action: '/eway-bills' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-primary mb-2">
              Finance Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's your financial overview for today.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            {/* Offline Indicator */}
            <div className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Online & Synced</span>
            </div>
            
            {/* Period Selector */}
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                    <p className="text-2xl font-bold text-primary">{card.value}</p>
                    <p className={`text-sm ${card.color} font-medium`}>{card.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cash Flow Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Cash Flow Forecast</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-navy-50 to-cyan-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-gray-600">Interactive cash flow chart would be displayed here</p>
                    <p className="text-sm text-gray-500 mt-2">Showing projected cash flow for next 90 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Invoice ID</th>
                        <th className="text-left py-2">Vendor</th>
                        <th className="text-left py-2">Amount</th>
                        <th className="text-left py-2">Status</th>
                        <th className="text-left py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 font-medium text-primary">{transaction.id}</td>
                          <td className="py-3">{transaction.vendor}</td>
                          <td className="py-3 font-semibold">{transaction.amount}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'Processed' 
                                ? 'bg-green-100 text-green-700'
                                : transaction.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="py-3 text-gray-600">{transaction.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Upload Invoice</h3>
                    <InvoiceUpload />
                  </div>
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.location.href = action.action}
                    >
                      <action.icon className="mr-2 h-4 w-4" />
                      <div className="text-left">
                        <div className="font-medium">{action.title}</div>
                        <div className="text-sm text-gray-500">{action.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* E-Way Bill Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-accent" />
                  E-Way Bills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className="text-sm font-medium text-yellow-700">3 Pending</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Generate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-700">24 Active</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">OCR Service</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-xs text-green-600">Operational</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GST API</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-xs text-green-600">Connected</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bank Integration</span>
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-xs text-yellow-600">Sync Pending</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Offline Mode</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-xs text-green-600">Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Dashboard;
