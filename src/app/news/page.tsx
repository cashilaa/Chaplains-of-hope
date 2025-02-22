"use client"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"

export default function News() {
  const [searchTerm, setSearchTerm] = useState("")

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredUpdates = latestUpdates.filter(
    (update) =>
      update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>News & Updates - Chaplains of Hope</title>
      </Head>

      {/* Header component (same as home page) */}

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/news-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Latest News & Updates</h1>
            <p className="text-xl md:text-2xl animate-fade-in animation-delay-300">
              Stay informed about our work and impact
            </p>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Featured News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredNews.map((news, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-green-700">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.date}</p>
                    <p className="text-gray-700 mb-4">{news.excerpt}</p>
                    <Link
                      href={`/news/${news.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Latest Updates</h2>
            <div className="mb-8">
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search updates..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpdates.map((update, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">{update.title}</h3>
                  <p className="text-gray-600 mb-2">{update.date}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    {update.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-700">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter for the latest news and updates.</p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-r-full hover:bg-green-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer component (same as home page) */}
    </div>
  )
}

