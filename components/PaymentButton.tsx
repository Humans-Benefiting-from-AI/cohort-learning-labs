'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'

interface PaymentButtonProps {
  email: string
  name: string
  disabled?: boolean
  className?: string
}

export default function PaymentButton({ email, name, disabled = false, className = '' }: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    if (!email || !name) {
      alert('Please provide your email and name')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      const { url, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('There was an error processing your payment. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={disabled || isLoading || !email || !name}
      className={`inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          Enroll Now - $247
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  )
}