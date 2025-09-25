'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Lock, Gift } from 'lucide-react'
import WaitlistForm from './WaitlistForm'

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              You've identified the problem your whole life.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Now it's time to learn the solution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits & Urgency */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="w-6 h-6 text-yellow-300" />
                    <h3 className="text-xl font-bold">Extremely Limited Spaces</h3>
                  </div>
                  <p className="text-blue-100">
                    Spaces for the inaugural cohort are extremely limited to ensure an intimate, powerful experience.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Gift className="w-6 h-6 text-green-300" />
                    <h3 className="text-xl font-bold">Founding Member Benefits</h3>
                  </div>
                  <p className="text-blue-100">
                    You'll be the first to receive enrollment details and a special founding-member offer.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-300" />
                    <h3 className="text-xl font-bold">Transform Your Learning</h3>
                  </div>
                  <p className="text-blue-100">
                    Join the pioneering group that will shape the future of how we approach learning impediments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Final CTA Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Secure Your Spot Today
                  </h3>
                  <p className="text-slate-600">
                    Join the waitlist for the inaugural Learning Impediments Lab cohort
                  </p>
                </div>

                <WaitlistForm />

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-500">
                    By joining the waitlist, you'll receive exclusive updates and early access to enrollment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-blue-200 text-sm">
              Copyright © 2025 Cohort Learning Labs. | Privacy Policy | Terms of Service
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}