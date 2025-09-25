'use client'

import { ArrowRight, Brain, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Stop Being Your Own Biggest{' '}
              <span className="text-blue-600">Learning Barrier.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8">
              Join a small group to discover, name, and overcome the two hidden impediments that block growth.
              A 3-session workshop for curious professionals.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group text-lg">
                Join the Waitlist for the First Cohort
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-sm text-slate-500">
              No cost to join the waitlist. Be the first to know when enrollment opens.
            </p>
          </motion.div>

          {/* Right Content - Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Reserve Your Spot</h3>
                <p className="text-slate-600">Join the waitlist for the inaugural cohort</p>
              </div>

              <WaitlistForm />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
