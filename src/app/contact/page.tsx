"use client"

import type React from "react"

import Head from "next/head"
import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

import { Navbar } from "../../components/ui/navbar"
import { Footer } from "../../components/ui/footer"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { AnimatedSection } from "../../components/ui/animated-section"
import { CardHover } from "../../components/ui/card-hover"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      setFormSubmitted(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const footerLinks = navItems.map((item) => ({ label: item.label, href: item.href }))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Contact Us - Chaplains of Hope</title>
      </Head>

      <Navbar logoSrc="/logo.png" items={navItems} />

      <main className="flex-1 pt-20">
        <ParallaxHero
          backgroundImage="/contact-hero.jpg"
          title="Let's Connect"
          subtitle="We're here to answer your questions and hear your thoughts"
          height="h-[60vh]"
        />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-8 text-primary inline-block relative">
                  Get in Touch
                  <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
                </h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl animate-fade-in">
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary transition-colors"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary transition-colors"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-primary transition-colors"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg relative overflow-hidden group"
                    >
                      <span
                        className={`absolute inset-0 w-0 bg-white/20 transition-all duration-300 ${isSubmitting ? "animate-pulse" : "group-hover:w-full"}`}
                      ></span>
                      <span className="relative">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                )}
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection delay={0.3} direction="left">
                <h2 className="text-3xl font-bold mb-8 text-primary inline-block relative">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
                </h2>

                <div className="space-y-8">
                  <CardHover className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                      <p className="text-gray-600 leading-relaxed">
                        00100 Dagorreti North, Kabiro Ward, Kawangware Location, Muslim Sub-location along Muthiora road
                        NEXT TO Muslim Chief&apos;s Office
                      </p>
                    </div>
                  </CardHover>

                  <CardHover className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-gray-600">(+245) 728620614/ 100546840</p>
                    </div>
                  </CardHover>

                  <CardHover className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-600">chaplinofhope&apos;cbo@gmail.com</p>
                    </div>
                  </CardHover>
                </div>

                {/* Google Map Embed */}
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Find Us on the Map</h3>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/place/Chaplin's+Of+Hope+CBO/@-1.2797465,36.744058,19z/data=!3m1!4b1!4m6!3m5!1s0x182f1a2a4ac3f707:0x54a478a18ddd45a9!8m2!3d-1.2797478!4d36.7447017!16s%2Fg%2F119w9g0g_?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwNC.wIKXMDSoASAFQAw%3D%3D"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
          facebook: "https://www.facebook.com/wehavewalkedwithyou/",
          youtube: "#",
          instagram: "#",
        }}
        tagline="We Have Walked With You"
      />
    </div>
  )
}

