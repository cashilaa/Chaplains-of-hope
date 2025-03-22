"use client"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import components from the correct location
import { Navbar } from "../components/ui/navbar"
import { Footer } from "../components/ui/footer"
import { ParallaxHero } from "../components/ui/parallax-hero"
import { AnimatedSection } from "../components/ui/animated-section"
import { CardHover } from "../components/ui/card-hover"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProgram, setCurrentProgram] = useState(0)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

  const testimonials = [
    {
      name: "John Doe",
      text: "Chaplains of Hope changed my life. Their support and guidance helped me rebuild my life after a difficult period.",
      image: "/muthiora.jpg",
    },
    {
      name: "Jane Smith",
      text: "I'm grateful for the support I received from this amazing organization. They truly care about making a difference in people's lives.",
      image: "/muthiora.jpg",
    },
    {
      name: "Mike Johnson",
      text: "The programs offered here are incredible and really supportive. The team goes above and beyond to ensure everyone feels valued and heard.",
      image: "/muthiora.jpg",
    },
  ]

  const programs = [
    {
      title: "Reintegration & Mentorship",
      description:
        "Helping individuals reintegrate into society through personalized mentorship programs, skill development, and community support networks.",
    },
    {
      title: "Children's Rights Advocacy",
      description:
        "Protecting and promoting children's rights through education, advocacy, and direct intervention to ensure every child has access to safety, education, and care.",
    },
    {
      title: "Community Paralegal Services",
      description:
        "Providing legal support to underserved communities, helping individuals navigate legal challenges, and advocating for justice and equality.",
    },
    {
      title: "Disaster Management",
      description:
        "Offering support during and after disasters through emergency response, resource distribution, and long-term recovery assistance.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextProgram = () => {
    setCurrentProgram((prev) => (prev + 1) % programs.length)
  }

  const prevProgram = () => {
    setCurrentProgram((prev) => (prev - 1 + programs.length) % programs.length)
  }

  const footerLinks = navItems.map((item) => ({ label: item.label, href: item.href }))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Chaplains of Hope - Inspiring Hope, Changing Lives</title>
      </Head>

      <Navbar logoSrc="/logo.png" items={navItems} />

      <main className="flex-1 pt-20">
        <ParallaxHero
          backgroundImage="/hero-image-high-res.jpg"
          title="Inspiring Hope, Changing Lives"
          subtitle="Join us in making a difference in our community"
          height="h-[70vh]"
        />

        {/* Our Focus Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Our Focus Areas
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Reintegration & Mentorship",
                  description:
                    "Supporting individuals as they rebuild their lives through guidance and skill development.",
                  icon: "🤝",
                },
                {
                  title: "Children's Rights Advocacy",
                  description: "Ensuring every child has access to protection, education, and opportunities to thrive.",
                  icon: "👧",
                },
                {
                  title: "Community Paralegal Services",
                  description: "Providing accessible legal support to those who need it most in our communities.",
                  icon: "⚖️",
                },
                {
                  title: "Disaster Management & Social Justice",
                  description: "Responding to crises and advocating for equitable systems and policies.",
                  icon: "🏛️",
                },
              ].map((area, index) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <CardHover className="bg-white p-8 rounded-xl h-full border border-gray-100 hover:border-primary/30">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">{area.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-primary text-center">{area.title}</h3>
                    <p className="text-gray-600 text-center">{area.description}</p>
                  </CardHover>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Programs Overview
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-all duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentProgram * 100}%)` }}
                >
                  {programs.map((program, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <AnimatedSection>
                        <div className="bg-white p-8 rounded-xl shadow-md h-full">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <span className="text-primary text-xl font-bold">{index + 1}</span>
                          </div>
                          <h3 className="text-2xl font-semibold mb-4 text-primary">{program.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{program.description}</p>
                          <Link
                            href="/programs"
                            className="inline-flex items-center mt-6 text-primary font-medium hover:underline"
                          >
                            Learn more
                            <svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </Link>
                        </div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevProgram}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextProgram}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center mt-8 gap-2">
                {programs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProgram(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentProgram === index ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                Our Impact
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1,000+", label: "Lives Touched" },
                { number: "5", label: "Active Programs" },
                { number: "20+", label: "Community Partners" },
                { number: "3", label: "Years of Service" },
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-xl">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Testimonials
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-all duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <AnimatedSection>
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="relative">
                              <div className="absolute inset-0 rounded-full bg-primary/20 transform scale-110 animate-pulse-slow"></div>
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
                                className="w-10 h-10 text-primary/20 mb-4"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M10 8c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4v-4zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4v-4z" />
                              </svg>
                              <p className="text-gray-600 mb-4 italic leading-relaxed">{testimonial.text}</p>
                              <p className="font-semibold text-primary">{testimonial.name}</p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Get Involved
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us in our mission to create positive change in our community. There are many ways you can
                contribute.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/donations"
                  className="group relative overflow-hidden bg-primary text-white py-4 px-8 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">Donate</span>
                </Link>
                <Link
                  href="/membership"
                  className="group relative overflow-hidden bg-secondary text-white py-4 px-8 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">Become a Member</span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative overflow-hidden bg-white text-primary border-2 border-primary py-4 px-8 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">Volunteer</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer
        contactInfo={{
          address: "00100 Muslim, Kawangware, Nairobi",
          phone: "(+245) 728620614/ 100546840",
          email: "chaplinsofhopecbo@gmail.com",
        }}
        links={footerLinks}
        socialLinks={{
          facebook: "https://www.facebook.com/wehavewalkedwithyou",
          youtube: "#",
          instagram: "#",
        }}
        tagline="We Have Walked With You"
      />
    </div>
  )
}

