"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, TreePine, Droplets, FileText, Cloud, Users, ChevronRight } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"
import { AnimatedSection } from "../../../components/ui/animated-section"
import { ParallaxHero } from "../../../components/ui/parallax-hero"
import { CardHover } from "../../../components/ui/card-hover"
import ProgramGallery from "@/app/components/program-gallery"

export default function EnvironmentalAdvocacyAndConservation() {
  const [activeTab, setActiveTab] = useState("initiatives")

  const focusAreas = [
    {
      title: "Awareness Campaigns",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      description:
        "Educating communities on environmental conservation, climate change, and the importance of sustainable practices.",
    },
    {
      title: "Conservation Initiatives",
      icon: <TreePine className="h-6 w-6 text-green-600" />,
      description:
        "Engaging in afforestation, reforestation, and wildlife conservation efforts to combat deforestation and habitat destruction.",
    },
    {
      title: "Pollution Control",
      icon: <Droplets className="h-6 w-6 text-green-600" />,
      description:
        "Addressing air, water, and land pollution through waste management, recycling programs, and clean energy advocacy.",
    },
    {
      title: "Policy Advocacy",
      icon: <FileText className="h-6 w-6 text-green-600" />,
      description:
        "Collaborating with policymakers to promote and enforce environmental regulations and sustainable resource management.",
    },
    {
      title: "Climate Resilience",
      icon: <Cloud className="h-6 w-6 text-green-600" />,
      description:
        "Implementing adaptive strategies to mitigate the effects of climate change, including renewable energy adoption and sustainable agriculture.",
    },
    {
      title: "Community-Led Projects",
      icon: <Users className="h-6 w-6 text-green-600" />,
      description: "Empowering local communities to take charge of conservation efforts and environmental stewardship.",
    },
  ]

  const initiatives = [
    {
      title: "Tree Planting Campaign",
      description:
        "Our annual tree planting initiative aims to restore degraded landscapes and increase forest cover in urban and rural areas.",
      impact: "10,000+ trees planted across 5 counties",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Clean Water Project",
      description:
        "Working to protect water sources, reduce pollution, and ensure communities have access to clean, safe water.",
      impact: "15 water sources protected, benefiting 5,000+ people",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Waste Management Program",
      description:
        "Implementing community-based waste collection, segregation, and recycling systems to reduce environmental pollution.",
      impact: "50% reduction in improper waste disposal in target communities",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const resources = [
    {
      title: "Environmental Education Toolkit",
      description:
        "A comprehensive resource for schools and community groups to teach environmental conservation principles.",
      type: "Educational Material",
    },
    {
      title: "Sustainable Living Guide",
      description:
        "Practical tips and strategies for individuals and families to reduce their environmental footprint.",
      type: "Guide",
    },
    {
      title: "Climate Change Adaptation Manual",
      description:
        "Detailed information on preparing for and adapting to climate change impacts at the community level.",
      type: "Manual",
    },
  ]

  return (
    <main className="flex-1 pt-16">
      <title>Environmental Advocacy & Conservation - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/placeholder.svg?height=800&width=1600"
        title="Environmental Advocacy & Conservation"
        subtitle="Dedicated to promoting sustainable practices, environmental protection, and climate resilience within communities"
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
              Environmental Advocacy & Conservation
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Dedicated to promoting sustainable practices, environmental protection, and climate resilience within
              communities.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 border-l-4 border-green-600 pl-4">
              Key Focus Areas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <CardHover className="bg-white p-6 rounded-xl h-full border border-gray-100 hover:border-green-200">
                  <div className="bg-green-50 p-3 rounded-full inline-block mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardHover>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mb-16">
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("initiatives")}
                  className={`px-6 py-3 font-medium text-lg transition-colors ${
                    activeTab === "initiatives"
                      ? "border-b-2 border-green-600 text-green-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Our Initiatives
                </button>
                <button
                  onClick={() => setActiveTab("resources")}
                  className={`px-6 py-3 font-medium text-lg transition-colors ${
                    activeTab === "resources"
                      ? "border-b-2 border-green-600 text-green-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Resources
                </button>
              </div>

              {activeTab === "initiatives" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {initiatives.map((initiative, index) => (
                    <CardHover key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                      <div className="relative h-48">
                        <Image
                          src={initiative.image || "/placeholder.svg"}
                          alt={initiative.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{initiative.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{initiative.description}</p>
                        <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium inline-block">
                          {initiative.impact}
                        </div>
                      </div>
                    </CardHover>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {resources.map((resource, index) => (
                    <CardHover key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                        {resource.type}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                      <button className="text-green-600 font-medium hover:underline inline-flex items-center text-sm">
                        Download Resource
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </CardHover>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-green-700">Environmental Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
                  <p className="text-gray-600">Trees planted</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <p className="text-gray-600">Water sources protected</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                  <p className="text-gray-600">Waste reduction</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                  <p className="text-gray-600">Community projects</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Environmental Photos</h3>
              <p className="text-gray-600 mb-6">
                Help us document our environmental conservation efforts by sharing photos from tree planting events,
                clean-up activities, or other initiatives.
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get Involved</h2>
              <p className="text-gray-600">Join our environmental conservation efforts</p>
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

