'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Flask, Bridge } from 'lucide-react'

export default function HowItWorksSection() {
  const sessions = [
    {
      number: 1,
      title: "Naming the Monsters",
      icon: MessageCircle,
      description: "We build safety and introduce the framework. You'll discover you're not alone in your learning struggles and gain the vocabulary of Bayshan and Kapdan.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: 2,
      title: "The Live Lab",
      icon: Flask,
      description: "We engage in a collaborative learning challenge. Here, you'll practice spotting the impediments as they arise—in yourself and others—and learn to \"name them to tame them.\"",
      color: "bg-green-100 text-green-600"
    },
    {
      number: 3,
      title: "Your Personal Toolkit",
      icon: Bridge,
      description: "We integrate the experience. You'll leave with a personal plan to apply these principles to your own goals and access to a community of practice.",
      color: "bg-purple-100 text-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How the 3-Session Lab Works
            </h2>
            <p className="text-xl text-slate-600">
              A carefully designed journey to transform your relationship with learning
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={session.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-50 rounded-2xl p-8 h-full">
                  {/* Session Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-slate-300">
                      {String(session.number).padStart(2, '0')}
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${session.color}`}>
                      <session.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Session Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Session {session.number}: {session.title}
                  </h3>

                  {/* Session Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {/* Connector Line (hidden on mobile) */}
                {index < sessions.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300 transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-slate-700">
                <strong className="text-slate-900">Duration:</strong> Three 90-minute sessions over three weeks
              </p>
              <p className="text-slate-700 mt-2">
                <strong className="text-slate-900">Format:</strong> Live, interactive sessions with a small cohort (8-12 participants)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}