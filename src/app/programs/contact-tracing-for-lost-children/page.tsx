"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Smartphone, Users, Shield, Building, ChevronRight, Clock } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"
import { AnimatedSection } from "../../../components/ui/animated-section"
import { ParallaxHero } from "../../../components/ui/parallax-hero"
import { CardHover } from "../../../components/ui/card-hover"
import ProgramGallery from "@/app/components/program-gallery"

export default function ContactTracingForLostChildren() {
  const [expandedArea, setExpandedArea] = useState<number | null>(null)

  const focusAreas = [
    {
      title: "Investigation & Information Gathering",
      icon: <Search className="h-6 w-6 text-green-600" />,
      description: "Collecting crucial details, such as last known locations, family information, and potential leads.",
      details:
        "Our trained investigators work closely with families to gather comprehensive information about missing children. We document physical descriptions, habits, frequented locations, and recent activities to create a detailed profile that aids in the search process.",
    },
    {
      title: "Surveillance & Digital Footprints",
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      description: "Analyzing security footage, mobile data, and online activity to track lost children.",
      details:
        "We utilize technology to trace digital footprints, including social media activity, phone records, and electronic transactions. Our team also reviews CCTV footage from relevant locations and works with technology partners to enhance search capabilities.",
    },
    {
      title: "Witness Interviews & Community Alerts",
      icon: <Users className="h-6 w-6 text-green-600" />,
      description: "Engaging the public, local businesses, and transport networks to widen the search scope.",
      details:
        "We conduct systematic interviews with potential witnesses and distribute alerts through community networks, social media, and local media outlets. This community-based approach significantly increases the chances of locating missing children.",
    },
    {
      title: "Law Enforcement & Child Protection Coordination",
      icon: <Shield className="h-6 w-6 text-green-600" />,
      description: "Partnering with authorities to conduct thorough investigations and facilitate safe recoveries.",
      details:
        "We maintain strong relationships with law enforcement agencies, child protection services, and other relevant authorities. This collaboration ensures that cases are officially documented and that appropriate resources are allocated to the search efforts.",
    },
    {
      title: "Reintegration & Support Services",
      icon: <Building className="h-6 w-6 text-green-600" />,
      description: "Providing psychological support, shelter, and rehabilitation for recovered children.",
      details:
        "Once a child is found, our work continues with comprehensive support services including trauma counseling, family mediation, and assistance with reintegration. We address the underlying issues that led to the separation and work to prevent recurrence.",
    },
    {
      title: "Prevention & Public Awareness",
      icon: <Clock className="h-6 w-6 text-green-600" />,
      description: "Educating communities on child safety, abduction prevention, and emergency response measures.",
      details:
        "We conduct regular workshops and awareness campaigns to educate communities about child safety. These preventive measures include teaching children about personal safety, helping families create emergency plans, and training community members to respond effectively to missing child situations.",
    },
  ]

  const toggleExpand = (index: number) => {
    if (expandedArea === index) {
      setExpandedArea(null)
    } else {
      setExpandedArea(index)
    }
  }

  return (
    <main className="flex-1 pt-16">
      <title>Contact Tracing for Lost Children - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/placeholder.svg?height=800&width=1600"
        title="Contact Tracing for Lost Children"
        subtitle="Systematically tracking and identifying lost children to ensure their safe return and reintegration"
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
              Contact Tracing for Lost Children
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Systematically tracking and identifying lost children to ensure their safe return and reintegration.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 border-l-4 border-green-600 pl-4">
              Key Focus Areas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              {focusAreas.slice(0, 3).map((area, index) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <CardHover
                    className={`bg-white p-5 rounded-xl border transition-all duration-300 ${
                      expandedArea === index ? "border-green-300 shadow-md" : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-start cursor-pointer" onClick={() => toggleExpand(index)}>
                      <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0">{area.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{area.title}</h3>
                        <p className="text-gray-600 text-sm">{area.description}</p>

                        {expandedArea === index && (
                          <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 animate-fade-in">
                            {area.details}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHover>
                </AnimatedSection>
              ))}
            </div>

            <div className="space-y-4">
              {focusAreas.slice(3).map((area, index) => (
                <AnimatedSection key={index + 3} delay={0.1 * (index + 4)}>
                  <CardHover
                    className={`bg-white p-5 rounded-xl border transition-all duration-300 ${
                      expandedArea === index + 3 ? "border-green-300 shadow-md" : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-start cursor-pointer" onClick={() => toggleExpand(index + 3)}>
                      <div className="bg-green-50 p-3 rounded-full mr-4 flex-shrink-0">{area.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{area.title}</h3>
                        <p className="text-gray-600 text-sm">{area.description}</p>

                        {expandedArea === index + 3 && (
                          <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 animate-fade-in">
                            {area.details}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHover>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.7}>
            <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-green-700">Our Process</h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-200 hidden md:block"></div>
                <div className="space-y-12">
                  {[
                    {
                      step: 1,
                      title: "Report & Initial Assessment",
                      description:
                        "We gather detailed information about the missing child and assess the situation's urgency.",
                    },
                    {
                      step: 2,
                      title: "Investigation & Search Coordination",
                      description:
                        "Our team works with authorities and community networks to implement a comprehensive search strategy.",
                    },
                    {
                      step: 3,
                      title: "Recovery & Verification",
                      description:
                        "When a child is located, we verify their identity and ensure they're safe before proceeding.",
                    },
                    {
                      step: 4,
                      title: "Reintegration & Follow-up",
                      description:
                        "We provide support services to help the child reintegrate and address underlying issues.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start relative">
                      <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold z-10 flex-shrink-0 md:mr-8">
                        {item.step}
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm md:ml-0 ml-4 flex-grow">
                        <h4 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Help us raise awareness by sharing success stories and photos from our contact tracing efforts.
              </p>
              <ImageUploadForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <ProgramGallery />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Emergency Contact</h2>
              <p className="text-gray-600">If you need to report a missing child, please contact us immediately</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center text-2xl font-bold text-green-600 mb-4">(+245) 728620614</div>
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

