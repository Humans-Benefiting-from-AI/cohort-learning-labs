'use client'

import { motion } from 'framer-motion'
import { Award, Book, Users, Lightbulb } from 'lucide-react'

export default function AboutGuideSection() {
  const credentials = [
    {
      icon: Users,
      title: "18+ Years",
      description: "Group facilitation expertise"
    },
    {
      icon: Book,
      title: "Academic Background",
      description: "Corporate training & community workshops"
    },
    {
      icon: Lightbulb,
      title: "Psychological Safety",
      description: "Expert in creating safe learning environments"
    },
    {
      icon: Award,
      title: "Proven Method",
      description: "Turning learning anxiety into learning energy"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About Your Guide
            </h2>
            <p className="text-xl text-slate-600">
              Meet the founder of Cohort Learning Labs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Photo and Name */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="relative inline-block mb-6">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                  <div className="w-56 h-56 bg-slate-300 rounded-xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-slate-500" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-3">
                  <Book className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                [Your Name]
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Founder, Cohort Learning Labs
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 lg:max-w-sm">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-slate-50 rounded-lg"
                  >
                    <credential.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-900">
                      {credential.title}
                    </div>
                    <div className="text-xs text-slate-600">
                      {credential.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  [Your Name] has spent <strong>18+ years</strong> studying and facilitating human learning in
                  corporate training, academic settings, and community workshops.
                </p>

                <p className="text-lg leading-relaxed">
                  The Lab is born from the conviction that <strong className="text-blue-600">creating psychological safety</strong> is
                  the most powerful thing we can do to unlock potential.
                </p>

                <p className="text-lg leading-relaxed">
                  This isn't theoretical—it's a <strong>practiced method</strong> for turning learning anxiety into learning energy.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mt-8">
                  <blockquote className="text-slate-700 italic">
                    "When we create truly safe spaces for learning, we don't just transfer knowledge—
                    we transform the learner's relationship with the unknown itself."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}