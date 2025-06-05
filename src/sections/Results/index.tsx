"use client"

import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

const Results = () => {
  const results = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      metric: "247%",
      description: "Increase in Revenue",
      details: "Within 12 months of implementing our comprehensive digital strategy"
    },
    {
      icon: <Users className="h-8 w-8" />,
      metric: "156%",
      description: "Growth in Lead Generation",
      details: "High-quality leads through optimized funnels and targeted campaigns"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      metric: "4.8x",
      description: "Return on Ad Spend",
      details: "Achieved through data-driven optimization and strategic campaign management"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      metric: "67%",
      description: "Faster Sales Cycle",
      details: "Streamlined conversion process and improved customer journey"
    }
  ]

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from our client partnerships. These are the kind of results we consistently deliver through our strategic approach to digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {result.icon}
              </div>

              <div className="text-4xl font-bold text-gray-900 mb-2">
                {result.metric}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {result.description}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {result.details}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              TE Success Story
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">247%</div>
                <div className="text-gray-600">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">156%</div>
                <div className="text-gray-600">Lead Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8x</div>
                <div className="text-gray-600">ROAS</div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Through our comprehensive digital marketing strategy, TE achieved remarkable growth across all key metrics. Our approach included conversion rate optimization, strategic PPC campaigns, and advanced marketing automation that transformed their online presence and business performance.
            </p>

            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Get Similar Results
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results