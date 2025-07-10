'use client'

import React, { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react'

const MarketTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMarketOpen, setIsMarketOpen] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Simple market hours check (9:15 AM to 3:30 PM IST)
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const currentTimeMinutes = hours * 60 + minutes
      const marketOpen = 9 * 60 + 15 // 9:15 AM
      const marketClose = 15 * 60 + 30 // 3:30 PM
      setIsMarketOpen(currentTimeMinutes >= marketOpen && currentTimeMinutes <= marketClose)
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
    <section className="bg-gradient-to-r from-dark-50/40 to-dark-100/30 border-y border-dark-200/30 py-3 sm:py-4 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-finance-green/10 via-transparent to-finance-blue/10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Market Status Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                isMarketOpen ? 'bg-finance-green' : 'bg-red-500'
              }`}></div>
              <span className="text-xs sm:text-sm font-medium text-white">
                Market {isMarketOpen ? 'Open' : 'Closed'}
              </span>
              <Activity className={`w-3 h-3 sm:w-4 sm:h-4 ${
                isMarketOpen ? 'text-finance-green' : 'text-red-500'
              }`} />
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-white/60">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Last Updated:</span>
              <span>{currentTime.toLocaleTimeString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
              })} IST</span>
            </div>
          </div>
          <div className="text-xs text-white/50 hidden sm:block">
            Real-time data delayed by 15 minutes
          </div>
        </div>

        {/* Ticker Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-dark-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-dark-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Ticker content */}
          <div className="flex animate-ticker space-x-4 sm:space-x-6">
            {/* Triple the array for seamless infinite loop */}
            {[...marketData, ...marketData, ...marketData].map((item, index) => (
              <div key={`${item.symbol}-${index}`} className="ticker-item min-w-fit group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Symbol and Price */}
                  <div className="flex flex-col">
                    <div className="font-semibold text-white text-xs sm:text-sm group-hover:text-finance-green transition-colors duration-300">
                      {item.symbol}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/60">
                      ₹{item.price}
                    </div>
                  </div>
                  
                  {/* Change indicator */}
                  <div className={`flex items-center space-x-1 ${
                    item.isPositive ? 'text-finance-green' : 'text-finance-red'
                  }`}>
                    <div className={`p-1 rounded-full ${
                      item.isPositive ? 'bg-finance-green/20' : 'bg-finance-red/20'
                    }`}>
                      {item.isPositive ? (
                        <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3" />
                      ) : (
                        <TrendingDown className="w-2 h-2 sm:w-3 sm:h-3" />
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-medium">
                      {item.change}
                    </div>
                  </div>
                  
                  {/* Absolute change */}
                  <div className={`text-[10px] sm:text-xs font-medium ${
                    item.isPositive ? 'text-finance-green/80' : 'text-finance-red/80'
                  }`}>
                    {item.value}
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  item.isPositive ? 'border-finance-green/30' : 'border-finance-red/30'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile scroll indicator */}
        <div className="sm:hidden flex justify-center mt-2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-finance-green/50 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketTicker 