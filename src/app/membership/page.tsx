"use client"

import Head from "next/head"
import { useState } from "react"
import { Check } from "lucide-react"

import { Navbar } from "../../components/ui/navbar"
import { Footer } from "../../components/ui/footer"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { AnimatedSection } from "../../components/ui/animated-section"
import { CardHover } from "../../components/ui/card-hover"

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

  const plans = [
    {
      name: "Standard Membership",
      price: "Ksh1000/year",
      features: ["Access to exclusive events", "Quarterly newsletter", "Voting rights in annual meetings"],
    },
    {
      name: "Lifetime Membership",
      price: "Ksh5000/year",
      features: [
        "All Standard Membership benefits",
        "Lifetime access to all programs",
        "Special recognition on our website",
      ],
    },
    {
      name: "Sponsorship Membership",
      price: "Ksh10000/year",
      features: [
        "All Lifetime Membership benefits",
        "Sponsor a program of your choice",
        "Annual meeting with the board",
      ],
    },
  ]

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName)
  }

  const footerLinks = navItems.map((item) => ({ label: item.label, href: item.href }))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Membership - Chaplains of Hope</title>
      </Head>

      <Navbar logoSrc="/logo.png" items={navItems} />

      <main className="flex-1 pt-20">
        <ParallaxHero
          backgroundImage="/membership-hero.jpg"
          title="Join Our Community"
          subtitle="Become a member and make a lasting impact"
          height="h-[60vh]"
        />

        {/* Membership Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Membership Overview
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2" delay={0.2}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                  <img
                    src="/membership-overview.jpg"
                    alt="Membership Overview"
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="md:w-1/2" delay={0.4} direction="left">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Joining Chaplains of Hope as a member means becoming part of a dedicated community committed to making
                  a positive impact. Our members play a crucial role in supporting our mission and programs, while also
                  benefiting from exclusive opportunities and resources.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you&apos;re passionate about social justice, community service, or spiritual growth, our
                  membership program offers a way to engage more deeply with our work and connect with like-minded
                  individuals.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Membership Plans
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <AnimatedSection key={plan.name} delay={0.1 * (index + 1)}>
                  <CardHover
                    className={`bg-white p-8 rounded-xl h-full transition-all duration-300 ${
                      selectedPlan === plan.name
                        ? "border-2 border-primary shadow-lg"
                        : "border border-gray-200 shadow-md"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-primary">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-6 text-gray-800">{plan.price}</p>
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handlePlanSelection(plan.name)}
                      className={`w-full py-3 px-4 rounded-lg transition-all ${
                        selectedPlan === plan.name
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {selectedPlan === plan.name ? "Selected" : "Select Plan"}
                    </button>
                  </CardHover>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Join Now CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Join our community today and help us create positive change.
              </p>
              <button className="bg-white text-primary py-4 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg">
                Become a Member
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits of Being a Member */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Benefits of Being a Member
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                "Exclusive access to events and workshops",
                "Networking opportunities with like-minded individuals",
                "Regular updates on our programs and impact",
                "Opportunity to contribute ideas and shape our initiatives",
                "Discounts on merchandise and program fees",
                "Recognition in our annual report",
              ].map((benefit, index) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                </AnimatedSection>
              ))}
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

