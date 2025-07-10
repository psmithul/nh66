'use client'

import React, { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const MarketTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const marketData = [
    { symbol: 'NIFTY 50', price: '21,456.30', change: '+1.23%', value: '+259.45', isPositive: true },
    { symbol: 'SENSEX', price: '71,842.50', change: '+0.87%', value: '+621.30', isPositive: true },
    { symbol: 'BANKNIFTY', price: '46,789.20', change: '-0.45%', value: '-212.10', isPositive: false },
    { symbol: 'NIFTY IT', price: '32,145.80', change: '+2.14%', value: '+675.20', isPositive: true },
    { symbol: 'NIFTY AUTO', price: '18,567.40', change: '+0.92%', value: '+168.45', isPositive: true },
    { symbol: 'NIFTY PHARMA', price: '15,234.60', change: '-1.25%', value: '-192.80', isPositive: false },
    { symbol: 'NIFTY FMCG', price: '54,321.90', change: '+0.67%', value: '+361.25', isPositive: true },
    { symbol: 'NIFTY METAL', price: '7,890.50', change: '+3.45%', value: '+263.70', isPositive: true },
  ]

  return (
    <section className="bg-dark-50/30 border-y border-dark-200/30 py-4 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Market Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-finance-green rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Market Open</span>
            </div>
            <div className="text-sm text-white/60">
              Last Updated: {currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
          <div className="text-sm text-white/60">
            Real-time data delayed by 15 minutes
          </div>
        </div>

        {/* Ticker */}
        <div className="relative">
          <div className="flex animate-ticker space-x-8">
            {/* Duplicate the array to create seamless loop */}
            {[...marketData, ...marketData].map((item, index) => (
              <div key={index} className="ticker-item min-w-fit">
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {item.symbol}
                    </div>
                    <div className="text-xs text-white/60">
                      ₹{item.price}
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    item.isPositive ? 'text-finance-green' : 'text-finance-red'
                  }`}>
                    {item.isPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <div className="text-sm font-medium">
                      {item.change}
                    </div>
                  </div>
                  <div className={`text-xs ${
                    item.isPositive ? 'text-finance-green' : 'text-finance-red'
                  }`}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketTicker 