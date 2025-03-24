"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Tent, Briefcase, ChevronRight, Calendar, MapPin, Users } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"
import { AnimatedSection } from "../../../components/ui/animated-section"
import { ParallaxHero } from "../../../components/ui/parallax-hero"
import { CardHover } from "../../../components/ui/card-hover"
import ProgramGallery from "@/app/components/program-gallery"

export default function VacationCampsAndVocationalTraining() {
  const [activeSection, setActiveSection] = useState("camps")

  const upcomingCamps = [
    {
      title: "Summer Adventure Camp",
      date: "July 15-22, 2023",
      location: "Nairobi National Park",
      ageGroup: "10-15 years",
      spots: "25 spots available",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Youth Leadership Retreat",
      date: "August 5-12, 2023",
      location: "Lake Naivasha",
      ageGroup: "16-20 years",
      spots: "20 spots available",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Environmental Conservation Camp",
      date: "December 10-17, 2023",
      location: "Mount Kenya Region",
      ageGroup: "12-18 years",
      spots: "30 spots available",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const trainingPrograms = [
    {
      title: "Carpentry & Woodworking",
      duration: "3 months",
      schedule: "Weekdays, 9am-3pm",
      requirements: "No prior experience needed",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Digital Skills & Computer Literacy",
      duration: "2 months",
      schedule: "Weekdays, 2pm-5pm",
      requirements: "Basic reading and writing skills",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Entrepreneurship & Business Management",
      duration: "6 weeks",
      schedule: "Weekends, 9am-4pm",
      requirements: "Basic math skills",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Welding & Metalwork",
      duration: "4 months",
      schedule: "Weekdays, 8am-2pm",
      requirements: "18+ years old",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="flex-1 pt-16">
      <title>Vacation Camps & Vocational Training - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/placeholder.svg?height=800&width=1600"
        title="Vacation Camps & Vocational Training"
        subtitle="Adventure with relaxation of minds, uniting the society, and equipping individuals with skills for a better future"
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
              Vacation Camps & Vocational Training
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Adventure with relaxation of minds, uniting the society, and equipping individuals with skills to secure
              employment and rebuild their lives.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveSection("camps")}
              className={`flex items-center px-6 py-4 font-medium text-lg transition-colors ${
                activeSection === "camps"
                  ? "border-b-2 border-green-600 text-green-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Tent className="mr-2 h-5 w-5" />
              Vacation Camps
            </button>
            <button
              onClick={() => setActiveSection("training")}
              className={`flex items-center px-6 py-4 font-medium text-lg transition-colors ${
                activeSection === "training"
                  ? "border-b-2 border-green-600 text-green-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Vocational Training
            </button>
          </div>

          {activeSection === "camps" ? (
            <>
              <AnimatedSection delay={0.2}>
                <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-12">
                  <h2 className="text-2xl font-semibold mb-6 text-green-700">Vacation Camps</h2>
                  <p className="text-gray-700 mb-6">
                    Our vacation camps provide a safe and enriching environment for children and youth to relax, learn,
                    and build social connections. These camps combine fun activities with educational components to
                    foster personal growth.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">Camp Activities</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Team-building activities and sports</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Arts and creative expression</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Environmental awareness and conservation projects</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Cultural exchange and community service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Leadership development and life skills training</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Builds confidence and social skills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">
                            Provides a safe and structured environment during school breaks
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Fosters appreciation for nature and the environment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Develops leadership and teamwork abilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Creates lasting memories and friendships</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Upcoming Camps</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {upcomingCamps.map((camp, index) => (
                    <CardHover
                      key={index}
                      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image src={camp.image || "/placeholder.svg"} alt={camp.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-3 text-gray-800">{camp.title}</h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-green-600" />
                            <span>{camp.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-green-600" />
                            <span>{camp.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2 text-green-600" />
                            <span>{camp.ageGroup}</span>
                          </div>
                        </div>
                        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                          {camp.spots}
                        </div>
                      </div>
                    </CardHover>
                  ))}
                </div>
              </AnimatedSection>
            </>
          ) : (
            <>
              <AnimatedSection delay={0.2}>
                <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-12">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-700">Vocational Training</h2>
                  <p className="text-gray-700 mb-6">
                    Our vocational training programs focus on equipping individuals, particularly ex-convicts and
                    at-risk youth, with practical skills that enhance their employability and self-sufficiency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">Training Areas</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">
                            Technical skills training in carpentry, welding, and mechanics
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Digital literacy and computer skills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Entrepreneurship and business management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Job placement assistance and career counseling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Life skills and financial literacy</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">Program Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Practical, hands-on training in marketable skills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Mentorship from experienced professionals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Certification upon program completion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Job placement support and networking opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">•</span>
                          <span className="text-gray-600">Follow-up support for graduates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Current Training Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {trainingPrograms.map((program, index) => (
                    <CardHover
                      key={index}
                      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-3 text-gray-800">{program.title}</h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start text-gray-600">
                            <span className="font-medium mr-2">Duration:</span>
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-start text-gray-600">
                            <span className="font-medium mr-2">Schedule:</span>
                            <span>{program.schedule}</span>
                          </div>
                          <div className="flex items-start text-gray-600">
                            <span className="font-medium mr-2">Requirements:</span>
                            <span>{program.requirements}</span>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </CardHover>
                  ))}
                </div>
              </AnimatedSection>
            </>
          )}

          <AnimatedSection delay={0.6}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Impact</h3>
              <p className="text-gray-700 mb-6">
                Our integrated approach to vacation camps and vocational training has helped hundreds of individuals
                develop new skills, build confidence, and create pathways to sustainable livelihoods. By combining
                recreational activities with practical skills development, we create a holistic environment that
                nurtures both personal growth and professional development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-gray-600">Youth served through camps</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
                  <p className="text-gray-600">Vocational training graduates</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                  <p className="text-gray-600">Employment rate for graduates</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Your Experience</h3>
              <p className="text-gray-600 mb-6">
                Have you participated in our camps or training programs? Share your photos and testimonials to inspire
                others.
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
              <p className="text-gray-600">Join our programs or support our initiatives</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Register for a Program
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

