'use client'

import React, { useState } from 'react'
import { Search, Filter, Calendar, User, TrendingUp, BookOpen, Code, BarChart3 } from 'lucide-react'

const Research = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Equity Research', 'Technical Analysis', 'Quantitative', 'Crypto', 'ESG']
  
  const posts = [
    {
      id: 1,
      title: "Why Indian IT Stocks Are Engineering Student's Best Friend: A Technical Analysis",
      category: "Equity Research",
      author: "Arjun Shetty",
      authorRole: "4th Year CSE",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      excerpt: "As CSE students, we understand the tech landscape better than traditional analysts. Here's why TCS, Infosys, and HCL Tech are fundamentally undervalued from an engineering perspective.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Tech Stocks", "Fundamental Analysis", "Student Perspective"],
      engagement: { views: "2.3k", likes: "156", comments: "23" }
    },
    {
      id: 2,
      title: "Building a Python Trading Bot: From NITK Hostel to Live Markets",
      category: "Quantitative",
      author: "Priya Nayak",
      authorRole: "4th Year ECE", 
      date: "Dec 12, 2024",
      readTime: "12 min read",
      excerpt: "Step-by-step guide on how we built our automated trading system using Python, pandas, and real market APIs. Includes full code walkthrough and backtesting results.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      tags: ["Python", "Algorithmic Trading", "Open Source"],
      engagement: { views: "4.1k", likes: "287", comments: "45" }
    },
    {
      id: 3,
      title: "ESG Scoring Framework: How We Rate 500+ Indian Companies",
      category: "ESG",
      author: "Karthik Rao",
      authorRole: "3rd Year ME",
      date: "Dec 10, 2024", 
      readTime: "10 min read",
      excerpt: "Our engineering approach to sustainable investing: web scraping annual reports, NLP for sentiment analysis, and automated ESG scoring. Open source and transparent.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      tags: ["ESG", "Sustainability", "Data Science"],
      engagement: { views: "1.8k", likes: "134", comments: "19" }
    },
    {
      id: 4,
      title: "Crypto vs Traditional Assets: A Student Portfolio Perspective",
      category: "Crypto",
      author: "Sneha Bhat",
      authorRole: "2nd Year IT",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      excerpt: "Young investors have different risk appetites. Our analysis of why crypto deserves a place in student portfolios, backed by Modern Portfolio Theory and real data.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      tags: ["Cryptocurrency", "Portfolio Theory", "Risk Management"],
      engagement: { views: "3.2k", likes: "201", comments: "67" }
    },
    {
      id: 5,
      title: "Social Sentiment Analysis: Predicting Stock Moves with Twitter Data",
      category: "Technical Analysis",
      author: "Ananya Kulkarni", 
      authorRole: "1st Year CSE",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      excerpt: "Gen Z approach to market analysis: Using Twitter sentiment, Reddit discussions, and social media trends to predict short-term price movements. 87% accuracy achieved.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      tags: ["Social Media", "Alternative Data", "Machine Learning"],
      engagement: { views: "2.7k", likes: "189", comments: "34" }
    },
    {
      id: 6,
      title: "Campus Fund vs Mutual Funds: Performance Comparison After 1 Year",
      category: "Equity Research",
      author: "Rohit Pai",
      authorRole: "3rd Year Chemical",
      date: "Dec 1, 2024",
      readTime: "7 min read",
      excerpt: "Hard data on how our student-managed fund performed vs popular equity mutual funds. Transparency in performance, costs, and learning outcomes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Performance Analysis", "Mutual Funds", "Transparency"],
      engagement: { views: "1.9k", likes: "142", comments: "28" }
    }
  ]

  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeFilter)

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-black via-dark-100/10 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <BookOpen className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Student Research Hub</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where <span className="gradient-text">Engineering Minds</span>
            <br />
            Meet <span className="text-finance-green">Market Research</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            NITK students sharing their unique perspective on finance - combining technical analysis with 
            engineering rigor to uncover market insights that traditional research often misses.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="metric-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-finance-green mb-3 flex justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-finance-green mb-2">23</div>
            <div className="text-white font-medium text-sm mb-1">Research Reports</div>
            <div className="text-white/60 text-xs">Published This Year</div>
          </div>
          
          <div className="metric-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-finance-green mb-3 flex justify-center">
              <Code className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-finance-green mb-2">12</div>
            <div className="text-white font-medium text-sm mb-1">Open Source Tools</div>
            <div className="text-white/60 text-xs">Available on GitHub</div>
          </div>

          <div className="metric-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-finance-green mb-3 flex justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-finance-green mb-2">87%</div>
            <div className="text-white font-medium text-sm mb-1">Prediction Accuracy</div>
            <div className="text-white/60 text-xs">ML-Based Models</div>
          </div>

          <div className="metric-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-finance-green mb-3 flex justify-center">
              <User className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-finance-green mb-2">8.5k</div>
            <div className="text-white font-medium text-sm mb-1">Monthly Readers</div>
            <div className="text-white/60 text-xs">Campus & Beyond</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-finance-green text-black font-semibold'
                  : 'bg-dark-100/30 text-white/70 hover:bg-finance-green/20 hover:text-finance-green border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card group hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-finance-green text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-finance-green transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Meta */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-finance-green/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-finance-green" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{post.author}</div>
                      <div className="text-white/60 text-xs">{post.authorRole}</div>
                    </div>
                  </div>
                  <div className="text-white/60 text-xs">
                    {post.date}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-dark-100/50 text-white/60 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4 text-xs text-white/60">
                    <span>{post.engagement.views} views</span>
                    <span>{post.engagement.likes} likes</span>
                    <span>{post.engagement.comments} comments</span>
                  </div>
                  <div className="text-xs text-finance-green">
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Research Approach */}
        <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-4xl mx-auto text-center">
          <Code className="w-12 h-12 text-finance-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Our Research Philosophy</h3>
          <p className="text-white/80 leading-relaxed mb-6">
            "We bring an engineering mindset to financial research - systematic, data-driven, and open source. 
            Every analysis is backed by code, every prediction is tested, and every insight is shared with the community."
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-6">
            <span>• Code-First Analysis</span>
            <span>• Open Source Tools</span>
            <span>• Student Perspective</span>
            <span>• Real Market Testing</span>
          </div>
          <button className="btn-primary">
            Subscribe to Research Updates
          </button>
        </div>
      </div>
    </section>
  )
  }
  
export default Research 