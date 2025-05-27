"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Facebook, Youtube, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white/80 py-4",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="mr-2 transform scale-125 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-gray-700 hover:text-green-600 transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Menu */}
          <div
            className={cn(
              "fixed inset-0 bg-white z-50 flex flex-col p-10 md:hidden transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6 mt-16">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xl font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 border-b border-green-500 pb-2 inline-block">Contact Us</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  00100 Muslim, Kawangware, Nairobi
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  (+245) 728620614/ 100546840
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  chaplinsofhopecbo@gmail.com
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold mb-6 border-b border-green-500 pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-green-400 transition-colors flex items-center">
                      <span className="mr-2">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold mb-6 border-b border-green-500 pb-2 inline-block">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.facebook.com/wehavewalkedwithyou"
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm">Subscribe to our newsletter</p>
                <div className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-3 py-2 bg-white/10 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-12 text-center border-t border-white/10 pt-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p>&copy; {new Date().getFullYear()} Chaplains of Hope. All rights reserved.</p>
            <p className="mt-2 text-lg font-semibold text-green-400">"We Have Walked With You"</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

