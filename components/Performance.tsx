'use client'

import React, { useState } from 'react'
import { TrendingUp, BarChart3, PieChart, Activity, Calendar, Award, Target } from 'lucide-react'
import PerformanceChart from './PerformanceChart'
import AllocationChart from './AllocationChart'

const Performance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12M')

  const periods = [
    { key: '1M', label: '1 Month' },
    { key: '3M', label: '3 Months' },
    { key: '6M', label: '6 Months' },
    { key: '12M', label: '1 Year' },
    { key: '2Y', label: '2 Years' },
    { key: 'ALL', label: 'All Time' }
  ]

  const keyMetrics = [
    {
      title: "Net Alpha",
      value: "+18.7%",
      benchmark: "+6.2%",
      icon: <TrendingUp className="w-5 h-5" />,
      trend: "positive",
      description: "Outperformance vs benchmark"
    },
    {
      title: "Volatility",
      value: "12.8%",
      benchmark: "16.8%",
      icon: <Activity className="w-5 h-5" />,
      trend: "positive",
      description: "Risk-adjusted returns"
    },
    {
      title: "Sharpe Ratio",
      value: "1.89",
      benchmark: "0.89",
      icon: <BarChart3 className="w-5 h-5" />,
      trend: "positive",
      description: "Risk-reward efficiency"
    },
    {
      title: "Max Drawdown",
      value: "-4.2%",
      benchmark: "-12.3%",
      icon: <Target className="w-5 h-5" />,
      trend: "positive",
      description: "Capital preservation"
    }
  ]

  const monthlyReturns = [
    { month: 'Jan', return: 3.2, benchmark: 1.8 },
    { month: 'Feb', return: 4.1, benchmark: 1.7 },
    { month: 'Mar', return: -1.3, benchmark: -0.6 },
    { month: 'Apr', return: 2.6, benchmark: 2.4 },
    { month: 'May', return: 1.9, benchmark: 1.3 },
    { month: 'Jun', return: 3.3, benchmark: 1.7 },
    { month: 'Jul', return: -2.4, benchmark: -1.6 },
    { month: 'Aug', return: 4.3, benchmark: 2.7 },
    { month: 'Sep', return: 3.6, benchmark: 1.4 },
    { month: 'Oct', return: -1.4, benchmark: -0.6 },
    { month: 'Nov', return: 4.6, benchmark: 2.5 },
    { month: 'Dec', return: 3.6, benchmark: 1.3 },
  ]

  return (
    <section id="performance" className="py-16 sm:py-20 bg-gradient-to-b from-black to-dark-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <Award className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Performance Analytics</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Alpha <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real-time performance metrics, risk analytics, and institutional-quality reporting 
            from our <span className="text-finance-green font-semibold">dual-division</span> investment approach.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="metric-card group hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-finance-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`text-finance-green group-hover:scale-110 transition-transform duration-300 ${
                    metric.trend === 'positive' ? 'animate-pulse-glow' : ''
                  }`}>
                    {metric.icon}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    metric.trend === 'positive' ? 'bg-finance-green/20 text-finance-green' : 'bg-finance-red/20 text-finance-red'
                  }`}>
                    {metric.trend === 'positive' ? 'Outperforming' : 'Underperforming'}
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-finance-green transition-colors duration-300">
                      {metric.value}
                    </div>
                    <div className="text-sm sm:text-base text-white/80 font-medium">
                      {metric.title}
                    </div>
                    <div className="text-xs text-white/50">
                      {metric.description}
                    </div>
                  </div>
                  
                  <div className="text-xs text-white/40 border-t border-white/10 pt-2">
                    Benchmark: <span className="text-white/60 font-medium">{metric.benchmark}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Performance Chart */}
          <div className="lg:col-span-2 card">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Performance vs Benchmark</h3>
                <p className="text-sm text-white/60">NH66 Capital outperformance analysis</p>
              </div>
              
              {/* Period selector - responsive */}
              <div className="w-full sm:w-auto">
                <div className="hidden sm:flex space-x-1">
                  {periods.map((period) => (
                    <button
                      key={period.key}
                      onClick={() => setSelectedPeriod(period.key)}
                      className={`px-3 py-2 text-sm rounded-lg transition-all duration-300 font-medium ${
                        selectedPeriod === period.key
                          ? 'bg-finance-green text-black shadow-lg shadow-finance-green/25'
                          : 'bg-dark-100/50 text-white/70 hover:bg-dark-100 hover:text-white'
                      }`}
                    >
                      {period.key}
                    </button>
                  ))}
                </div>
                
                {/* Mobile dropdown */}
                <div className="sm:hidden">
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full bg-dark-100/50 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:border-finance-green/50 focus:outline-none"
                  >
                    {periods.map((period) => (
                      <option key={period.key} value={period.key} className="bg-dark-100">
                        {period.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="h-64 sm:h-80">
              <PerformanceChart />
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <PieChart className="w-5 h-5 text-finance-green" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Portfolio Allocation</h3>
            </div>
            <div className="h-64">
              <AllocationChart />
            </div>
            <div className="mt-4 text-xs text-white/50 text-center">
              Dynamic allocation across sectors
            </div>
          </div>
        </div>

        {/* Monthly Returns Table */}
        <div className="card">
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="w-5 h-5 text-finance-green" />
            <h3 className="text-lg sm:text-xl font-semibold text-white">Monthly Performance (%)</h3>
          </div>
          
          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="text-left">Month</th>
                  <th className="text-right">NH66 Capital</th>
                  <th className="text-right">Benchmark</th>
                  <th className="text-right">Alpha Generated</th>
                </tr>
              </thead>
              <tbody>
                {monthlyReturns.map((row, index) => {
                  const outperformance = row.return - row.benchmark
                  return (
                    <tr key={index} className="hover:bg-dark-100/20 transition-colors duration-200">
                      <td className="font-medium text-white">{row.month} 2024</td>
                      <td className={`font-bold text-right ${
                        row.return > 0 ? 'text-finance-green' : 'text-finance-red'
                      }`}>
                        {row.return > 0 ? '+' : ''}{row.return.toFixed(1)}%
                      </td>
                      <td className={`text-right ${
                        row.benchmark > 0 ? 'text-white/80' : 'text-finance-red/80'
                      }`}>
                        {row.benchmark > 0 ? '+' : ''}{row.benchmark.toFixed(1)}%
                      </td>
                      <td className={`font-bold text-right ${
                        outperformance > 0 ? 'text-finance-green' : 'text-finance-red'
                      }`}>
                        {outperformance > 0 ? '+' : ''}{outperformance.toFixed(1)}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {monthlyReturns.slice(-6).map((row, index) => {
              const outperformance = row.return - row.benchmark
              return (
                <div key={index} className="bg-dark-100/30 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{row.month} 2024</span>
                    <span className={`font-bold ${
                      outperformance > 0 ? 'text-finance-green' : 'text-finance-red'
                    }`}>
                      {outperformance > 0 ? '+' : ''}{outperformance.toFixed(1)}% Alpha
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-white/60">NH66 Capital</div>
                      <div className={`font-medium ${
                        row.return > 0 ? 'text-finance-green' : 'text-finance-red'
                      }`}>
                        {row.return > 0 ? '+' : ''}{row.return.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-white/60">Benchmark</div>
                      <div className="text-white/80">
                        {row.benchmark > 0 ? '+' : ''}{row.benchmark.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="text-center mt-4">
              <button className="text-finance-green text-sm font-medium hover:text-finance-green/80 transition-colors">
                View All Months →
              </button>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-2xl mx-auto">
            <Award className="w-8 h-8 text-finance-green mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Institutional-Quality Results</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Our dual-division approach has generated consistent alpha across market cycles, 
              delivering <span className="text-finance-green font-semibold">18.7% net outperformance</span> while 
              maintaining lower volatility than benchmark indices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Download Performance Report
              </button>
              <button className="btn-secondary">
                Schedule Investor Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance 