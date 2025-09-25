'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, BookOpen, Brain } from 'lucide-react'

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            The Problem We Ignore
          </h2>

          <div className="text-lg text-slate-600 space-y-6 mb-12">
            <p>
              You know the feeling. That hesitation to ask a "stupid" question. The frustration when a new skill
              doesn't come easily. The inner critic that says you're not cut out for this.
            </p>

            <p>
              For centuries, a simple wisdom has outlined the core problem:
            </p>

            <div className="bg-slate-50 rounded-lg p-8 my-8">
              <div className="text-2xl font-bold text-slate-800 mb-2" dir="rtl" lang="he">
                אין הביישן לומד, אין הקפדן מלמד
              </div>
              <div className="text-xl italic text-slate-700">
                "The shy one cannot learn; the strict one cannot teach."
              </div>
            </div>

            <p>
              We experience this as <strong className="text-red-600">Shame (Bayshan)</strong> and{' '}
              <strong className="text-orange-600">Rigidity (Kapdan)</strong>. They are the silent killers of
              curiosity and growth. Most learning environments ignore them.
            </p>

            <p className="text-2xl font-semibold text-slate-900">
              We put them at the center.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Shame (Bayshan)</h3>
              <p className="text-slate-600">
                The fear of looking foolish that stops us from asking questions and taking learning risks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Rigidity (Kapdan)</h3>
              <p className="text-slate-600">
                The inflexible mindset that insists on being "right" and blocks openness to new perspectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Solution</h3>
              <p className="text-slate-600">
                A safe laboratory to identify, name, and transform these impediments into learning energy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}