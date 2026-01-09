// NDS-Style FAQ Section
// Clean, expandable Q&A format

'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  headline?: string
  items: FAQItem[]
  variant?: 'light' | 'cream'
}

export function FAQSection({
  headline = 'Frequently Asked Questions',
  items,
  variant = 'cream'
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const bgClass = variant === 'cream' ? 'bg-warm-cream' : 'bg-white'

  return (
    <section className={`${bgClass} py-20 md:py-32`}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">
          {headline}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-black/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="font-serif text-xl md:text-2xl pr-8">
                  {item.question}
                </span>
                <span className="text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-6 text-lg leading-relaxed opacity-80">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
