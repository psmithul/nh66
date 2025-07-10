'use client'

import React from 'react'
import { TrendingUp, Users, Award, Target, ArrowRight, Zap, Code, BarChart3 } from 'lucide-react'
import PerformanceChart from './PerformanceChart'

const Hero = () => {
  const stats = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      value: "₹3.2L",
      label: "Assets Under Management",
      sublabel: "180% Growth in Year 1",
      color: "text-finance-green"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "25+",
      label: "NITK Student Managers",
      sublabel: "Across 6 Departments",
      color: "text-finance-blue"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "18.7%",
      label: "Realized Returns",
      sublabel: "In Our First Year",
      color: "text-finance-green"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "87%",
      label: "Success Rate",
      sublabel: "47 Investment Decisions",
      color: "text-finance-blue"
    }
  ]

  const innovations = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Tech-Driven Alpha",
      description: "Python & ML algorithms for market analysis"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-Time Learning",
      description: "Live trading education for NITK students"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Data-First Approach",
      description: "Engineering mindset applied to finance"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-100/50 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-finance-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-finance-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-4 h-4 text-finance-green mr-2" />
              <span className="text-finance-green font-medium">NITK's Premier Student-Run Fund</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Where{' '}
              <span className="gradient-text">Engineering</span>
              <br />
              Meets{' '}
              <span className="gradient-text">Finance</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              NITK students building India's most innovative campus fund. 
              <span className="text-finance-green font-semibold"> ₹3.2 Lakh AUM</span> and growing, 
              powered by engineering excellence and financial acumen.
            </p>

            {/* Innovation Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {innovations.map((item, index) => (
                <div key={index} className="bg-dark-100/30 border border-white/10 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-finance-green mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-white/60 text-xs">{item.description}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary group">
                <span>Explore Our Journey</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                View Live Performance
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-white/60 text-sm mb-4">Trusted by NITK Community</div>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/40 text-xs">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>1 Year Strong</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  <span>6 Departments</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>47 Investments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Chart */}
          <div className="space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="metric-card group hover:scale-105 transition-transform duration-300">
                  <div className={`${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-medium text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-xs">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Chart */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Fund Performance</h3>
                <div className="text-finance-green text-sm font-medium">+18.7% YTD</div>
              </div>
              <PerformanceChart />
            </div>

            {/* Quick Stats Banner */}
            <div className="bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border border-finance-green/30 rounded-lg p-6">
              <div className="text-center">
                <div className="text-finance-green font-semibold mb-2">The NITK Advantage</div>
                <div className="text-white/80 text-sm leading-relaxed">
                  "Combining technical excellence with financial innovation - 
                  our engineering mindset delivers consistent alpha in volatile markets."
                </div>
                <div className="mt-4 flex justify-center space-x-6 text-xs text-white/60">
                  <span>• Data-Driven Decisions</span>
                  <span>• Risk-Managed Growth</span>
                  <span>• Student-First Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-finance-green/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-finance-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 