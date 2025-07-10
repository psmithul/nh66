'use client'

import React from 'react'
import { Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    fund: [
      { label: 'About Us', href: '#about' },
      { label: 'Investment Strategy', href: '#performance' },
      { label: 'Performance', href: '#performance' },
      { label: 'Team', href: '#team' },
    ],
    investors: [
      { label: 'Investor Portal', href: '/login' },
      { label: 'Performance Reports', href: '/reports' },
      { label: 'Risk Disclosures', href: '/risk' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Research & Insights', href: '#research' },
      { label: 'Market Analysis', href: '/analysis' },
      { label: 'Educational Content', href: '/education' },
      { label: 'Press Releases', href: '/press' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Regulatory Compliance', href: '/compliance' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ]
  }

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/nh66fund', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/nh66fund', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@nh66fund', label: 'YouTube' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:info@nh66fund.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-50/50 border-t border-dark-200/30">
      {/* Back to Top Button */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="p-3 bg-finance-green/20 hover:bg-finance-green/30 rounded-full transition-colors duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-finance-green group-hover:translate-y-[-2px] transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl font-bold text-white">NH66</span>
                <span className="text-3xl font-bold text-finance-green">FUND</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                India's premier student-managed investment fund, generating consistent returns through 
                data-driven strategies and innovative portfolio management.
              </p>
              <div className="text-sm text-white/60">
                <p>Established 2024 • AUM ₹1.2 Crore</p>
                <p>SEBI Registration: INH000012345</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4 text-finance-green" />
                <a href="mailto:info@nh66fund.com" className="hover:text-finance-green transition-colors duration-300">
                  info@nh66fund.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4 text-finance-green" />
                <a href="tel:+919876543210" className="hover:text-finance-green transition-colors duration-300">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-4 h-4 text-finance-green mt-1" />
                <address className="not-italic">
                  IIT Campus, Powai<br />
                  Mumbai - 400076, India
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-100/50 rounded-lg hover:bg-finance-green hover:text-black transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Fund</h4>
              <ul className="space-y-3">
                {footerLinks.fund.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-finance-green transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Investors</h4>
              <ul className="space-y-3">
                {footerLinks.investors.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-finance-green transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-finance-green transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-finance-green transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-200/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 NH66 Fund. All rights reserved. | Powered by student innovation.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Student-Managed Fund</span>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Disclaimer */}
      <div className="bg-dark-100/30 border-t border-dark-200/20">
        <div className="container mx-auto px-6 py-4">
          <div className="text-xs text-white/50 text-center leading-relaxed">
            <strong>Risk Disclaimer:</strong> Mutual fund investments are subject to market risks. 
            Past performance is not indicative of future results. Please read all scheme-related documents carefully. 
            This is a student-managed fund for educational purposes.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 