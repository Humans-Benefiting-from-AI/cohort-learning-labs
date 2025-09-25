'use client'

import { motion } from 'framer-motion'
import { Eye, Heart, Compass, Users } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Clarity",
      description: "A precise understanding of what actually gets in your way.",
      icon: Eye,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Courage",
      description: "The confidence to take learning risks and ask brave questions.",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "A Framework",
      description: "A lifelong lens for diagnosing and improving any learning environment.",
      icon: Compass,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Community",
      description: "Connection with a small cohort of peers on the same journey.",
      icon: Users,
      color: "bg-purple-100 text-purple-600"
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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What You'll Walk Away With
            </h2>
            <p className="text-xl text-slate-600">
              Four powerful outcomes that will transform how you approach learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${benefit.color}`}>
                  <benefit.icon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial-style quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <blockquote className="text-xl italic text-slate-700 mb-4">
                "Learning isn't just about acquiring new skills—it's about transforming how we relate to the unknown.
                When we name our impediments, we can finally move beyond them."
              </blockquote>
              <cite className="text-slate-500 font-medium">
                — The Learning Impediments Framework
              </cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}