'use client'

import React, { useState } from 'react'
import { User, TrendingUp, BookOpen, Award, ArrowRight, Quote, Target, Code, BarChart3, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'

const StudentStories = () => {
  const [currentStory, setCurrentStory] = useState(0)

  const stories = [
    {
      id: 1,
      name: "Arjun Shetty",
      year: "4th Year CSE",
      role: "Fund Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      journey: {
        before: "Zero finance knowledge, only Python coding skills",
        challenge: "Bridge the gap between tech and finance",
        solution: "Built automated trading algorithms using ML",
        outcome: "Led fund to 28% returns on tech investments"
      },
      quote: "NH66 transformed my coding skills into financial alpha. I went from debugging code to debugging market inefficiencies.",
      metrics: {
        learningHours: "400+",
        projectsLed: "8",
        returnsGenerated: "28%",
        teamMembers: "12"
      },
      skills: ["Python", "Machine Learning", "Portfolio Theory", "Risk Management"],
      timeline: [
        { month: "Dec 2023", event: "Joined as founding member", emotion: "nervous" },
        { month: "Feb 2024", event: "First successful algorithm", emotion: "excited" },
        { month: "May 2024", event: "Became team lead", emotion: "confident" },
        { month: "Dec 2024", event: "Fund manager role", emotion: "proud" }
      ]
    },
    {
      id: 2,
      name: "Priya Nayak",
      year: "4th Year ECE",
      role: "ESG Research Head",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=400&h=400&fit=crop&crop=face",
      journey: {
        before: "Electronics engineer with sustainability passion",
        challenge: "Integrate ESG principles with profitable investing",
        solution: "Created comprehensive ESG scoring framework",
        outcome: "NH66's ESG portfolio outperformed by 15%"
      },
      quote: "Engineering taught me systems thinking. Now I apply it to sustainable investing - optimizing for profit AND planet.",
      metrics: {
        learningHours: "350+",
        companiesAnalyzed: "120",
        esgreports: "23",
        impactMetrics: "15%"
      },
      skills: ["ESG Analysis", "Fundamental Research", "Impact Measurement", "Stakeholder Theory"],
      timeline: [
        { month: "Jan 2024", event: "Joined ESG initiative", emotion: "passionate" },
        { month: "Mar 2024", event: "First ESG framework", emotion: "innovative" },
        { month: "Jul 2024", event: "ESG portfolio launch", emotion: "determined" },
        { month: "Dec 2024", event: "Head of ESG Research", emotion: "accomplished" }
      ]
    },
    {
      id: 3,
      name: "Ananya Kulkarni",
      year: "1st Year CSE",
      role: "Social Sentiment Analyst",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      journey: {
        before: "Fresh college student with social media intuition",
        challenge: "Turn social trends into investment insights",
        solution: "Built sentiment analysis tools for retail investing",
        outcome: "Predicted 3 major market moves through social data"
      },
      quote: "Gen Z doesn't just use social media - we understand its patterns. I turned that into a competitive investing edge.",
      metrics: {
        learningHours: "200+",
        socialPosts: "50k+",
        predictions: "3/3",
        accuracy: "87%"
      },
      skills: ["Social Analytics", "Data Science", "Consumer Behavior", "Trend Analysis"],
      timeline: [
        { month: "Aug 2024", event: "Joined as freshman", emotion: "curious" },
        { month: "Sep 2024", event: "First social analysis", emotion: "eager" },
        { month: "Oct 2024", event: "Predicted market shift", emotion: "amazed" },
        { month: "Dec 2024", event: "Leading social insights", emotion: "empowered" }
      ]
    }
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const story = stories[currentStory]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-dark-100/30 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <User className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Student Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming <span className="gradient-text">Engineering Minds</span>
            <br />
            Into <span className="text-finance-green">Finance Leaders</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real stories from NITK students who transformed their technical skills into financial expertise, 
            creating value for themselves and the fund.
          </p>
        </div>

        {/* Story Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Student Photo & Quote */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-finance-green/30"
                />
                <div className="absolute -bottom-4 -right-4 bg-finance-green text-black p-3 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">{story.name}</h3>
              <p className="text-finance-green font-semibold mb-2">{story.role}</p>
              <p className="text-white/60 mb-6">{story.year}</p>
              
              <div className="bg-dark-100/50 border border-finance-green/20 rounded-lg p-6 mb-6">
                <Quote className="w-8 h-8 text-finance-green mb-4" />
                <p className="text-white/90 italic text-lg leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <button 
                  onClick={prevStory}
                  className="p-2 bg-dark-100/50 rounded-full hover:bg-finance-green hover:text-black transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-2 items-center">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStory ? 'bg-finance-green w-6' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextStory}
                  className="p-2 bg-dark-100/50 rounded-full hover:bg-finance-green hover:text-black transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Journey & Metrics */}
            <div className="space-y-8">
              {/* Journey Framework */}
              <div className="card">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-5 h-5 text-finance-green mr-2" />
                  Transformation Journey
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Before</h5>
                      <p className="text-white/70 text-sm">{story.journey.before}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Challenge</h5>
                      <p className="text-white/70 text-sm">{story.journey.challenge}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Solution</h5>
                      <p className="text-white/70 text-sm">{story.journey.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-finance-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-finance-green text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Outcome</h5>
                      <p className="text-white/70 text-sm">{story.journey.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="card">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 text-finance-green mr-2" />
                  Impact Metrics
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(story.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-dark-100/30 rounded-lg">
                      <div className="text-2xl font-bold text-finance-green mb-1">{value}</div>
                      <div className="text-white/70 text-xs capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Timeline */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Acquired */}
            <div className="card">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-finance-green mr-2" />
                Skills Acquired
              </h4>
              <div className="flex flex-wrap gap-2">
                {story.skills.map((skill, index) => (
                  <span key={index} className="bg-finance-green/20 text-finance-green px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="card">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-finance-green mr-2" />
                Learning Timeline
              </h4>
              <div className="space-y-3">
                {story.timeline.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-finance-green rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-white/70 text-sm">{milestone.month}</div>
                      <div className="text-white text-sm">{milestone.event}</div>
                    </div>
                    <div className="text-finance-green text-xs px-2 py-1 bg-finance-green/20 rounded">
                      {milestone.emotion}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-to-r from-finance-green/10 to-finance-blue/5 border-finance-green/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Own Journey</h3>
            <p className="text-white/80 mb-6">
              Join NITK's most innovative student fund and transform your technical skills into financial expertise.
            </p>
            <button className="btn-primary group">
              <span>Apply to Join NH66</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentStories 