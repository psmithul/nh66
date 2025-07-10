'use client'

import React from 'react'
import { Linkedin, Mail, Github, Award, BookOpen, Code2, BarChart3 } from 'lucide-react'

const Team = () => {
  const team = [
    {
      name: "Arjun Shetty",
      role: "Fund Manager & Co-Founder",
      year: "B.Tech 4th Year, CSE",
      expertise: "Algorithmic Trading, Portfolio Optimization",
      description: "Pioneering quantitative strategies with Python and machine learning. Led NH66's transition to systematic trading approaches.",
      achievements: ["28% returns on tech portfolio", "Built automated trading system", "Published research on campus"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "arjun.shetty@student.nitk.ac.in",
      github: "arjunshetty"
    },
    {
      name: "Priya Nayak",
      role: "Head of Research & Co-Founder", 
      year: "B.Tech 4th Year, ECE",
      expertise: "Fundamental Analysis, ESG Investing",
      description: "Specializes in tech sector analysis and sustainable investing. Her ESG framework has become NH66's standard for ethical investments.",
      achievements: ["ESG screening framework", "15+ detailed equity reports", "Led sustainability initiatives"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "priya.nayak@student.nitk.ac.in",
      github: "priyanayak"
    },
    {
      name: "Karthik Rao",
      role: "Risk Management Lead",
      year: "B.Tech 3rd Year, ME",
      expertise: "Risk Analytics, Derivatives Strategy",
      description: "Mechanical engineer turned quantitative analyst. Built NH66's comprehensive risk management framework and hedging strategies.",
      achievements: ["Risk management system", "Volatility prediction models", "Derivatives trading expertise"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "karthik.rao@student.nitk.ac.in",
      github: "karthikrao"
    },
    {
      name: "Sneha Bhat",
      role: "Technology & Data Lead",
      year: "B.Tech 2nd Year, IT",
      expertise: "FinTech Development, Data Analytics", 
      description: "Building NH66's tech infrastructure and data pipelines. Created the portfolio tracking system and automated reporting tools.",
      achievements: ["Portfolio dashboard", "Data analytics pipeline", "Mobile trading app prototype"],
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "sneha.bhat@student.nitk.ac.in",
      github: "snehab"
    },
    {
      name: "Rohit Pai",
      role: "Sector Analyst - Finance",
      year: "B.Tech 3rd Year, Chemical",
      expertise: "Banking & NBFC Analysis, Credit Research",
      description: "Chemical engineering background provides unique perspective on process optimization in financial services sector analysis.",
      achievements: ["Banking sector deep-dive", "Credit risk models", "NBFC comparison framework"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "rohit.pai@student.nitk.ac.in",
      github: "rohitpai"
    },
    {
      name: "Ananya Kulkarni",
      role: "Junior Analyst",
      year: "B.Tech 1st Year, CSE",
      expertise: "Market Research, Social Media Analytics",
      description: "Youngest team member bringing fresh perspectives on consumer trends and social sentiment analysis for investment decisions.",
      achievements: ["Social sentiment indicator", "Consumer trend reports", "Campus investment surveys"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "ananya.kulkarni@student.nitk.ac.in", 
      github: "ananyak"
    },
    {
      name: "Vikram Shenoy",
      role: "Alumni Advisor",
      year: "NITK Alumni '23, Currently at Goldman Sachs",
      expertise: "Investment Banking, Startup Ecosystem",
      description: "Provides industry insights and mentorship. Bridges the gap between academic learning and professional finance practice.",
      achievements: ["Industry mentorship", "Network connections", "Career guidance for team"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "vikram.shenoy@gs.com",
      github: "vikramshenoy"
    },
    {
      name: "Meera Hegde", 
      role: "Operations & Compliance",
      year: "B.Tech 2nd Year, Civil",
      expertise: "Process Optimization, Regulatory Compliance",
      description: "Applies engineering project management skills to ensure smooth fund operations and regulatory adherence.",
      achievements: ["Operations framework", "Compliance procedures", "Investor relations system"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "meera.hegde@student.nitk.ac.in",
      github: "meerah"
    }
  ]

  const departmentStats = [
    { dept: "Computer Science", count: 8, percentage: "32%" },
    { dept: "Electronics & Comm", count: 5, percentage: "20%" },
    { dept: "Mechanical", count: 4, percentage: "16%" },
    { dept: "Information Technology", count: 3, percentage: "12%" },
    { dept: "Chemical", count: 2, percentage: "8%" },
    { dept: "Civil", count: 2, percentage: "8%" },
    { dept: "Alumni", count: 1, percentage: "4%" }
  ]

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium text-sm">NITK's Finest Minds</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Student Leaders</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From first-year innovators to fourth-year leaders, our diverse team of NITK students brings 
            engineering excellence to financial markets. Each member contributes unique skills and perspectives.
          </p>
        </div>

        {/* Department Distribution */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Cross-Departmental <span className="text-finance-green">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {departmentStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="card hover:scale-105 transition-transform duration-300 p-4">
                  <div className="text-2xl font-bold text-finance-green mb-1">{stat.count}</div>
                  <div className="text-xs text-white/60 mb-2">{stat.dept}</div>
                  <div className="text-sm text-white/80 font-medium">{stat.percentage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Core <span className="text-finance-green">Leadership</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.slice(0, 4).map((member, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-finance-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-finance-green font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-white/60 mb-3">{member.year}</p>
                  <p className="text-xs text-finance-green/80 mb-4 font-medium">{member.expertise}</p>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* Key Achievements */}
                  <div className="mb-4">
                    <div className="text-xs text-white/50 mb-2">Key Achievements:</div>
                    <div className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="text-xs bg-finance-green/10 text-finance-green px-2 py-1 rounded">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Links */}
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="text-white/60 hover:text-finance-green transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-white/60 hover:text-finance-green transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={`https://github.com/${member.github}`} className="text-white/60 hover:text-finance-green transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Extended <span className="text-finance-green">Team</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(4).map((member, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                    <p className="text-finance-green text-sm font-medium">{member.role}</p>
                    <p className="text-xs text-white/60">{member.year}</p>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  {member.description}
                </p>
                
                <div className="text-xs text-finance-green/80 mb-3">{member.expertise}</div>
                
                {/* Contact Links */}
                <div className="flex space-x-3">
                  <a href={member.linkedin} className="text-white/60 hover:text-finance-green transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-white/60 hover:text-finance-green transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href={`https://github.com/${member.github}`} className="text-white/60 hover:text-finance-green transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 text-center">
          <BookOpen className="w-12 h-12 text-finance-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-white">Join the NH66 Family</h3>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-6">
            We're always looking for passionate NITK students who want to learn finance hands-on. 
            Whether you're from CSE, ECE, ME, or any other department - your unique perspective can contribute to our success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center bg-finance-green/20 px-4 py-2 rounded-full">
              <Code2 className="w-4 h-4 text-finance-green mr-2" />
              <span className="text-finance-green text-sm">Technical Skills</span>
            </div>
            <div className="flex items-center bg-finance-green/20 px-4 py-2 rounded-full">
              <BarChart3 className="w-4 h-4 text-finance-green mr-2" />
              <span className="text-finance-green text-sm">Finance Interest</span>
            </div>
            <div className="flex items-center bg-finance-green/20 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-finance-green mr-2" />
              <span className="text-finance-green text-sm">Leadership Potential</span>
            </div>
          </div>
          <button className="btn-primary">
            Apply to Join Our Team
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team 