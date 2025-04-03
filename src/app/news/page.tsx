"use client"

import type React from "react"

import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { Search } from "lucide-react"

import { Navbar } from "../../components/ui/navbar"
import { Footer } from "../../components/ui/footer"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { AnimatedSection } from "../../components/ui/animated-section"
import { CardHover } from "../../components/ui/card-hover"

export default function News() {
  const [searchTerm, setSearchTerm] = useState("")

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

  const featuredNews = [
    {
      title: "Chaplains of Hope Launches New Youth Mentorship Program",
      image: "/news1.jpg",
      date: "June 15, 2023",
      excerpt:
        "Our organization is proud to announce the launch of a new mentorship program aimed at supporting at-risk youth in our community...",
    },
    {
      title: "Annual Fundraising Gala Raises Record Amount for Community Programs",
      image: "/news2.jpg",
      date: "May 22, 2023",
      excerpt:
        "Thanks to the generosity of our supporters, this year's gala event raised over $500,000 for our various community programs...",
    },
    {
      title: "Chaplains of Hope Expands Services to Rural Areas",
      image: "/news3.jpg",
      date: "April 10, 2023",
      excerpt:
        "In an effort to reach more individuals in need, we are excited to announce the expansion of our services to rural communities...",
    },
  ]

  const latestUpdates = [
    {
      title: "Volunteer Spotlight: Meet John Doe",
      date: "June 10, 2023",
      category: "Volunteer Stories",
    },
    {
      title: "New Partnership Announced with Local Business Association",
      date: "June 5, 2023",
      category: "Partnerships",
    },
    {
      title: "Upcoming Workshop: Financial Literacy for Ex-Offenders",
      date: "May 30, 2023",
      category: "Events",
    },
    {
      title: "Success Story: Former Inmate Starts Own Business",
      date: "May 25, 2023",
      category: "Success Stories",
    },
    {
      title: "Chaplains of Hope Receives Community Service Award",
      date: "May 20, 2023",
      category: "Awards",
    },
  ]

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredUpdates = latestUpdates.filter(
    (update) =>
      update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const footerLinks = navItems.map((item) => ({ label: item.label, href: item.href }))

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>News & Updates - Chaplains of Hope</title>
      </Head>

      <Navbar logoSrc="/logo.png" items={navItems} />

      <main className="flex-1 pt-20">
        <ParallaxHero
          backgroundImage="/news-hero.jpg"
          title="Latest News & Updates"
          subtitle="Stay informed about our work and impact"
          height="h-[60vh]"
        />

        {/* Featured News */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Featured News
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredNews.map((news, index) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <CardHover className="bg-white rounded-xl overflow-hidden shadow-md h-full border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{news.date}</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{news.excerpt}</p>
                      <button className="text-primary font-medium hover:underline inline-flex items-center">
                        Read more
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
                      </button>
                    </div>
                  </CardHover>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Latest Updates
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
            </AnimatedSection>

            <div className="mb-12 max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search updates..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-5 py-3 pl-12 rounded-full border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {filteredUpdates.map((update, index) => (
                <AnimatedSection key={index} delay={0.05 * (index + 1)}>
                  <CardHover className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {update.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{update.date}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-primary font-medium hover:underline inline-flex items-center text-sm">
                        Read more
                        <svg
                          className="w-3 h-3 ml-1"
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
                      </button>
                    </div>
                  </CardHover>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Subscribe to our newsletter for the latest news and updates.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-5 py-3 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
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

