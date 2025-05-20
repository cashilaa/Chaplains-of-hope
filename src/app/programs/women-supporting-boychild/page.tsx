"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Users, Brain, BookOpen, MessageSquare, Building, ChevronRight } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"
import { AnimatedSection } from "../../../components/ui/animated-section"
import { ParallaxHero } from "../../../components/ui/parallax-hero"
import { CardHover } from "../../../components/ui/card-hover"
import ProgramGallery from "@/app/components/program-gallery"

export default function WomenSupportingBoychild() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const focusAreas = [
    {
      title: "Mentorship & Role Models",
      icon: <Users className="h-6 w-6 text-green-600" />,
      description: "Providing positive male and female mentors to guide boys in their personal and academic journeys.",
      details:
        "Our mentorship program pairs boys with carefully selected adult mentors who provide guidance, support, and positive role modeling. These relationships help boys develop healthy attitudes, behaviors, and aspirations.",
    },
    {
      title: "Emotional Well-being & Mental Health",
      icon: <Brain className="h-6 w-6 text-green-600" />,
      description:
        "Addressing challenges such as depression, identity crises, and societal pressures through counseling and support groups.",
      details:
        "We provide safe spaces for boys to express their emotions and concerns, along with professional counseling services to address mental health challenges. Our approach emphasizes that seeking help is a sign of strength, not weakness.",
    },
    {
      title: "Education & Life Skills Training",
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      description: "Equipping boys with essential skills, values, and financial literacy for a better future.",
      details:
        "Beyond academic support, we teach practical life skills including financial literacy, conflict resolution, decision-making, and personal responsibility. These skills prepare boys for independence and success in adulthood.",
    },
    {
      title: "Challenging Gender Stereotypes",
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      description:
        "Advocating for balanced discussions on gender issues and ensuring boys are not neglected in empowerment efforts.",
      details:
        "We promote healthy discussions about masculinity and gender roles, encouraging boys to develop their own authentic identity beyond restrictive stereotypes. Our approach emphasizes respect, equality, and healthy relationships.",
    },
    {
      title: "Community Engagement",
      icon: <Building className="h-6 w-6 text-green-600" />,
      description: "Working with families, schools, and institutions to create an environment where boys thrive.",
      details:
        "We engage with parents, teachers, and community leaders to create supportive environments for boys. This collaborative approach ensures consistent messaging and support across all areas of a boy's life.",
    },
  ]

  const testimonials = [
    {
      quote:
        "The mentorship program has completely transformed my son. He's more confident, focused on his studies, and has a much more positive outlook on life.",
      name: "Sarah M.",
      role: "Parent",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a teacher, I've seen remarkable changes in the boys who participate in this program. Their academic performance improves, and they show greater respect for themselves and others.",
      name: "James K.",
      role: "High School Teacher",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Being part of this program helped me understand that I can be strong without being aggressive, and that it's okay to ask for help when I need it.",
      name: "David N.",
      role: "Program Participant, Age 16",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main className="flex-1 pt-16">
      <title>Reintegration of the Boychild - Chaplains of Hope</title>

      <ParallaxHero
        backgroundImage="/placeholder.svg?height=800&width=1600"
        title="Women Supporting the Boychild"
        subtitle="Empowering the boychild through mentorship, guidance, and advocacy while fostering a balanced and inclusive society"
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
              Reintegration of the Boychild
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              Empowering the boychild through mentorship, guidance, and advocacy while fostering a balanced and
              inclusive society.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-lg -z-10"></div>
                <Image
                  src="/collabo-support.jpg?height=500&width=700"
                  alt="Women Supporting the Boychild"
                  width={700}
                  height={500}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="left">
              <h2 className="text-2xl font-semibold mb-6 text-green-700 border-l-4 border-green-600 pl-4">
                Our Approach
              </h2>
              <p className="text-gray-700 mb-6">
                Our "Women Supporting the Boychild" initiative recognizes that empowering boys is essential for creating
                a balanced and healthy society. We believe that women play a crucial role in nurturing, guiding, and
                advocating for boys, complementing the role of male mentors and role models.
              </p>
              <p className="text-gray-700 mb-6">
                This program addresses the unique challenges boys face in today's world, including societal pressures,
                identity formation, and emotional development. By providing mentorship, education, and support, we help
                boys develop into confident, respectful, and responsible men.
              </p>
              <p className="text-gray-700">
                Our approach is holistic, engaging not only the boys themselves but also their families, schools, and
                communities to create an environment where boys can thrive and reach their full potential.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-semibold mb-8 text-green-700 border-l-4 border-green-600 pl-4">
              Key Focus Areas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <CardHover className="bg-white p-6 rounded-xl h-full border border-gray-100 hover:border-green-200">
                  <div className="bg-green-50 p-3 rounded-full inline-block mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <p className="text-gray-500 text-sm">{area.details}</p>
                </CardHover>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why This Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Addressing the Boy Crisis</h4>
                  <p className="text-gray-600 mb-4">
                    Boys face unique challenges in today's world, including higher rates of school dropout, behavioral
                    issues, and mental health concerns. Our program directly addresses these challenges through targeted
                    interventions and support.
                  </p>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Breaking Negative Cycles</h4>
                  <p className="text-gray-600">
                    By providing positive guidance and role models, we help break cycles of negative behavior and poor
                    decision-making that can lead to lifelong consequences. Our approach emphasizes prevention rather
                    than remediation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Building a Balanced Society</h4>
                  <p className="text-gray-600 mb-4">
                    True gender equality means supporting both girls and boys to reach their full potential. Our program
                    complements girl empowerment initiatives to create a more balanced and harmonious society.
                  </p>
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Creating Future Leaders</h4>
                  <p className="text-gray-600">
                    By investing in boys today, we are developing the responsible, compassionate, and capable leaders of
                    tomorrow. Our program instills values of respect, integrity, and service that benefit the entire
                    community.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Testimonials</h3>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-12">
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-all duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="flex flex-col md:flex-row items-center gap-6 py-4">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-green-100 transform scale-110 animate-pulse-slow"></div>
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={100}
                              height={100}
                              className="rounded-full border-4 border-white shadow-lg object-cover z-10 relative"
                            />
                          </div>
                          <div>
                            <svg
                              className="w-10 h-10 text-green-100 mb-4"
                              fill="currentColor"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 8c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4v-4zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4v-4z" />
                            </svg>
                            <p className="text-gray-600 mb-4 italic leading-relaxed">{testimonial.quote}</p>
                            <p className="font-semibold text-gray-800">{testimonial.name}</p>
                            <p className="text-green-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeTestimonial === index ? "bg-green-600 w-6" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Share Your Story</h3>
              <p className="text-gray-600 mb-6">
                Have you or a boy in your life benefited from our program? Share your photos and testimonials to inspire
                others.
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
              <p className="text-gray-600">Support our mission to empower and guide boys</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Become a Mentor
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

