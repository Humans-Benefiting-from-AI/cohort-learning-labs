'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Clock, DollarSign, Users, Video } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
  icon: React.ElementType
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQ[] = [
    {
      question: "How much time is required?",
      answer: "The workshop is three 90-minute sessions over three weeks. There is no homework, only a commitment to participate fully during the sessions.",
      icon: Clock
    },
    {
      question: "What is the cost?",
      answer: "The price for the full Lab experience will be around $247. Those on the waitlist will receive an exclusive founding-member discount.",
      icon: DollarSign
    },
    {
      question: "I'm not in a \"teaching\" role. Is this for me?",
      answer: "Absolutely. The impediments of Bayshan and Kapdan affect anyone who is trying to learn, whether it's a new software, a management skill, or a creative pursuit. This lab is for learners.",
      icon: Users
    },
    {
      question: "What if I can't make a live session?",
      answer: "Sessions will be recorded for participants, but the real value is in the live, facilitated experience. We strongly encourage you to attend live.",
      icon: Video
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about the Learning Impediments Lab
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Have another question?
              </h3>
              <p className="text-slate-600 mb-4">
                Join the waitlist and we'll send you more details as we get closer to launch.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Join the Waitlist
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}