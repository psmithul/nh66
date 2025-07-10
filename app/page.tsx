'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MarketTicker from '@/components/MarketTicker'
import About from '@/components/About'
import Performance from '@/components/Performance'
import Research from '@/components/Research'
import StudentStories from '@/components/StudentStories'
import InnovationLab from '@/components/InnovationLab'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <MarketTicker />
      <About />
      <StudentStories />
      <Performance />
      <InnovationLab />
      <Research />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
} 