"use client"

import { ArrowLeft, Linkedin, Mail } from 'lucide-react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  const team = [
    {
      name: "Corbi",
      role: "Co-Founder & Strategic Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "With over 8 years in digital marketing, Corbi specializes in growth strategy and performance optimization. He's helped scale businesses from startup to $10M+ revenue through data-driven marketing approaches.",
      linkedin: "#",
      email: "corbi@biznes.com"
    },
    {
      name: "Landi",
      role: "Co-Founder & Creative Director",
      image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Landi brings 7+ years of experience in brand development and creative strategy. She leads our creative team and ensures every campaign reflects brand excellence while driving conversions.",
      linkedin: "#",
      email: "landi@biznes.com"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Back to Home */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet the Team Behind
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                BIZNES
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Two passionate entrepreneurs who combined their expertise to create a marketing agency that delivers exceptional results for ambitious businesses.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {team.map((member, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-2xl object-cover shadow-xl"
                      />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h2>

                      <p className="text-xl text-blue-600 mb-6 font-semibold">
                        {member.role}
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-8">
                        {member.bio}
                      </p>

                      <div className="flex justify-center lg:justify-start space-x-4">
                        <a
                          href={member.linkedin}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                BIZNES was founded on a simple belief: every business deserves marketing that actually works. After years of seeing companies struggle with agencies that promised the world but delivered mediocre results, Corbi and Landi decided to build something different.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Our approach is rooted in data, driven by creativity, and focused on one thing: your success. We don't just run campaigns we become strategic partners in your growth journey. Every strategy is custom-built, every campaign is meticulously optimized, and every result is transparently reported.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Today, we're proud to have helped hundreds of businesses achieve remarkable growth, from startups finding their first customers to established companies breaking into new markets. Our success is measured by yours, and that's exactly how we like it.
              </p>
            </div>

            <div className="text-center mt-16">
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Work With Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
