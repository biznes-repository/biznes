"use client"

import { Zap, Target, BarChart3, Users, Globe, Smartphone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Creative Paid Ads Package",
      description: "We help brands with paid ads by:",
      features: [
        "Developing high-performing creative strategies",
        "Writing compelling ad scripts",
        "Finding and managing top-tier UGC creators",
        "Video editing and refining content when needed",
        "Reviewing and improving existing creatives"
      ],
      note: "We’re already strong here – we’ve seen what works (and what doesn’t) at Train Effective and we’re applying those lessons.",
      subheading: "The goal: Find winners. Scale profitably. No guesswork."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Organic Creator Hub",
      description: "Your brand, amplified. Organically We build and manage a network of creators who:",
      features: [
        "Promote the brand organically",
        "Act as consistent brand advocates",
        "Support the paid ads strategy with authentic content",
      ],
      note: "This goes hand-in-hand with paid ads but stands strong on its own too. It creates a flywheel of attention and credibility.",
      subheading: "The result: Long-term visibility, credibility, and compounding attention."
    },
    // {
    //   icon: <BarChart3 className="h-8 w-8" />,
    //   title: "Conversion Rate Optimization",
    //   description: "Transform your website visitors into customers through systematic testing and optimization.",
    //   features: ["A/B Testing", "Landing Page Optimization", "User Experience Analysis", "Funnel Optimization"]
    // },
    // {
    //   icon: <Users className="h-8 w-8" />,
    //   title: "Content Marketing",
    //   description: "Engaging content strategies that build brand authority and drive organic traffic.",
    //   features: ["Content Strategy", "Blog Writing", "Video Marketing", "Email Campaigns"]
    // },
    // {
    //   icon: <Globe className="h-8 w-8" />,
    //   title: "SEO & Web Development",
    //   description: "Technical SEO optimization and custom web development for maximum online visibility.",
    //   features: ["Technical SEO", "Website Development", "Performance Optimization", "Mobile Optimization"]
    // },
    // {
    //   icon: <Smartphone className="h-8 w-8" />,
    //   title: "Marketing Automation",
    //   description: "Streamline your marketing processes with intelligent automation and lead nurturing systems.",
    //   features: ["Email Automation", "Lead Scoring", "CRM Integration", "Workflow Optimization"]
    // }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our zone of Genius: Creative Growth Engine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 my-6 leading-relaxed">
                {service.note}
              </p>

              <p className="text-gray-600 my-6 font-semibold leading-relaxed">
                {service.subheading}
              </p>

              <a
                href={``}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services