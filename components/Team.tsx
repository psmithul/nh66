'use client'

import React from 'react'
import { Github, Linkedin, Mail, TrendingUp, Code, BarChart3, Shield, Clock, LineChart, Brain, Target, Award } from 'lucide-react'

const Team = () => {
  const leadership = [
    {
      name: "Arjun Menon",
      role: "Chief Investment Officer",
      department: "Computer Science, 4th Year", 
      division: "Leadership",
      specialization: "Investment Strategy & Portfolio Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Leading NH66 Capital's investment strategy with focus on systematic value creation and risk-adjusted returns.",
      github: "arjun-menon",
      linkedin: "arjun-menon-nitk",
      email: "arjun.menon@nh66capital.com",
      achievements: ["18.7% portfolio alpha", "₹3.2L AUM oversight", "Risk framework architect"]
    },
    {
      name: "Priya Sharma",
      role: "Chief Trading Officer", 
      department: "Electronics & Communication, 4th Year",
      division: "Leadership",
      specialization: "Technical Analysis & Short-term Alpha",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Directing our trading operations with expertise in technical analysis and systematic momentum strategies.",
      github: "priya-sharma-nitk",
      linkedin: "priya-sharma-trading",
      email: "priya.sharma@nh66capital.com",
      achievements: ["87% win rate", "₹1.1L trading profits", "Volatility expert"]
    }
  ]

  const investmentTeam = [
    {
      name: "Karthik Rao",
      role: "Senior Investment Analyst",
      department: "Mechanical Engineering, 3rd Year",
      division: "Investment Division",
      specialization: "Fundamental Analysis & ESG Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Deep-value investing specialist with focus on sustainable long-term returns and ESG integration.",
      github: "karthik-rao",
      linkedin: "karthik-rao-analyst", 
      email: "karthik.rao@nh66capital.com",
      achievements: ["12 successful stock picks", "ESG framework lead", "Pharma sector expert"]
    },
    {
      name: "Ananya Kulkarni",
      role: "Quantitative Research Analyst",
      department: "Computer Science, 2nd Year",
      division: "Investment Division",
      specialization: "Algorithmic Strategy Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Building quantitative models for systematic investment decisions and portfolio optimization.",
      github: "ananya-quant",
      linkedin: "ananya-kulkarni-quant",
      email: "ananya.kulkarni@nh66capital.com", 
      achievements: ["Python trading models", "ML prediction systems", "Data pipeline architect"]
    },
    {
      name: "Rohan Gupta",
      role: "Sector Research Lead",
      department: "Chemical Engineering, 3rd Year", 
      division: "Investment Division",
      specialization: "Industry Analysis & Valuation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Leading sector-specific research with expertise in industrial analysis and competitive positioning.",
      github: "rohan-sector",
      linkedin: "rohan-gupta-research",
      email: "rohan.gupta@nh66capital.com",
      achievements: ["Chemical sector specialist", "₹500k+ sector returns", "Industry expert network"]
    }
  ]

  const tradingTeam = [
    {
      name: "Sneha Bhat",
      role: "Lead Technical Analyst",
      department: "Information Technology, 3rd Year",
      division: "Trading Division", 
      specialization: "Chart Pattern Recognition & Momentum",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in technical analysis with proven track record in identifying high-probability trading setups.",
      github: "sneha-tech-analysis",
      linkedin: "sneha-bhat-trading",
      email: "sneha.bhat@nh66capital.com",
      achievements: ["₹400k+ trading profits", "Pattern recognition expert", "Risk management systems"]
    },
    {
      name: "Vikram Reddy", 
      role: "Options & Derivatives Specialist",
      department: "Electrical Engineering, 4th Year",
      division: "Trading Division",
      specialization: "Complex Derivatives & Volatility Trading", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      bio: "Sophisticated derivatives strategies and volatility trading for enhanced portfolio returns.",
      github: "vikram-derivatives",
      linkedin: "vikram-reddy-options",
      email: "vikram.reddy@nh66capital.com",
      achievements: ["Options strategy expert", "Volatility arbitrage", "Derivatives education lead"]
    },
    {
      name: "Rahul Kumar",
      role: "Day Trading Specialist", 
      department: "Electronics & Electrical, 2nd Year",
      division: "Trading Division",
      specialization: "Intraday Momentum & Scalping",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face", 
      bio: "High-frequency trading strategies and intraday momentum capture for consistent daily alpha.",
      github: "rahul-daytrading",
      linkedin: "rahul-kumar-trader",
      email: "rahul.kumar@nh66capital.com",
      achievements: ["Daily profit consistency", "Scalping strategies", "Market psychology expert"]
    }
  ]

  const riskTeam = [
    {
      name: "Aditi Singh",
      role: "Chief Risk Officer",
      department: "Civil Engineering, 4th Year",
      division: "Risk Management",
      specialization: "Portfolio Risk & Compliance",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Overseeing comprehensive risk management frameworks and ensuring institutional-grade compliance.",
      github: "aditi-risk-mgmt",
      linkedin: "aditi-singh-risk", 
      email: "aditi.singh@nh66capital.com",
      achievements: ["Risk framework architect", "Compliance systems", "Capital allocation model"]
    }
  ]

  const divisionStats = [
    {
      icon: <Clock className="w-6 h-6" />,
      division: "Investment Division",
      members: 8,
      focus: "Long-term Value Creation",
      performance: "+24.3% Average Return",
      color: "text-finance-green"
    },
    {
      icon: <LineChart className="w-6 h-6" />, 
      division: "Trading Division",
      members: 6,
      focus: "Short-term Alpha Capture", 
      performance: "87% Win Rate",
      color: "text-finance-blue"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      division: "Risk Management",
      members: 3,
      focus: "Portfolio Protection",
      performance: "0.95 Sharpe Ratio",
      color: "text-finance-green"
    }
  ]

  const TeamMemberCard = ({ member }: any) => (
    <div className="card group hover:scale-105 transition-all duration-300">
      <div className="relative mb-6">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-finance-green/30 group-hover:border-finance-green/60 transition-colors duration-300"
        />
        <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
          member.division === 'Investment Division' ? 'bg-finance-green/20 border-2 border-finance-green' :
          member.division === 'Trading Division' ? 'bg-finance-blue/20 border-2 border-finance-blue' :
          member.division === 'Risk Management' ? 'bg-purple-500/20 border-2 border-purple-500' :
          'bg-finance-green/20 border-2 border-finance-green'
        }`}>
          {member.division === 'Investment Division' ? <BarChart3 className="w-4 h-4 text-finance-green" /> :
           member.division === 'Trading Division' ? <TrendingUp className="w-4 h-4 text-finance-blue" /> :
           member.division === 'Risk Management' ? <Shield className="w-4 h-4 text-purple-500" /> :
           <Award className="w-4 h-4 text-finance-green" />}
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-finance-green font-medium text-sm mb-1">{member.role}</p>
        <p className="text-white/60 text-xs mb-2">{member.department}</p>
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          member.division === 'Investment Division' ? 'bg-finance-green/20 text-finance-green' :
          member.division === 'Trading Division' ? 'bg-finance-blue/20 text-finance-blue' :
          member.division === 'Risk Management' ? 'bg-purple-500/20 text-purple-500' :
          'bg-finance-green/20 text-finance-green'
        }`}>
          {member.division}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold text-sm mb-1">Specialization</h4>
        <p className="text-white/70 text-xs">{member.specialization}</p>
      </div>

      <p className="text-white/80 text-sm mb-4 leading-relaxed">{member.bio}</p>

      {member.achievements && (
        <div className="mb-4">
          <h4 className="text-white font-semibold text-sm mb-2">Key Achievements</h4>
          <div className="space-y-1">
            {member.achievements.map((achievement: string, index: number) => (
              <div key={index} className="flex items-center text-xs text-white/70">
                <div className="w-1 h-1 bg-finance-green rounded-full mr-2"></div>
                {achievement}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
        <a href={`https://github.com/${member.github}`} className="text-white/60 hover:text-finance-green transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href={`https://linkedin.com/in/${member.linkedin}`} className="text-white/60 hover:text-finance-green transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href={`mailto:${member.email}`} className="text-white/60 hover:text-finance-green transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  )

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-dark-50/30 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <Brain className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Our Capital Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Alpha Generators</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            25+ of NITK's brightest minds working across <span className="text-finance-green font-semibold">Investment</span> and 
            <span className="text-finance-blue font-semibold"> Trading</span> divisions. Each analyst brings engineering rigor 
            to financial markets, building tomorrow's investment management leaders today.
          </p>
        </div>

        {/* Division Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {divisionStats.map((stat, index) => (
            <div key={index} className="card text-center">
              <div className={`${stat.color} mb-4 mx-auto`}>
                {stat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{stat.division}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Team Size:</span>
                  <span className="text-white font-medium">{stat.members} members</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Focus:</span>
                  <span className="text-white font-medium">{stat.focus}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Performance:</span>
                  <span className={`font-medium ${stat.color}`}>{stat.performance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Award className="w-6 h-6 text-finance-green mr-3" />
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Investment Division */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Clock className="w-6 h-6 text-finance-green mr-3" />
            Investment Division
          </h3>
          <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">
            Long-term value creation through rigorous fundamental analysis and patient capital deployment
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Trading Division */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <LineChart className="w-6 h-6 text-finance-blue mr-3" />
            Trading Division
          </h3>
          <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">
            Short-term alpha capture through technical analysis and systematic momentum strategies
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Risk Management */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Shield className="w-6 h-6 text-purple-500 mr-3" />
            Risk Management
          </h3>
          <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">
            Institutional-grade risk frameworks ensuring capital preservation across all strategies
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto">
            {riskTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-2xl mx-auto">
            <Target className="w-8 h-8 text-finance-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join NH66 Capital</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Ready to build the future of student capital management? We're always looking for analytical minds 
              passionate about markets and committed to institutional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Investment Division Applications
              </button>
              <button className="btn-secondary">
                Trading Division Applications
              </button>
            </div>
            <div className="mt-6 text-sm text-white/60">
              Open to all NITK students across departments • Rolling applications • Competitive selection
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team 