"use client"

import type React from "react"

import Head from "next/head"
import { useState } from "react"
import { CreditCard, DollarSign, Gift } from "lucide-react"

import { Navbar } from "../../components/ui/navbar"
import { Footer } from "../../components/ui/footer"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { AnimatedSection } from "../../components/ui/animated-section"
import { CardHover } from "../../components/ui/card-hover"

export default function Donations() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

  const handleDonationTypeChange = (type: string) => {
    setDonationType(type)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle donation submission logic here
    console.log("Donation submitted:", { type: donationType, amount })
  }

  const footerLinks = navItems.map((item) => ({ label: item.label, href: item.href }))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Donate - Chaplains of Hope</title>
      </Head>

      <Navbar logoSrc="/logo.png" items={navItems} />

      <main className="flex-1 pt-20">
        <ParallaxHero
          backgroundImage="/donation-hero.jpg"
          title="Make a Difference Today"
          subtitle="Your donation can change lives and bring hope to those in need"
          height="h-[60vh]"
        />

        {/* Why Donate Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Why Donate?
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <AnimatedSection delay={0.1}>
                <CardHover className="text-center p-8 bg-white rounded-xl shadow-md h-full border border-gray-100">
                  <div className="bg-primary/10 rounded-full p-4 inline-block mb-6">
                    <DollarSign className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Support Our Programs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your donation helps fund our various programs and initiatives, allowing us to reach more people and
                    make a greater impact in our community.
                  </p>
                </CardHover>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <CardHover className="text-center p-8 bg-white rounded-xl shadow-md h-full border border-gray-100">
                  <div className="bg-primary/10 rounded-full p-4 inline-block mb-6">
                    <Gift className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Change Lives</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your generosity directly impacts the lives of those we serve, providing hope, resources, and
                    opportunities for a better future.
                  </p>
                </CardHover>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <CardHover className="text-center p-8 bg-white rounded-xl shadow-md h-full border border-gray-100">
                  <div className="bg-primary/10 rounded-full p-4 inline-block mb-6">
                    <CreditCard className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Easy and Secure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our donation process is simple, safe, and transparent. You can be confident that your contribution
                    is being used effectively.
                  </p>
                </CardHover>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Make Your Donation
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Choose Donation Type</h3>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        className={`flex-1 py-3 px-4 rounded-full transition-all ${
                          donationType === "one-time"
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => handleDonationTypeChange("one-time")}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        className={`flex-1 py-3 px-4 rounded-full transition-all ${
                          donationType === "monthly"
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => handleDonationTypeChange("monthly")}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Select Amount</h3>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {["10", "25", "50", "100", "250", "500"].map((value) => (
                        <button
                          key={value}
                          type="button"
                          className={`py-3 px-4 rounded-full transition-all ${
                            amount === value
                              ? "bg-primary text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => setAmount(value)}
                        >
                          ${value}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="Other amount"
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative">Donate Now</span>
                  </button>
                </form>
              </AnimatedSection>

              <AnimatedSection delay={0.3} direction="left">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-primary">Donate in Kenyan Shillings</h3>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4 text-gray-700">Select Amount</h4>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {["1000", "2500", "5000", "10000", "25000", "50000"].map((value) => (
                        <button
                          key={value}
                          type="button"
                          className={`py-3 px-4 rounded-full transition-all ${
                            amount === value
                              ? "bg-primary text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => setAmount(value)}
                        >
                          KES {value}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">KES</span>
                      <input
                        type="number"
                        placeholder="Other amount"
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full pl-16 pr-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative">Donate Now</span>
                  </button>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-700 mb-2">Other Ways to Donate</h4>
                    <p className="text-gray-600 text-sm">
                      You can also donate via M-Pesa or bank transfer. Contact us for more details.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Your Impact
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your generous donations help us make a real difference in our community.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-5xl font-bold text-primary mb-4">1,000+</div>
                  <p className="text-gray-600 text-lg">Lives touched annually</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-5xl font-bold text-primary mb-4">5</div>
                  <p className="text-gray-600 text-lg">Active programs</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-5xl font-bold text-primary mb-4">20+</div>
                  <p className="text-gray-600 text-lg">Years of service</p>
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
          facebook: "https://www.facebook.com/muthioram.kuria/",
          youtube: "#",
          instagram: "#",
        }}
        tagline="We Have Walked With You"
      />
    </div>
  )
}

