'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const AllocationChart = () => {
  const allocationData = [
    { name: 'Technology', value: 35, color: '#00FF88' },
    { name: 'Financial Services', value: 25, color: '#3742FA' },
    { name: 'Healthcare', value: 15, color: '#FF6B6B' },
    { name: 'Consumer Goods', value: 12, color: '#4ECDC4' },
    { name: 'Energy', value: 8, color: '#45B7D1' },
    { name: 'Others', value: 5, color: '#96CEB4' }
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-50/90 backdrop-blur-sm border border-finance-green/30 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{payload[0].name}</p>
          <p className="text-finance-green">{payload[0].value}% of portfolio</p>
        </div>
      )
    }
    return null
  }

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="grid grid-cols-2 gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-xs text-white/70">{entry.value}</span>
            <span className="text-xs text-finance-green font-medium ml-auto">
              {allocationData.find(item => item.name === entry.value)?.value}%
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={allocationData}
            cx="50%"
            cy="45%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {allocationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AllocationChart 