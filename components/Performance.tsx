'use client'

import React, { useState } from 'react'
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react'
import PerformanceChart from './PerformanceChart'
import AllocationChart from './AllocationChart'

const Performance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12M')

  const periods = ['1M', '3M', '6M', '12M', '2Y', 'ALL']

  const keyMetrics = [
    {
      title: "YTD Return",
      value: "+25.0%",
      benchmark: "+12.5%",
      icon: <TrendingUp className="w-5 h-5" />,
      trend: "positive"
    },
    {
      title: "Volatility",
      value: "14.2%",
      benchmark: "16.8%",
      icon: <Activity className="w-5 h-5" />,
      trend: "positive"
    },
    {
      title: "Sharpe Ratio",
      value: "1.76",
      benchmark: "0.89",
      icon: <BarChart3 className="w-5 h-5" />,
      trend: "positive"
    },
    {
      title: "Max Drawdown",
      value: "-5.8%",
      benchmark: "-12.3%",
      icon: <PieChart className="w-5 h-5" />,
      trend: "positive"
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
    <section id="performance" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Performance <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive analysis of fund performance with real-time metrics and benchmark comparisons.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="flex items-center justify-between mb-3">
                <div className="text-finance-green">
                  {metric.icon}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  metric.trend === 'positive' ? 'bg-finance-green/20 text-finance-green' : 'bg-finance-red/20 text-finance-red'
                }`}>
                  vs Benchmark
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/60">
                    {metric.title}
                  </div>
                </div>
                
                <div className="text-xs text-white/50">
                  Benchmark: {metric.benchmark}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Performance Chart */}
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Fund vs Benchmark Performance</h3>
              <div className="flex space-x-2">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      selectedPeriod === period
                        ? 'bg-finance-green text-black'
                        : 'bg-dark-100/50 text-white/70 hover:bg-dark-100'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <PerformanceChart />
          </div>

          {/* Asset Allocation */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Asset Allocation</h3>
            <AllocationChart />
          </div>
        </div>

        {/* Monthly Returns Table */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-6">Monthly Returns (%)</h3>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>NH66 Fund</th>
                  <th>Benchmark</th>
                  <th>Outperformance</th>
                </tr>
              </thead>
              <tbody>
                {monthlyReturns.map((row, index) => {
                  const outperformance = row.return - row.benchmark
                  return (
                    <tr key={index}>
                      <td className="font-medium">{row.month}</td>
                      <td className={`font-medium ${
                        row.return > 0 ? 'text-finance-green' : 'text-finance-red'
                      }`}>
                        {row.return > 0 ? '+' : ''}{row.return.toFixed(1)}%
                      </td>
                      <td className={`${
                        row.benchmark > 0 ? 'text-finance-green' : 'text-finance-red'
                      }`}>
                        {row.benchmark > 0 ? '+' : ''}{row.benchmark.toFixed(1)}%
                      </td>
                      <td className={`font-medium ${
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
        </div>
      </div>
    </section>
  )
}

export default Performance 