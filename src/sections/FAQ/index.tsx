"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do you measure the success of marketing campaigns?",
      answer: "We use comprehensive analytics and KPI tracking including ROI, conversion rates, cost per acquisition, lifetime customer value, and revenue attribution. We provide detailed monthly reports with actionable insights and recommendations for continuous improvement."
    },
    {
      question: "What makes your agency different from others?",
      answer: "Our data-driven approach combined with creative excellence sets us apart. We focus on measurable results, provide transparent reporting, and maintain direct communication with decision-makers. Our team has proven experience scaling businesses from startup to enterprise level."
    },
    {
      question: "How long does it take to see results?",
      answer: "While some improvements can be seen within 30-60 days, significant results typically emerge within 3-6 months. We focus on sustainable, long-term growth rather than quick fixes. The timeline depends on your industry, competition, and current digital presence."
    },
    {
      question: "Do you work with businesses in all industries?",
      answer: "Yes, we work with businesses across various industries including e-commerce, SaaS, healthcare, finance, education, and more. Our strategies are customized based on industry best practices, target audience behavior, and market dynamics."
    },
    {
      question: "What is your typical client onboarding process?",
      answer: "Our onboarding includes a comprehensive audit of your current marketing efforts, competitor analysis, goal setting, strategy development, and implementation planning. This process typically takes 2-3 weeks to ensure we fully understand your business and market."
    },
    {
      question: "Can you help with both B2B and B2C marketing?",
      answer: "Absolutely! We have extensive experience in both B2B and B2C marketing. Our team understands the different buyer journeys, decision-making processes, and marketing channels that work best for each model."
    },
    {
      question: "What level of involvement do you need from our team?",
      answer: "We work collaboratively and can adapt to your preferred level of involvement. Typically, we need weekly check-ins with key stakeholders, access to necessary tools and data, and timely feedback on creative assets and strategic decisions."
    },
    {
      question: "Do you provide training for our internal team?",
      answer: "Yes, we offer training sessions and knowledge transfer to help your team understand and maintain the strategies we implement. This ensures long-term success and builds internal capabilities for ongoing growth."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Got questions?
          </h2>
          <p className="text-xl text-gray-600">
            We’re here to make things simple.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors duration-300"
            >
              <button
                className="w-full cursor-pointer px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ