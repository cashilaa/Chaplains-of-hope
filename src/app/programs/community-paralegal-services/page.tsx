"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Scale, BookOpen, Users, Shield, Building, ChevronRight } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"
import { AnimatedSection } from "../../../components/ui/animated-section"
import { ParallaxHero } from "../../../components/ui/parallax-hero"
import { CardHover } from "../../../components/ui/card-hover"
import ProgramGallery from "@/app/components/program-gallery"

export default function CommunityParalegalServices() {
  const [activeTab, setActiveTab] = useState(0)

  const focusAreas = [
    {
      title: "Legal Rights Education",
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      description:
        "Conducting workshops and training sessions to inform individuals about their legal rights and responsibilities.",
    },
    {
      title: "Dispute Resolution & Mediation",
      icon: <Users className="h-6 w-6 text-green-600" />,
      description: "Offering conflict resolution services to help communities settle disputes amicably.",
    },
    {
      title: "Legal Aid Support",
      icon: <Scale className="h-6 w-6 text-green-600" />,
      description:
        "Assisting vulnerable individuals with documentation, court procedures, and representation where necessary.",
    },
    {
      title: "Human Rights Advocacy",
      icon: <Shield className="h-6 w-6 text-green-600" />,
      description:
        "Defending the rights of marginalized groups, including women, children, and persons with disabilities.",
    },
    {
      title: "Bridging the Gap with the Legal System",
      icon: <Building className="h-6 w-6 text-green-600" />,
      description: "Connecting communities with legal professionals, government institutions, and justice mechanisms.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % focusAreas.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [focusAreas.length])

  return (
    <main className="flex-1 pt-16">
      <title>Community Paralegal Services - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/placeholder.svg?height=800&width=1600"
        title="Community Paralegal Services"
        subtitle="Providing legal awareness, guidance, and advocacy to empower communities in accessing justice"
        height="h-[50vh]"
        overlayOpacity={0.6}
      />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/programs"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Programs</span>
        </Link>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              Community Paralegal Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Providing legal awareness, guidance, and advocacy to empower communities in accessing justice.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 border-l-4 border-green-600 pl-4">
              Key Focus Areas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex space-x-4 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                  {focusAreas.map((area, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                        activeTab === index
                          ? "bg-green-600 text-white shadow-md"
                          : "bg-white text-gray-700 hover:bg-green-50"
                      }`}
                    >
                      {area.title}
                    </button>
                  ))}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm min-h-[200px] transition-all duration-500">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-50 p-3 rounded-full mr-4">{focusAreas[activeTab].icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{focusAreas[activeTab].title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{focusAreas[activeTab].description}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="left">
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <CardHover key={index} className="bg-white p-5 rounded-xl border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0">{area.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{area.title}</h3>
                        <p className="text-gray-600 text-sm">{area.description}</p>
                      </div>
                    </div>
                  </CardHover>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5}>
            <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-gray-600">Legal consultations provided</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">20</div>
                  <p className="text-gray-600">Community workshops conducted</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <p className="text-gray-600">Successful dispute resolutions</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Your Experience</h3>
              <p className="text-gray-600 mb-6">
                Have you benefited from our Community Paralegal Services? Share your photos and testimonials to inspire
                others.
              </p>
              <ImageUploadForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <ProgramGallery />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get Involved</h2>
              <p className="text-gray-600">Join us in our mission to provide legal support to communities</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/donations"
                className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
              >
                Support This Program
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

