"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search, Filter } from "lucide-react"
import { AnimatedSection } from "../../components/ui/animated-section"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { CardHover } from "../../components/ui/card-hover"

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [visiblePrograms, setVisiblePrograms] = useState(6)

  const programs = [
    {
      title: "Environmental Advocacy & Conservation",
      description:
        "Dedicated to promoting sustainable practices, environmental protection, and climate resilience within communities.",
      image: "/envi.jpg",
      link: "/programs/environmental-advocacy-and-conservation",
      category: "environment",
      featured: true,
    },
    {
      title: "Community Paralegal Services",
      description: "Providing legal awareness, guidance, and advocacy to empower communities in accessing justice.",
      image: "/vocational-training.jpg",
      link: "/programs/community-paralegal-services",
      category: "legal",
      featured: true,
    },
    {
      title: "Disaster Management",
      description:
        "Providing expertise in disaster preparedness, response, and recovery to mitigate risks and protect communities.",
      image: "/disaster.jpg",
      link: "/programs/disaster-management",
      category: "emergency",
      featured: false,
    },
    {
      title: "Women Supporting the Boychild",
      description:
        "Empowering the boychild through mentorship, guidance, and advocacy while fostering a balanced and inclusive society.",
      image: "/collabo-support.jpg",
      link: "/programs/women-supporting-boychild",
      category: "youth",
      featured: true,
    },
    {
      title: "Contact Tracing for Lost Children",
      description:
        "Systematically tracking and identifying lost children to ensure their safe return and reintegration.",
      image: "/boy-child.jpg",
      link: "/programs/contact-tracing-for-lost-children",
      category: "youth",
      featured: false,
    },
    {
      title: "Vacation Camps & Vocational Training",
      description:
        "Adventure with relaxation of minds, uniting the society, and equipping individuals with skills to secure employment and rebuild their lives.",
      image: "/fun.jpg",
      link: "/programs/vacation-camps-and-vocational-training",
      category: "education",
      featured: true,
    },
  ]

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "all" || program.category === activeFilter
    return matchesSearch && matchesFilter
  })

  const loadMore = () => {
    setVisiblePrograms((prev) => Math.min(prev + 3, filteredPrograms.length))
  }

  useEffect(() => {
    setVisiblePrograms(6)
  }, [searchTerm, activeFilter])

  return (
    <main className="flex-1 pt-16">
      <title>Our Programs - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/programs-hero.jpg"
        title="Our Programs"
        subtitle="Making a difference, one life at a time"
        height="h-[60vh]"
        overlayOpacity={0.6}
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-4 pl-12 rounded-full border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none transition-all shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="text-gray-600 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter:
                </span>
                {["all", "environment", "legal", "emergency", "youth", "education"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter
                        ? "bg-green-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Programs */}
      {activeFilter === "all" && searchTerm === "" && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                <span className="relative inline-block">
                  Featured Programs
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600"></span>
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs
                .filter((program) => program.featured)
                .slice(0, 3)
                .map((program, index) => (
                  <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                    <CardHover className="bg-white rounded-xl overflow-hidden shadow-md h-full border border-gray-100">
                      <div className="relative h-56">
                        <Image
                          src={program.image || "/placeholder.svg?height=250&width=400"}
                          alt={program.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <Link
                          href={program.link}
                          className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                        >
                          Learn More
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardHover>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Programs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              <span className="relative inline-block">
                {activeFilter === "all"
                  ? "All Programs"
                  : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Programs`}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600"></span>
              </span>
            </h2>
          </AnimatedSection>

          {filteredPrograms.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.slice(0, visiblePrograms).map((program, index) => (
                  <AnimatedSection key={index} delay={0.1 * ((index % 3) + 1)}>
                    <CardHover className="bg-white rounded-xl overflow-hidden shadow-md h-full border border-gray-100">
                      <div className="relative h-56">
                        <Image
                          src={program.image || "/placeholder.svg?height=250&width=400"}
                          alt={program.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                            {program.title}
                          </h3>
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {program.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <Link
                          href={program.link}
                          className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                        >
                          Learn More
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardHover>
                  </AnimatedSection>
                ))}
              </div>

              {visiblePrograms < filteredPrograms.length && (
                <AnimatedSection delay={0.4}>
                  <div className="text-center mt-12">
                    <button
                      onClick={loadMore}
                      className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
                    >
                      Load More Programs
                    </button>
                  </div>
                </AnimatedSection>
              )}
            </>
          ) : (
            <AnimatedSection>
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No programs found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">How to Get Involved</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Your support can make a significant impact on the lives of those we serve. Join us in our mission to
                create positive change.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Donate</h3>
                <p className="text-white/80 text-center mb-6">
                  Your financial contribution helps fund our programs and initiatives, allowing us to reach more people
                  in need.
                </p>
                <div className="text-center">
                  <Link
                    href="/donations"
                    className="inline-block bg-white text-green-600 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Volunteer</h3>
                <p className="text-white/80 text-center mb-6">
                  Share your time and skills to make a direct impact in our community programs and events.
                </p>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-green-600 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Join Us
                  </Link>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Become a Member</h3>
                <p className="text-white/80 text-center mb-6">
                  Join our community of supporters and enjoy exclusive benefits while supporting our cause.
                </p>
                <div className="text-center">
                  <Link
                    href="/membership"
                    className="inline-block bg-white text-green-600 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

