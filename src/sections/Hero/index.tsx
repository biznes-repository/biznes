"use client"

import { Calendar } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Scale Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
              Digital Marketing Excellence
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We help ambitious businesses grow through data-driven marketing strategies,
            conversion optimization, and performance-focused campaigns that deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </a>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex cursor-pointer items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Explore Our Services
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Clients Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">3.2x</div>
              <div className="text-gray-600 text-sm">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero