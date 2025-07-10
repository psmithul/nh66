'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

const PerformanceChart = () => {
  // Mock performance data for the last 12 months
  const performanceData = [
    { month: 'Jan', fundReturn: 100, benchmark: 100, date: '2024-01' },
    { month: 'Feb', fundReturn: 103.2, benchmark: 101.8, date: '2024-02' },
    { month: 'Mar', fundReturn: 107.1, benchmark: 103.5, date: '2024-03' },
    { month: 'Apr', fundReturn: 105.8, benchmark: 102.9, date: '2024-04' },
    { month: 'May', fundReturn: 109.4, benchmark: 105.1, date: '2024-05' },
    { month: 'Jun', fundReturn: 112.7, benchmark: 106.8, date: '2024-06' },
    { month: 'Jul', fundReturn: 110.3, benchmark: 105.2, date: '2024-07' },
    { month: 'Aug', fundReturn: 114.6, benchmark: 107.9, date: '2024-08' },
    { month: 'Sep', fundReturn: 118.2, benchmark: 109.3, date: '2024-09' },
    { month: 'Oct', fundReturn: 116.8, benchmark: 108.7, date: '2024-10' },
    { month: 'Nov', fundReturn: 121.4, benchmark: 111.2, date: '2024-11' },
    { month: 'Dec', fundReturn: 125.0, benchmark: 112.5, date: '2024-12' },
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-50/90 backdrop-blur-sm border border-finance-green/30 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{`${label} 2024`}</p>
          <p className="text-finance-green">
            {`NH66 Fund: ${payload[0].value.toFixed(1)}%`}
          </p>
          <p className="text-white/70">
            {`Benchmark: ${payload[1].value.toFixed(1)}%`}
          </p>
          <p className="text-xs text-white/50 mt-1">
            {`Outperformance: +${(payload[0].value - payload[1].value).toFixed(1)}%`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="fundGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="benchmarkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#3f3f46" 
            strokeOpacity={0.3}
          />
          
          <XAxis 
            dataKey="month" 
            stroke="#a1a1aa"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          
          <YAxis 
            stroke="#a1a1aa"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 2', 'dataMax + 2']}
            tickFormatter={(value) => `${value}%`}
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          <Area
            type="monotone"
            dataKey="benchmark"
            stroke="#ffffff"
            strokeWidth={2}
            fill="url(#benchmarkGradient)"
            strokeOpacity={0.7}
          />
          
          <Area
            type="monotone"
            dataKey="fundReturn"
            stroke="#00ff88"
            strokeWidth={3}
            fill="url(#fundGradient)"
            strokeOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart 