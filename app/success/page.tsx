'use client'

import { useSearchParams } from 'next/navigation'
import { CheckCircle, Calendar, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('session_id')

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Welcome to the Learning Impediments Lab!
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            Your payment was successful. You're officially enrolled in the inaugural cohort.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Check Your Email</h3>
              <p className="text-slate-600 text-sm">
                We've sent you a confirmation email with all the details, including session dates and Zoom links.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Mark Your Calendar</h3>
              <p className="text-slate-600 text-sm">
                Three 90-minute sessions starting [DATE]. We'll send calendar invites shortly.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-slate-600">You'll receive a welcome email within 24 hours with pre-session materials</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-slate-600">We'll send calendar invites for all three sessions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-slate-600">Access to our private community space for ongoing support</p>
              </div>
            </div>
          </div>

          {sessionId && (
            <p className="text-xs text-slate-400 mt-6">
              Reference: {sessionId}
            </p>
          )}
        </div>

        <p className="text-slate-600">
          Questions? Contact us at{' '}
          <a href="mailto:support@cohortlearninglabs.com" className="text-blue-600 hover:underline">
            support@cohortlearninglabs.com
          </a>
        </p>
      </motion.div>
    </div>
  )
}