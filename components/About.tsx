'use client'

import React from 'react'
import { Target, Eye, Award, Users, TrendingUp, Shield, BookOpen, Lightbulb, Globe, Zap } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn by Doing",
      description: "Hands-on financial education where NITK students manage real capital and gain practical experience."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Leveraging engineering mindset to develop cutting-edge investment strategies and fintech solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Growth",
      description: "Multi-year collaboration where seniors mentor juniors, creating a sustainable knowledge ecosystem."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tech-Driven Alpha",
      description: "Using Python, ML models, and data analytics to identify market opportunities and optimize portfolios."
    }
  ]

  const achievements = [
    { metric: "₹3.2 Lakh", label: "Assets Under Management", sublabel: "Growing 180% YoY", trend: "+180%" },
    { metric: "25+", label: "Active Student Managers", sublabel: "Across all NITK years", trend: "B.Tech 1st-4th + Alumni" },
    { metric: "18.7%", label: "Realized Returns", sublabel: "In our first year", trend: "+18.7%" },
    { metric: "47", label: "Investment Decisions", sublabel: "Data-driven analysis", trend: "87% Success Rate" },
  ]

  const milestones = [
    {
      month: "Dec 2023",
      title: "Fund Inception",
      description: "Started with ₹50k from founding NITK students",
      value: "₹50k"
    },
    {
      month: "Mar 2024", 
      title: "First Major Win",
      description: "Tech sector investments yield 28% returns",
      value: "₹1.2L"
    },
    {
      month: "Jun 2024",
      title: "Team Expansion",
      description: "Onboarded juniors across departments",
      value: "₹2.1L"
    },
    {
      month: "Dec 2024",
      title: "Current Status",
      description: "Established campus-wide recognition",
      value: "₹3.2L"
    }
  ]

  return (
    <section id="about" className="py-20 bg-dark-50/20">
      <div className="container mx-auto px-6">
        {/* Header with Impact Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-2 mb-6">
            <Globe className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium text-sm">From NITK Campus to Market Leaders</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where <span className="gradient-text">Engineering Meets Finance</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            In just one year, NITK students have built India's most innovative campus fund - combining 
            technical expertise with financial acumen to deliver exceptional returns and real-world learning.
          </p>
        </div>

        {/* One Year Journey */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-finance-green">One Year Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-finance-green via-finance-green/50 to-transparent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="card hover:scale-105 transition-transform duration-300">
                      <div className="text-finance-green font-semibold mb-2">{milestone.month}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                      <p className="text-white/70 mb-3">{milestone.description}</p>
                      <div className="text-2xl font-bold text-finance-green">{milestone.value}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-finance-green rounded-full border-4 border-black"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => (
            <div key={index} className="metric-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-finance-green mb-2">
                {item.metric}
              </div>
              <div className="text-white font-medium mb-1">
                {item.label}
              </div>
              <div className="text-sm text-white/60 mb-2">
                {item.sublabel}
              </div>
              <div className="text-xs bg-finance-green/20 text-finance-green px-2 py-1 rounded-full">
                {item.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision with NITK Focus */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-finance-green mr-3" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              To create India's premier student-managed investment fund where NITK's brightest engineering minds 
              learn practical finance, develop market expertise, and generate sustainable returns through 
              data-driven investment strategies.
            </p>
            <p className="text-white/80 leading-relaxed">
              We bridge the gap between theoretical knowledge and real-world application, empowering students 
              to become tomorrow's fintech leaders while delivering consistent value to our investor community.
            </p>
          </div>

          <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-finance-green mr-3" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              To become the blueprint for student-led financial innovation across Indian technical institutions, 
              setting new standards for campus-based investment management and experiential learning.
            </p>
            <p className="text-white/80 leading-relaxed">
              We envision a future where every engineering student has access to practical finance education 
              and the opportunity to contribute to India's financial ecosystem while still in college.
            </p>
          </div>
        </div>

        {/* The NITK Advantage */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            The <span className="text-finance-green">NITK Advantage</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4 text-finance-green group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h4>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We Started */}
        <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30">
          <div className="text-center">
            <Award className="w-12 h-12 text-finance-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Why We Started NH66 Fund</h3>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
              "As engineering students, we saw a gap between our technical skills and financial literacy. 
              We created NH66 Fund not just to generate returns, but to build a learning ecosystem where 
              NITK students can gain practical finance experience while contributing to their own financial future."
            </p>
            <div className="text-sm text-finance-green font-medium">
              - Founding Team, NH66 Fund
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 