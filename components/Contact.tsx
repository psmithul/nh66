'use client'

import React, { useState } from 'react'
import { Send, Phone, Mail, MapPin, Check, Clock, Calendar, MessageSquare, AlertCircle, Users } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false,
    gdprConsent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.subject) newErrors.subject = 'Please select a subject'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    if (!formData.gdprConsent) newErrors.gdprConsent = 'You must agree to the privacy policy'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false,
        gdprConsent: false
      })
      setErrors({})
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@nh66capital.com",
      link: "mailto:contact@nh66capital.com",
      description: "Investment inquiries & partnerships"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      description: "Direct line to our team"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      value: "NITK Campus, Surathkal - 575025",
      link: null,
      description: "Karnataka, India"
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', available: true },
    { day: 'Sunday', hours: 'Closed', available: false }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-dark-50/30 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-finance-green/10 border border-finance-green/30 rounded-full px-6 py-3 mb-6">
            <MessageSquare className="w-4 h-4 text-finance-green mr-2" />
            <span className="text-finance-green font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Connect with <span className="gradient-text">NH66 Capital</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to explore investment opportunities? Have questions about our 
            <span className="text-finance-green font-semibold"> dual-division approach</span>? 
            Our team is here to help you take the next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group card hover:border-finance-green/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-finance-green/20 rounded-lg flex items-center justify-center text-finance-green group-hover:bg-finance-green/30 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-finance-green hover:text-finance-green/80 transition-colors duration-300 font-medium text-sm sm:text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/80 font-medium text-sm sm:text-base">{info.value}</p>
                        )}
                        <p className="text-white/50 text-xs sm:text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <Clock className="w-5 h-5 text-finance-green" />
                <h4 className="text-lg sm:text-xl font-semibold text-white">Office Hours</h4>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm sm:text-base">{schedule.day}</span>
                    <span className={`text-sm sm:text-base font-medium ${
                      schedule.available ? 'text-finance-green' : 'text-white/50'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-finance-green/80">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Schedule a meeting for personalized consultation</span>
                </div>
              </div>
            </div>

            {/* Team Availability */}
            <div className="card bg-gradient-to-br from-finance-green/10 to-finance-blue/5 border-finance-green/30">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-finance-green" />
                <h4 className="text-lg font-semibold text-white">Team Availability</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Our Investment and Trading division experts are available for consultations. 
                Average response time: <span className="text-finance-green font-semibold">2-4 hours</span>
              </p>
              <button className="btn-primary-small w-full">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Send className="w-5 h-5 text-finance-green" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Send us a Message</h3>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-finance-green/20 border border-finance-green/30 rounded-lg animate-fade-in-up">
                  <div className="flex items-center space-x-2 text-finance-green">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                  <p className="text-finance-green/80 text-sm mt-1">We'll get back to you within 2-4 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-100/50 border rounded-lg focus:outline-none text-white placeholder-white/50 transition-all duration-300 ${
                        errors.name ? 'border-finance-red focus:border-finance-red' : 'border-dark-200/30 focus:border-finance-green'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <div className="flex items-center space-x-1 mt-1 text-finance-red text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-100/50 border rounded-lg focus:outline-none text-white placeholder-white/50 transition-all duration-300 ${
                        errors.email ? 'border-finance-red focus:border-finance-red' : 'border-dark-200/30 focus:border-finance-green'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-1 mt-1 text-finance-red text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-100/50 border rounded-lg focus:outline-none text-white transition-all duration-300 ${
                      errors.subject ? 'border-finance-red focus:border-finance-red' : 'border-dark-200/30 focus:border-finance-green'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="investment">Investment Division Inquiry</option>
                    <option value="trading">Trading Division Opportunity</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="career">Career & Internships</option>
                    <option value="media">Media & Press</option>
                    <option value="general">General Question</option>
                  </select>
                  {errors.subject && (
                    <div className="flex items-center space-x-1 mt-1 text-finance-red text-xs">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-dark-100/50 border rounded-lg focus:outline-none text-white placeholder-white/50 resize-none transition-all duration-300 ${
                      errors.message ? 'border-finance-red focus:border-finance-red' : 'border-dark-200/30 focus:border-finance-green'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <div className="flex items-center space-x-1 text-finance-red text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <span className="text-white/50 text-xs">
                      {formData.message.length}/500
                    </span>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-finance-green bg-dark-100/50 border-dark-200/30 rounded focus:ring-finance-green focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="text-sm text-white/80 leading-relaxed">
                      Subscribe to our newsletter for market insights, performance updates, and exclusive investment opportunities
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-finance-green bg-dark-100/50 border-dark-200/30 rounded focus:ring-finance-green focus:ring-2"
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-white/80 leading-relaxed">
                      I agree to the processing of my personal data according to the Privacy Policy *
                    </label>
                  </div>
                  {errors.gdprConsent && (
                    <div className="flex items-center space-x-1 ml-7 text-finance-red text-xs">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.gdprConsent}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                <p className="text-xs text-white/50 text-center">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 