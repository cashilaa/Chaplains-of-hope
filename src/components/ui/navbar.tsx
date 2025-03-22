"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logoSrc: string
  items: NavItem[]
}

export function Navbar({ logoSrc, items }: NavbarProps) {
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

  return (
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
              src={logoSrc || "/placeholder.svg"}
              alt="Logo"
              width={150}
              height={150}
              className="mr-2 transform scale-125 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {items.map((item, index) => (
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
          <button className="absolute top-4 right-4 text-gray-700 focus:outline-none" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-6 mt-16">
            {items.map((item, index) => (
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
  )
}

