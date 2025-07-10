'use client'

import React from 'react'
import { TrendingUp, Users, Target, Award, BarChart3, Calendar, Clock, Zap, Brain, Shield, Globe, BookOpen, LineChart, Building } from 'lucide-react'

const About = () => {
  const journeyMilestones = [
    {
      quarter: "Q4 2023",
      title: "Foundation",
      description: "Founded NH66 Capital with ₹50K seed funding",
      achievement: "Established dual-division structure",
      color: "border-finance-blue/50 bg-finance-blue/5"
    },
    {
      quarter: "Q1 2024", 
      title: "Team Building",
      description: "Recruited 25+ top NITK students across disciplines",
      achievement: "Built Investment & Trading teams",
      color: "border-finance-green/50 bg-finance-green/5"
    },
    {
      quarter: "Q2 2024",
      title: "Market Entry",
      description: "Deployed systematic strategies in public markets",
      achievement: "First profitable quarter +12.3%",
      color: "border-finance-blue/50 bg-finance-blue/5"
    },
    {
      quarter: "Q3 2024",
      title: "Scale & Systems", 
      description: "Implemented institutional-grade risk management",
      achievement: "AUM growth to ₹2.1L",
      color: "border-finance-green/50 bg-finance-green/5"
    },
    {
      quarter: "Q4 2024",
      title: "Alpha Generation",
      description: "Consistent outperformance across market cycles",
      achievement: "₹3.2L AUM, 18.7% net returns",
      color: "border-finance-blue/50 bg-finance-blue/5"
    }
  ]

  const impactMetrics = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      value: "₹3.2L",
      label: "Assets Under Management",
      growth: "+180% YoY",
      color: "text-finance-green"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "18.7%",
      label: "Net Alpha Generated",
      growth: "vs 6.2% benchmark",
      color: "text-finance-blue"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "25+",
      label: "Student Analysts",
      growth: "Across both divisions",
      color: "text-finance-green"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "87%",
      label: "Strategy Win Rate", 
      growth: "Institutional quality",
      color: "text-finance-blue"
    }
  ]

  const divisions = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Investment Division",
      subtitle: "Long-Term Value Creation",
      description: "Our Investment Division focuses on the long game through rigorous fundamental analysis and bottom-up research. We identify undervalued opportunities and hold positions for quarters to years, designed to compound value through patient, disciplined investing.",
      strategies: [
        "Deep fundamental analysis",
        "Bottom-up stock selection", 
        "Long-term value investing",
        "Sector rotation strategies"
      ],
      metrics: {
        horizon: "6-24 months",
        focus: "Quality & Growth",
        approach: "Research-driven"
      }
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Trading Division", 
      subtitle: "Short-Term Alpha Capture",
      description: "Fast-paced and chart-driven, our Trading Division lives and breathes technical analysis. This team identifies short-term market setups, executes swift trades, and masters risk management on the fly to capture alpha from market inefficiencies.",
      strategies: [
        "Technical pattern recognition",
        "Momentum trading",
        "Mean reversion strategies", 
        "Options & derivatives"
      ],
      metrics: {
        horizon: "Minutes to weeks",
        focus: "Momentum & Trends",
        approach: "Chart-driven"
      }
    }
  ]

  const nitk = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Analytical Mindset",
      description: "Engineering training provides systematic problem-solving and quantitative skills essential for market analysis."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Technical background ensures disciplined approach to position sizing and portfolio risk management."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "NITK's innovation culture drives us to develop proprietary tools and systematic trading strategies."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Institutional Aspiration",
      description: "We're building tomorrow's investment management leaders with institutional-quality processes today."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-dark-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <BookOpen className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What is{' '}
            <span className="gradient-text">NH66 Capital</span>?
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            NITK's first <span className="text-finance-green font-semibold">student-run capital management firm</span>, 
            focused on public markets. Where undergraduates roll up their sleeves and dive deep into the markets, 
            together - building institutional-quality investment processes while learning from every trade.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What We Do</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Two specialized divisions working in harmony to generate consistent alpha across market cycles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div key={index} className="card group hover:border-finance-green/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-finance-green mr-4 group-hover:scale-110 transition-transform duration-300">
                    {division.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{division.title}</h4>
                    <p className="text-finance-green text-sm">{division.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {division.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-white font-semibold mb-3">Core Strategies</h5>
                    <ul className="space-y-2">
                      {division.strategies.map((strategy, idx) => (
                        <li key={idx} className="text-white/70 text-sm flex items-center">
                          <div className="w-1 h-1 bg-finance-green rounded-full mr-3"></div>
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-dark-100/30 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-3">Division Metrics</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">Time Horizon:</span>
                        <span className="text-finance-green text-sm font-medium">{division.metrics.horizon}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">Focus:</span>
                        <span className="text-finance-green text-sm font-medium">{division.metrics.focus}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">Approach:</span>
                        <span className="text-finance-green text-sm font-medium">{division.metrics.approach}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Sessions */}
        <div className="mb-20">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30">
            <div className="text-center">
              <div className="text-finance-green mb-4">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Why NH66 Capital?</h3>
              <p className="text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
                Every weekday morning, we kick off with an <span className="text-finance-green font-semibold">open-floor market discussion</span> - 
                breaking down overnight news, sharing sector insights, and debating the biggest moves of the day. 
                It's hands-on learning where members present mini-case studies, lead chart reviews, and challenge each other's theses 
                so we all sharpen our analytical skills and market instincts.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-dark-100/30 rounded-lg p-4">
                  <Clock className="w-6 h-6 text-finance-green mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">Daily Sessions</div>
                  <div className="text-white/60 text-xs">Morning market discussions</div>
                </div>
                <div className="bg-dark-100/30 rounded-lg p-4">
                  <Brain className="w-6 h-6 text-finance-green mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">Case Studies</div>
                  <div className="text-white/60 text-xs">Member-led analysis</div>
                </div>
                <div className="bg-dark-100/30 rounded-lg p-4">
                  <Target className="w-6 h-6 text-finance-green mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">Peer Learning</div>
                  <div className="text-white/60 text-xs">Challenge each other's theses</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* One Year Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Journey to Alpha</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              From ₹50K seed funding to ₹3.2L AUM in 12 months - building institutional quality with student innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-finance-green to-finance-blue opacity-30"></div>
            
            <div className="space-y-8">
              {journeyMilestones.map((milestone, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-1/2' : 'lg:text-left lg:pl-1/2'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-finance-green rounded-full border-4 border-black z-10"></div>
                  
                  <div className={`card ${milestone.color} border max-w-md ${index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'}`}>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-finance-green text-sm font-medium">{milestone.quarter}</span>
                      <span className="text-white/60 text-xs">{index + 1}/5</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-white/80 text-sm mb-3">{milestone.description}</p>
                    <div className="text-finance-green text-sm font-medium">{milestone.achievement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Impact Metrics</h3>
            <p className="text-white/70">
              Institutional-quality results powered by student innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="metric-card group hover:scale-105 transition-transform duration-300">
                <div className={`${metric.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {metric.icon}
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-white font-medium text-sm mb-2">
                  {metric.label}
                </div>
                <div className="text-white/60 text-xs">
                  {metric.growth}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NITK Advantage */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">The NITK Advantage</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our engineering foundation provides unique advantages in systematic investing and risk management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nitk.map((advantage, index) => (
              <div key={index} className="card group hover:border-finance-green/50 transition-all duration-300">
                <div className="text-finance-green mb-4 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{advantage.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-4xl mx-auto">
            <Zap className="w-8 h-8 text-finance-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              "To build India's most innovative student capital management firm - where rigorous analysis meets bold execution, 
              and every trade is a step toward institutional excellence. We dream of the day when NH66 Capital stands alongside 
              the world's premier investment management firms."
            </p>
            <div className="flex justify-center space-x-8 text-sm text-white/60">
              <span>• World-Class Standards</span>
              <span>• Student Innovation</span>
              <span>• Market Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 