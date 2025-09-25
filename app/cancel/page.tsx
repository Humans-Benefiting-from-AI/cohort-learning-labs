'use client'

import Link from 'next/link'
import { XCircle, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto text-center"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Payment Cancelled
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            No worries! Your payment was not processed and no charges were made.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-slate-700">
              The Learning Impediments Lab is still available.
              You can return anytime to complete your enrollment.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Return to Home Page
            </Link>

            <p className="text-slate-500 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:support@cohortlearninglabs.com" className="text-blue-600 hover:underline">
                support@cohortlearninglabs.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}