"use client"

import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Navbar } from "../../components/ui/navbar"
import { Footer } from "../../components/ui/footer"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { AnimatedSection } from "../../components/ui/animated-section"
import { CardHover } from "../../components/ui/card-hover"

export default function About() {
  const [currentTeamMember, setCurrentTeamMember] = useState(0)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

  const teamMembers = [
    {
      name: "Stephen muthiora kuria",
      role: "Convinor chaplins of Hope Social Justice Center -Dagoretti",
      bio: "John has over 20 years of experience in community service...",
      image: "/muthiora.jpg",
    },
    {
      name: "Jane Smith",
      role: "Program Manager",
      bio: "Jane oversees all our programs and ensures their success...",
      image: "/team2.jpg",
    },
    {
      name: "Michael Brown",
      role: "Community Outreach",
      bio: "Michael works closely with the community to provide support...",
      image: "/team3.jpg",
    },
  ]

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
  }

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const footerLinks = navItems.map((item) => ({ label: item.label, href: item.href }))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>About Us - Chaplains of Hope</title>
      </Head>

      <Navbar logoSrc="/logo.png" items={navItems} />

      <main className="flex-1 pt-20">
        <ParallaxHero backgroundImage="/about-hero.jpg" title="We Have Walked With You" height="h-[60vh]" />

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Who We Are
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2" delay={0.2}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                  <Image
                    src="/membership-overview.jpg"
                    alt="Who We Are"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="md:w-1/2" delay={0.4} direction="left">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Chaplains of Hope is a non-profit organization dedicated to providing support and hope to those in
                  need. Founded in 2000, we have been serving our community for over two decades, offering various
                  programs and services aimed at improving lives and fostering positive change.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team of dedicated professionals and volunteers work tirelessly to create a positive impact in
                  areas such as reintegration, children&apos;s rights advocacy, community paralegal services, and
                  disaster management.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Our Mission & Vision
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection delay={0.2}>
                <CardHover className="bg-white p-8 rounded-xl h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-primary text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide support, hope, and resources to individuals and communities in need, fostering positive
                    change and empowering people to build better lives.
                  </p>
                </CardHover>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <CardHover className="bg-white p-8 rounded-xl h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-primary text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where every individual has access to the support and resources they need to thrive, and
                    where communities are united in their efforts to create positive change.
                  </p>
                </CardHover>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Core Values
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Compassion", "Integrity", "Respect", "Empowerment", "Collaboration", "Innovation"].map(
                (value, index) => (
                  <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                    <CardHover className="bg-gray-50 p-6 rounded-xl h-full border border-gray-100 hover:border-primary/30">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">{value}</h3>
                      </div>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </CardHover>
                  </AnimatedSection>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Meet Our Team
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-all duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTeamMember * 100}%)` }}
                >
                  {teamMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <AnimatedSection>
                        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-primary/20 transform scale-110 animate-pulse-slow"></div>
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={200}
                              height={200}
                              className="rounded-full border-4 border-white shadow-lg object-cover z-10 relative"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold mb-2 text-primary">{member.name}</h3>
                            <p className="text-gray-600 mb-4 font-medium">{member.role}</p>
                            <p className="text-gray-600">{member.bio}</p>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevTeamMember}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTeamMember}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center mt-8 gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamMember(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTeamMember === index ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our History & Achievements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Our History & Achievements
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              <div className="space-y-16">
                {[
                  {
                    year: 2023,
                    title: "Registered",
                    description: "16 October, Registered as a community Based Organization",
                  },
                  {
                    year: 2023,
                    title: "Founded",
                    description: "Programs done are Reintegration services and Boychild Advocacy",
                  },
                  {
                    year: 2024,
                    title: "Expanded Services",
                    description:
                      "We expanded our services to include Contact Tracing of Lost children and Opened a social Justice Center.",
                  },
                ].map((event, index) => (
                  <AnimatedSection
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    delay={0.2 * index}
                    direction={index % 2 === 0 ? "right" : "left"}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-md w-5/12 relative ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                    >
                      <div
                        className={`absolute top-6 h-0.5 w-8 bg-primary/50 z-0 
                        ${index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
                      ></div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
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

