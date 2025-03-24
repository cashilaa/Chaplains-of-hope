"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, AlertTriangle, Truck, Home, Heart, Building, ChevronRight } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"
import { AnimatedSection } from "../../../components/ui/animated-section"
import { ParallaxHero } from "../../../components/ui/parallax-hero"
import { CardHover } from "../../../components/ui/card-hover"
import ProgramGallery from "@/app/components/program-gallery"

export default function DisasterManagement() {
  const [currentPhase, setCurrentPhase] = useState(0)

  const focusAreas = [
    {
      title: "Disaster Preparedness",
      icon: <AlertTriangle className="h-6 w-6 text-green-600" />,
      description: "Training individuals and communities on emergency response, evacuation plans, and risk assessment.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Emergency Response & Crisis Coordination",
      icon: <Truck className="h-6 w-6 text-green-600" />,
      description:
        "Mobilizing resources and coordinating efforts during disasters such as floods, droughts, fires, and pandemics.",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Post-Disaster Rehabilitation",
      icon: <Home className="h-6 w-6 text-green-600" />,
      description:
        "Assisting in rebuilding efforts, trauma counseling, and economic recovery for affected individuals.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Humanitarian Aid & Relief Distribution",
      icon: <Heart className="h-6 w-6 text-green-600" />,
      description: "Ensuring food, shelter, and medical assistance reach disaster-affected populations.",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Resilience-Building",
      icon: <Building className="h-6 w-6 text-green-600" />,
      description: "Strengthening infrastructure and community awareness to withstand future disasters.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
  ]

  const disasterCycle = [
    {
      phase: "Prevention & Mitigation",
      description: "Identifying risks and implementing measures to prevent disasters or reduce their impact",
      activities: ["Risk assessment", "Infrastructure strengthening", "Early warning systems", "Community education"],
    },
    {
      phase: "Preparedness",
      description: "Developing plans and resources to respond effectively when disasters occur",
      activities: ["Emergency planning", "Training & drills", "Resource stockpiling", "Communication systems"],
    },
    {
      phase: "Response",
      description: "Taking immediate action during and after a disaster to save lives and meet basic needs",
      activities: ["Search & rescue", "Emergency medical care", "Evacuation assistance", "Temporary shelter"],
    },
    {
      phase: "Recovery",
      description: "Rebuilding communities and restoring services after a disaster",
      activities: ["Infrastructure repair", "Psychosocial support", "Economic rehabilitation", "Community rebuilding"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % disasterCycle.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [disasterCycle.length])

  return (
    <main className="flex-1 pt-16">
      <title>Disaster Management - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/placeholder.svg?height=800&width=1600"
        title="Disaster Management"
        subtitle="Providing expertise in disaster preparedness, response, and recovery to mitigate risks and protect communities"
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
              Disaster Management
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Providing expertise in disaster preparedness, response, and recovery to mitigate risks and protect
              communities.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 border-l-4 border-green-600 pl-4">
              The Disaster Management Cycle
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <div className="relative mb-8 overflow-hidden">
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-3xl">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl overflow-hidden">
                      <div className="p-8 flex items-center justify-center">
                        <div className="w-full max-w-md">
                          <div className="relative">
                            {/* Circular progress indicator */}
                            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-8">
                              <div
                                className="h-full bg-green-600 transition-all duration-1000 ease-in-out"
                                style={{ width: `${((currentPhase + 1) / disasterCycle.length) * 100}%` }}
                              ></div>
                            </div>

                            <div className="text-center mb-6 min-h-[120px]">
                              <h3 className="text-2xl font-bold text-green-700 mb-2">
                                {disasterCycle[currentPhase].phase}
                              </h3>
                              <p className="text-gray-600 mb-4">{disasterCycle[currentPhase].description}</p>
                              <div className="flex flex-wrap justify-center gap-2">
                                {disasterCycle[currentPhase].activities.map((activity, idx) => (
                                  <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-center space-x-2">
                              {disasterCycle.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentPhase(idx)}
                                  className={`w-3 h-3 rounded-full transition-all ${
                                    currentPhase === idx ? "bg-green-600 w-6" : "bg-gray-300"
                                  }`}
                                ></button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 border-l-4 border-green-600 pl-4">
              Key Focus Areas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <CardHover className={`${area.color} p-6 rounded-xl h-full border border-gray-100`}>
                  <div className={`${area.iconColor} mb-4`}>{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardHover>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Community-Centered</h4>
                  <p className="text-gray-600 mb-4">
                    We believe that effective disaster management starts with empowering communities. Our approach
                    focuses on building local capacity, knowledge, and resilience to ensure communities can respond
                    effectively to disasters.
                  </p>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Collaborative</h4>
                  <p className="text-gray-600">
                    We work closely with government agencies, NGOs, and other stakeholders to coordinate efforts and
                    maximize impact. This collaborative approach ensures comprehensive coverage and efficient use of
                    resources.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Sustainable</h4>
                  <p className="text-gray-600 mb-4">
                    Our disaster management strategies incorporate long-term sustainability considerations, including
                    environmental protection and climate change adaptation, to build lasting resilience.
                  </p>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Inclusive</h4>
                  <p className="text-gray-600">
                    We ensure that disaster management efforts address the needs of all community members, with special
                    attention to vulnerable groups such as women, children, the elderly, and persons with disabilities.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Disaster Management Photos</h3>
              <p className="text-gray-600 mb-6">
                Help us document our disaster management efforts by sharing photos from training sessions, response
                activities, or community preparedness initiatives.
              </p>
              <ImageUploadForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <ProgramGallery />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get Involved</h2>
              <p className="text-gray-600">Join our disaster management team or support our initiatives</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Volunteer With Us
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

