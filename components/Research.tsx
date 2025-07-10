'use client'

import React, { useState } from 'react'
import { TrendingUp, Clock, User, ArrowRight, Filter, Search, ChevronDown, LineChart, BarChart3, Target, Calendar, Eye } from 'lucide-react'

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDivision, setSelectedDivision] = useState('All')

  const categories = ['All', 'Market Analysis', 'Stock Research', 'Technical Analysis', 'Strategy Updates', 'Risk Management', 'Alpha Generation']
  const divisions = ['All', 'Investment Division', 'Trading Division', 'Risk Management']

  const researchPosts = [
    {
      id: 1,
      title: "Q4 2024 Investment Thesis: Banking Sector Deep Dive",
      excerpt: "Our Investment Division's comprehensive analysis of the banking sector reveals compelling opportunities in private banks. With credit growth normalizing and NIM expansion, we see 20%+ upside in our top picks.",
      category: "Stock Research",
      division: "Investment Division",
      author: "Arjun Shetty",
      role: "Senior Investment Analyst, CS 4th Year",
      readTime: "12 min read",
      date: "2024-12-15",
      tags: ["Banking", "Fundamental Analysis", "Long-term"],
      featured: true
    },
    {
      id: 2,
      title: "Technical Breakout Alert: IT Majors Setting Up for Rally",
      excerpt: "Multiple technical indicators suggest IT stocks are poised for a significant breakout. Our Trading Division identifies key levels and momentum signals for short-term alpha capture.",
      category: "Technical Analysis", 
      division: "Trading Division",
      author: "Priya Nair",
      role: "Lead Technical Analyst, ECE 3rd Year",
      readTime: "8 min read",
      date: "2024-12-10",
      tags: ["IT", "Technical Analysis", "Momentum"],
      featured: true
    },
    {
      id: 3,
      title: "Risk-Adjusted Returns: Portfolio Optimization Framework",
      excerpt: "How we rebuilt our risk management system to achieve better Sharpe ratios. A deep dive into our proprietary risk scoring methodology and position sizing algorithm.",
      category: "Risk Management",
      division: "Risk Management", 
      author: "Vikram Reddy",
      role: "Risk Management Head, Mech 4th Year",
      readTime: "15 min read",
      date: "2024-12-05",
      tags: ["Risk Management", "Portfolio Theory", "Quantitative"],
      featured: false
    },
    {
      id: 4,
      title: "NH66 Capital Monthly: December Alpha Report",
      excerpt: "Our December performance review highlights key wins from both divisions. Investment Division's pharma picks delivered 18% returns while Trading Division captured ₹45k from IT sector momentum.",
      category: "Strategy Updates",
      division: "Investment Division",
      author: "Sneha Gupta", 
      role: "Portfolio Manager, CHE 3rd Year",
      readTime: "10 min read",
      date: "2024-12-01",
      tags: ["Performance", "Strategy", "Alpha Generation"],
      featured: false
    },
    {
      id: 5,
      title: "Market Volatility Strategies: How We Trade Fear",
      excerpt: "During market downturns, volatility becomes our friend. Our Trading Division's approach to capitalizing on fear-driven selloffs and bounce-back rallies.",
      category: "Market Analysis",
      division: "Trading Division",
      author: "Rahul Kumar",
      role: "Trading Specialist, EEE 2nd Year", 
      readTime: "7 min read",
      date: "2024-11-28",
      tags: ["Volatility", "Short-term", "Market Psychology"],
      featured: false
    },
    {
      id: 6,
      title: "Long-term Thesis: Green Energy Revolution in India",
      excerpt: "A 3-year investment thesis on India's renewable energy transformation. Our fundamental research identifies the key players positioned to benefit from government policy shifts and global ESG trends.",
      category: "Stock Research",
      division: "Investment Division",
      author: "Anisha Sharma",
      role: "ESG Research Lead, CVE 4th Year",
      readTime: "18 min read", 
      date: "2024-11-25",
      tags: ["ESG", "Long-term", "Energy", "Policy Analysis"],
      featured: false
    }
  ]

  const filteredPosts = researchPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesDivision = selectedDivision === 'All' || post.division === selectedDivision
    return matchesCategory && matchesDivision
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <section id="research" className="py-20 bg-dark-50/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <LineChart className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Market Intelligence</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Research</span> & Insights
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Deep-dive analysis from our <span className="text-finance-green font-semibold">Investment</span> and <span className="text-finance-blue font-semibold">Trading</span> divisions. 
            Institutional-quality research from NITK's brightest minds, covering everything from fundamental analysis to technical setups.
          </p>
        </div>

        {/* Division Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <BarChart3 className="w-8 h-8 text-finance-green mx-auto mb-3" />
            <div className="text-2xl font-bold text-finance-green mb-1">47</div>
            <div className="text-white font-medium text-sm mb-1">Research Reports</div>
            <div className="text-white/60 text-xs">Published this year</div>
          </div>
          <div className="card text-center">
            <Target className="w-8 h-8 text-finance-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-finance-blue mb-1">89%</div>
            <div className="text-white font-medium text-sm mb-1">Accuracy Rate</div>
            <div className="text-white/60 text-xs">On price targets</div>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-finance-green mx-auto mb-3" />
            <div className="text-2xl font-bold text-finance-green mb-1">₹2.3L</div>
            <div className="text-white font-medium text-sm mb-1">Alpha Generated</div>
            <div className="text-white/60 text-xs">From research calls</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm">Filter by:</span>
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-dark-100/50 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:border-finance-green/50 focus:outline-none appearance-none pr-8"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-white/60 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Division Filter */}
          <div className="relative">
            <select 
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
              className="bg-dark-100/50 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:border-finance-green/50 focus:outline-none appearance-none pr-8"
            >
              {divisions.map(division => (
                <option key={division} value={division}>{division}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-white/60 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 text-finance-green mr-3" />
              Featured Research
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="card group hover:scale-105 transition-all duration-300 border-finance-green/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.division === 'Investment Division' ? 'bg-finance-green/20 text-finance-green' :
                        post.division === 'Trading Division' ? 'bg-finance-blue/20 text-finance-blue' :
                        'bg-white/20 text-white'
                      }`}>
                        {post.division}
                      </div>
                      <span className="text-white/60 text-sm">{post.category}</span>
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-finance-green transition-colors duration-300">
                    {post.title}
                  </h4>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-dark-100/50 text-white/70 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-finance-green/20 rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-finance-green" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{post.author}</div>
                        <div className="text-white/60 text-xs">{post.role}</div>
                      </div>
                    </div>
                    
                    <button className="btn-primary-small group/btn">
                      Read More
                      <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Eye className="w-6 h-6 text-finance-blue mr-3" />
              Latest Research
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <div key={post.id} className="card group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.division === 'Investment Division' ? 'bg-finance-green/20 text-finance-green' :
                      post.division === 'Trading Division' ? 'bg-finance-blue/20 text-finance-blue' :
                      'bg-white/20 text-white'
                    }`}>
                      {post.division}
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-finance-green transition-colors duration-300">
                    {post.title}
                  </h4>

                  <p className="text-white/80 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-dark-100/50 text-white/70 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-white/60 text-xs py-1">+{post.tags.length - 2} more</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-finance-green/20 rounded-full flex items-center justify-center mr-2">
                        <User className="w-3 h-3 text-finance-green" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs">{post.author}</div>
                        <div className="text-white/60 text-xs">{post.date}</div>
                      </div>
                    </div>
                    
                    <button className="text-finance-green hover:text-finance-green/80 transition-colors text-sm font-medium">
                      Read →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-2xl mx-auto">
            <Calendar className="w-8 h-8 text-finance-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Research Team</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Passionate about markets? Want to contribute to institutional-quality research? 
              Both our Investment and Trading divisions are always looking for analytical minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Investment Division Application
              </button>
              <button className="btn-secondary">
                Trading Division Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research 