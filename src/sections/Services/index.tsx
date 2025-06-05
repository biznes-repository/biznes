"use client"

import { Zap, Target, BarChart3, Users, Globe, Smartphone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Digital Strategy & Consulting",
      description: "Comprehensive digital transformation strategies tailored to your business goals and market positioning.",
      features: ["Market Analysis", "Competitor Research", "Growth Planning", "ROI Optimization"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Marketing",
      description: "Data-driven advertising campaigns across Google, Facebook, and other platforms with measurable results.",
      features: ["PPC Management", "Social Media Ads", "Retargeting", "Campaign Optimization"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Conversion Rate Optimization",
      description: "Transform your website visitors into customers through systematic testing and optimization.",
      features: ["A/B Testing", "Landing Page Optimization", "User Experience Analysis", "Funnel Optimization"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Content Marketing",
      description: "Engaging content strategies that build brand authority and drive organic traffic.",
      features: ["Content Strategy", "Blog Writing", "Video Marketing", "Email Campaigns"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO & Web Development",
      description: "Technical SEO optimization and custom web development for maximum online visibility.",
      features: ["Technical SEO", "Website Development", "Performance Optimization", "Mobile Optimization"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Marketing Automation",
      description: "Streamline your marketing processes with intelligent automation and lead nurturing systems.",
      features: ["Email Automation", "Lead Scoring", "CRM Integration", "Workflow Optimization"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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