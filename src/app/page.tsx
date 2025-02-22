"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProgram, setCurrentProgram] = useState(0)

  const testimonials = [
    { name: "John Doe", text: "Chaplains of Hope changed my life...", image: "/testimonial1.jpg" },
    { name: "Jane Smith", text: "I'm grateful for the support I received...", image: "/testimonial2.jpg" },
    { name: "Mike Johnson", text: "The programs offered here are incredible...", image: "/testimonial3.jpg" },
  ]

  const programs = [
    { title: "Reintegration & Mentorship", description: "Helping individuals reintegrate into society..." },
    { title: "Children's Rights Advocacy", description: "Protecting and promoting children's rights..." },
    { title: "Community Paralegal Services", description: "Providing legal support to underserved communities..." },
    { title: "Disaster Management", description: "Offering support during and after disasters..." },
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-700">Chaplains of Hope</h1>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="hover:text-red-500 transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="hover:text-red-500 transition-colors">
              Programs
            </Link>
            <Link href="/membership" className="hover:text-red-500 transition-colors">
              Membership
            </Link>
            <Link href="/donations" className="hover:text-red-500 transition-colors">
              Donate
            </Link>
            <Link href="/news" className="hover:text-red-500 transition-colors">
              News
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              Contact Us
            </Link>
          </nav>
          <button className="md:hidden">Menu</button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">&quot;Inspiring Hope, Changing Lives&quot;</h2>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in animation-delay-300">
              Join us in making a difference in our community
            </p>
            <Link
              href="/donations"
              className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors animate-fade-in animation-delay-600"
            >
              Donate Now
            </Link>
          </div>
        </section>

        {/* Our Focus Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Reintegration & Mentorship",
                "Children&apos;s Rights Advocacy",
                "Community Paralegal Services",
                "Disaster Management & Social Justice",
              ].map((area, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">{area}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Programs Overview</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentProgram * 100}%)` }}
                >
                  {programs.map((program, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-green-700">{program.title}</h3>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevProgram}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-green-700" />
              </button>
              <button
                onClick={nextProgram}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-green-700" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Testimonials</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="rounded-full mr-6"
                        />
                        <div>
                          <p className="text-gray-600 mb-4">{testimonial.text}</p>
                          <p className="font-semibold text-green-700">{testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-green-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-green-700" />
              </button>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-700">Get Involved</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donations"
                className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/membership"
                className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Become a Member
              </Link>
              <Link
                href="/volunteer"
                className="bg-yellow-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 Hope Street, City, Country</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@chaplainsofhope.org</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-gray-300">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="hover:text-gray-300">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/donations" className="hover:text-gray-300">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-gray-300">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Chaplains of Hope. All rights reserved.</p>
            <p className="mt-2 text-lg font-semibold">&quot;You Will Never Walk Alone&quot;</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
