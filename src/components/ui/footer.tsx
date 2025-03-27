"use client"

import Link from "next/link"
import { Facebook, Youtube, Instagram } from "lucide-react"
import { AnimatedSection } from "./animated-section"

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  contactInfo: {
    address: string
    phone: string
    email: string
  }
  links: FooterLink[]
  socialLinks: {
    facebook?: string
    youtube?: string
    instagram?: string
  }
  tagline: string
}

export function Footer({ contactInfo, links, socialLinks, tagline }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-500 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                {contactInfo.address}
              </p>
              <p className="flex items-start">
                <span className="mr-2">📞</span>
                {contactInfo.phone}
              </p>
              <p className="flex items-start">
                <span className="mr-2">✉️</span>
                {contactInfo.email}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-green-400 transition-colors flex items-center">
                    <span className="mr-2">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-500 pb-2 inline-block">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href="https://youtube.com/@chaplinsofhopecbo?si=WvL-0o65HPa08eOK"
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
            <div className="mt-4">
              <p className="text-sm mb-2">Visit our YouTube channel:</p>
              <a
                href="https://youtube.com/@chaplinsofhopecbo?si=WvL-0o65HPa08eOK"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Chaplins of Hope
              </a>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Chaplains of Hope. All rights reserved.</p>
          <p className="mt-2 text-lg font-semibold text-green-400">{tagline}</p>
        </div>
      </div>
    </footer>
  )
}

