'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, LogIn, User, TrendingUp, BarChart3 } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#performance', label: 'Performance' },
    { href: '#research', label: 'Research' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-finance-green/20 shadow-lg shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-1">
              <div className="relative">
                <span className="text-xl sm:text-2xl font-bold text-white transition-all duration-300 group-hover:text-finance-green">
                  NH66
                </span>
                <span className="text-xl sm:text-2xl font-bold text-finance-green ml-1">
                  CAPITAL
                </span>
                <div className="absolute -inset-1 bg-finance-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] sm:text-xs text-finance-green/80 font-medium leading-tight">
                Investment Management
              </span>
              <span className="text-[10px] sm:text-xs text-white/60 font-medium leading-tight">
                NITK Student Fund
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link relative group px-4 py-2 rounded-lg transition-all duration-300 hover:bg-finance-green/10"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-finance-green transition-all duration-300 group-hover:w-6 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/login" className="hidden md:flex items-center space-x-2 btn-outline group">
              <LogIn size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Portal</span>
            </Link>
            
            <button
              className={`lg:hidden relative p-2 rounded-lg transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'bg-finance-green/20 text-finance-green' 
                  : 'hover:bg-white/10 text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 opacity-100' : 'rotate-0 opacity-100'
                }`}>
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="py-4 border-t border-finance-green/20 bg-dark-50/30 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link flex items-center space-x-3 px-4 py-3 rounded-lg mx-2 transition-all duration-300 hover:bg-finance-green/10 hover:translate-x-2 transform ${
                    isMobileMenuOpen ? 'animate-slide-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: 'smooth' })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="w-1 h-1 bg-finance-green rounded-full"></div>
                  <span>{item.label}</span>
                </a>
              ))}
              
              <div className="mx-2 mt-4 pt-4 border-t border-white/10">
                <Link 
                  href="/login" 
                  className="flex items-center justify-center space-x-2 btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn size={16} />
                  <span>Access Portal</span>
                </Link>
              </div>
              
              <div className="mx-2 mt-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-xs text-white/60">
                  <BarChart3 size={12} />
                  <span>Building Tomorrow's Alpha</span>
                  <TrendingUp size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 