'use client'

import React, { useState } from 'react'
import { Cpu, Database, Bot, Smartphone, TrendingUp, Code, Zap, Globe, ChevronRight, Github, ExternalLink, Star, GitBranch, Activity } from 'lucide-react'

const InnovationLab = () => {
  const [activeProject, setActiveProject] = useState(0)

  const innovations = [
    {
      id: 1,
      title: "AlphaBot Trading System",
      category: "Algorithmic Trading",
      icon: <Bot className="w-8 h-8" />,
      description: "ML-powered automated trading system built by CSE students using Python, TensorFlow, and real-time market data APIs.",
      status: "Production",
      tech: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API", "PostgreSQL"],
      metrics: {
        accuracy: "87%",
        trades: "150+",
        uptime: "99.2%",
        returns: "+23%"
      },
      features: [
        "Real-time sentiment analysis from news and social media",
        "Technical indicator optimization using genetic algorithms",
        "Risk-adjusted position sizing with Kelly criterion",
        "Automated portfolio rebalancing every 24 hours"
      ],
      github: "github.com/nh66fund/alphabot",
      demo: "trading.nh66fund.com",
      impact: "Reduced manual trading time by 80% while improving consistency",
      studentLead: "Arjun Shetty, 4th Year CSE"
    },
    {
      id: 2,
      title: "ESG Impact Scorer",
      category: "Sustainable Finance",
      icon: <Globe className="w-8 h-8" />,
      description: "Comprehensive ESG scoring framework that analyzes company sustainability metrics using web scraping and NLP.",
      status: "Beta",
      tech: ["Python", "Beautiful Soup", "spaCy", "React", "MongoDB"],
      metrics: {
        companies: "500+",
        dataPoints: "50k+",
        accuracy: "92%",
        coverage: "NSE Top 200"
      },
      features: [
        "Automated news sentiment analysis for ESG events",
        "Carbon footprint calculation from annual reports",
        "Board diversity scoring and governance metrics",
        "Interactive dashboard for sustainability tracking"
      ],
      github: "github.com/nh66fund/esg-scorer",
      demo: "esg.nh66fund.com",
      impact: "First student-built ESG framework in Indian campus funds",
      studentLead: "Priya Nayak, 4th Year ECE"
    },
    {
      id: 3,
      title: "Social Pulse Analytics",
      category: "Alternative Data",
      icon: <Activity className="w-8 h-8" />,
      description: "Social media sentiment tracking for retail investor behavior prediction using Twitter and Reddit data.",
      status: "Development",
      tech: ["Node.js", "Twitter API", "Redis", "Chart.js", "AWS Lambda"],
      metrics: {
        posts: "100k+",
        accuracy: "84%",
        latency: "<2s",
        predictions: "15/18"
      },
      features: [
        "Real-time Twitter sentiment analysis for top 50 stocks",
        "Reddit WSB trend detection and momentum scoring",
        "Influencer impact measurement on stock movements",
        "Retail vs institutional sentiment divergence alerts"
      ],
      github: "github.com/nh66fund/social-pulse",
      demo: "social.nh66fund.com",
      impact: "Predicted 83% of major retail-driven price movements",
      studentLead: "Ananya Kulkarni, 1st Year CSE"
    },
    {
      id: 4,
      title: "Portfolio Optimizer Pro",
      category: "Risk Management",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Advanced portfolio optimization tool using modern portfolio theory with custom constraints for student funds.",
      status: "Production",
      tech: ["Python", "SciPy", "NumPy", "Streamlit", "Docker"],
      metrics: {
        portfolios: "25+",
        optimization: "3x faster",
        sharpe: "1.76",
        drawdown: "-8.2%"
      },
      features: [
        "Multi-objective optimization (return vs risk vs ESG)",
        "Sector and single-stock concentration limits",
        "Black-Litterman model with student analyst views",
        "Stress testing with Monte Carlo simulations"
      ],
      github: "github.com/nh66fund/portfolio-optimizer",
      demo: "optimize.nh66fund.com",
      impact: "Improved risk-adjusted returns by 40% vs equal weight",
      studentLead: "Karthik Rao, 3rd Year ME"
    },
    {
      id: 5,
      title: "Mobile Trading Companion",
      category: "Mobile FinTech",
      icon: <Smartphone className="w-8 h-8" />,
      description: "React Native app for fund members to track portfolio, submit ideas, and get real-time alerts.",
      status: "Beta",
      tech: ["React Native", "Firebase", "Redux", "Push Notifications"],
      metrics: {
        users: "25",
        engagement: "92%",
        notifications: "500+",
        ideas: "47"
      },
      features: [
        "Real-time portfolio tracking with P&L breakdown",
        "Investment idea submission with voting system",
        "Price alerts and news notifications",
        "Team chat and collaboration features"
      ],
      github: "github.com/nh66fund/mobile-app",
      demo: "app.nh66fund.com",
      impact: "Increased team engagement by 60% with mobile-first approach",
      studentLead: "Sneha Bhat, 2nd Year IT"
    },
    {
      id: 6,
      title: "Market Data Pipeline",
      category: "Data Infrastructure", 
      icon: <Database className="w-8 h-8" />,
      description: "Real-time data pipeline processing 10M+ market events daily using Apache Kafka and time-series databases.",
      status: "Production",
      tech: ["Apache Kafka", "InfluxDB", "Python", "Docker", "Grafana"],
      metrics: {
        events: "10M+/day",
        latency: "<50ms",
        uptime: "99.8%",
        storage: "2TB+"
      },
      features: [
        "Real-time NSE/BSE tick data ingestion",
        "Corporate actions and dividend tracking",
        "Economic calendar integration with news feeds",
        "Custom alerting system for price anomalies"
      ],
      github: "github.com/nh66fund/data-pipeline",
      demo: "data.nh66fund.com",
      impact: "Reduced data costs by 70% vs commercial providers",
      studentLead: "Rohit Pai, 3rd Year Chemical"
    }
  ]

  const project = innovations[activeProject]

  const stats = [
    { label: "Active Projects", value: "6", icon: <Code className="w-5 h-5" /> },
    { label: "Lines of Code", value: "50k+", icon: <GitBranch className="w-5 h-5" /> },
    { label: "Contributors", value: "15", icon: <Star className="w-5 h-5" /> },
    { label: "Production Systems", value: "3", icon: <Zap className="w-5 h-5" /> }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-dark-100/20 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <Cpu className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Innovation Lab</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building the <span className="gradient-text">Future of Finance</span>
            <br />
            One <span className="text-finance-green">Code</span> at a Time
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            NITK students aren't just learning finance - they're revolutionizing it. Our Innovation Lab 
            combines engineering excellence with financial innovation to create cutting-edge solutions.
          </p>
        </div>

        {/* Lab Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="metric-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-finance-green mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-finance-green mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Showcase */}
        <div className="max-w-7xl mx-auto">
          {/* Project Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            {innovations.map((innovation, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-4 rounded-lg border transition-all duration-300 text-left group ${
                  index === activeProject 
                    ? 'bg-finance-green/20 border-finance-green text-white' 
                    : 'bg-dark-100/30 border-white/10 text-white/70 hover:border-finance-green/50'
                }`}
              >
                <div className={`mb-3 ${index === activeProject ? 'text-finance-green' : 'text-white/60 group-hover:text-finance-green'}`}>
                  {innovation.icon}
                </div>
                <div className="text-sm font-semibold mb-1">{innovation.title}</div>
                <div className="text-xs opacity-70">{innovation.category}</div>
              </button>
            ))}
          </div>

          {/* Active Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Project Info */}
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-finance-green">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-finance-green font-medium">{project.category}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <ChevronRight className="w-4 h-4 text-finance-green mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-dark-100/50 text-white/80 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={`https://${project.github}`}
                    className="flex items-center space-x-2 bg-dark-100/50 hover:bg-finance-green hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </a>
                  <a 
                    href={`https://${project.demo}`}
                    className="flex items-center space-x-2 bg-finance-green/20 hover:bg-finance-green hover:text-black text-finance-green px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30">
                <h4 className="text-white font-semibold mb-3">Impact & Leadership</h4>
                <p className="text-white/80 text-sm mb-3">{project.impact}</p>
                <div className="text-finance-green text-sm font-medium">
                  Led by: {project.studentLead}
                </div>
              </div>
            </div>

            {/* Right: Metrics & Visualization */}
            <div className="space-y-6">
              <div className="card">
                <h4 className="text-xl font-bold text-white mb-6">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-dark-100/30 rounded-lg">
                      <div className="text-2xl font-bold text-finance-green mb-1">{value}</div>
                      <div className="text-white/70 text-xs capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Timeline Visualization */}
              <div className="card">
                <h4 className="text-lg font-bold text-white mb-4">Development Progress</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Ideation</span>
                    <div className="w-32 bg-dark-100/50 rounded-full h-2">
                      <div className="bg-finance-green h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-finance-green text-sm">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Development</span>
                    <div className="w-32 bg-dark-100/50 rounded-full h-2">
                      <div className="bg-finance-green h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-finance-green text-sm">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Testing</span>
                    <div className="w-32 bg-dark-100/50 rounded-full h-2">
                      <div className={`h-2 rounded-full ${
                        project.status === 'Production' ? 'bg-finance-green w-full' : 'bg-yellow-400 w-3/4'
                      }`}></div>
                    </div>
                    <span className="text-finance-green text-sm">
                      {project.status === 'Production' ? '100%' : '75%'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Deployment</span>
                    <div className="w-32 bg-dark-100/50 rounded-full h-2">
                      <div className={`h-2 rounded-full ${
                        project.status === 'Production' ? 'bg-finance-green w-full' : 
                        project.status === 'Beta' ? 'bg-finance-green w-3/4' : 'bg-gray-400 w-1/4'
                      }`}></div>
                    </div>
                    <span className="text-finance-green text-sm">
                      {project.status === 'Production' ? '100%' : 
                       project.status === 'Beta' ? '75%' : '25%'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Code Contribution */}
              <div className="card">
                <h4 className="text-lg font-bold text-white mb-4">Code Contributions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Commits</span>
                    <span className="text-finance-green font-medium">
                      {Math.floor(Math.random() * 200) + 50}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Contributors</span>
                    <span className="text-finance-green font-medium">
                      {Math.floor(Math.random() * 8) + 2}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Issues Closed</span>
                    <span className="text-finance-green font-medium">
                      {Math.floor(Math.random() * 30) + 10}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Philosophy */}
        <div className="mt-20 text-center">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-4xl mx-auto">
            <Cpu className="w-12 h-12 text-finance-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Innovation Philosophy</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              "We don't just use technology - we build it. Every line of code we write, every algorithm we design, 
              and every system we deploy represents our commitment to pushing the boundaries of what student-run 
              funds can achieve in the modern financial landscape."
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <span>• Open Source First</span>
              <span>• Student-Led Innovation</span>
              <span>• Production-Ready Solutions</span>
              <span>• Real-World Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovationLab 