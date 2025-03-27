"use client"

import Head from "next/head"
import Image from "next/image"
import { Phone, CreditCard, DollarSign, Gift } from "lucide-react"

import { Navbar } from "../../components/ui/navbar"
import { Footer } from "../../components/ui/footer"
import { ParallaxHero } from "../../components/ui/parallax-hero"
import { AnimatedSection } from "../../components/ui/animated-section"
import { CardHover } from "../../components/ui/card-hover"

export default function Donations() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Donate", href: "/donations" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]

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

        {/* M-Pesa Donation Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary inline-block relative">
                Make Your Donation
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Support our mission by donating through M-Pesa, Airtel Money, or your bank
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <div className="relative w-full h-64 md:h-80">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-la8NNL8L01B9bKhcwTrkr2o79PPHav.png"
                          alt="Lipa Na M-Pesa Paybill details"
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-primary mb-6">Donation Details</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <Phone className="w-5 h-5 mr-2 text-green-600" />
                            M-Pesa / Airtel Money
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-medium">
                              Paybill Number: <span className="text-green-700">400200</span>
                            </p>
                            <p className="font-medium">
                              Account Number: <span className="text-green-700">4038</span>
                            </p>
                            <p className="font-medium">
                              Business Name: <span className="text-green-700">CHAPLINS OF HOPE</span>
                            </p>
                          </div>
                          <div className="mt-4 text-sm text-gray-600">
                            <p className="mb-2">
                              <strong>How to donate:</strong>
                            </p>
                            <ol className="list-decimal pl-5 space-y-1">
                              <li>Go to M-Pesa or Airtel Money on your phone</li>
                              <li>Select "Pay Bill" option</li>
                              <li>Enter Business Number: 400200</li>
                              <li>Enter Account Number: 4038</li>
                              <li>Enter Amount</li>
                              <li>Enter your PIN and confirm</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
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
          youtube: "https://youtube.com/@chaplinsofhopecbo?si=WvL-0o65HPa08eOK",
          instagram: "#",
        }}
        tagline="We Have Walked With You"
      />
    </div>
  )
}

