"use client";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const teamMembers = [
    { name: "John Doe", role: "Executive Director", bio: "John has over 20 years of experience in community service...", image: "/team1.jpg" },
    { name: "Jane Smith", role: "Program Manager", bio: "Jane oversees all our programs and ensures their success...", image: "/team2.jpg" },
    { name: "Michael Brown", role: "Community Outreach", bio: "Michael works closely with the community to provide support...", image: "/team3.jpg" },
  ];

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>About Us - Chaplains of Hope</title>
      </Head>

      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={120} height={120} className="mr-2 transform scale-150" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="hover:text-red-500 transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="hover:text-red-500 transition-colors">
              Programs
            </Link>
            <Link href="/membership" className="hover:text-red-500 transition-colors">
              Membership
            </Link>
            <Link href="/donations" className="hover:text-red-500 transition-colors">
              Donate
            </Link>
            <Link href="/news" className="hover:text-red-500 transition-colors">
              News
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              Contact Us
            </Link>
          </nav>
          <button className="md:hidden">Menu</button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/about-hero.jpg')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">&quot;Inspiring Hope, Changing Lives&quot;</h1>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Who We Are</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="/who-we-are.jpg" alt="Who We Are" width={500} height={300} className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-gray-600 mb-4 animate-fade-in">
                  Chaplains of Hope is a non-profit organization dedicated to providing support and hope to those in need. 
                  Founded in 2000, we have been serving our community for over two decades, offering various programs and 
                  services aimed at improving lives and fostering positive change.
                </p>
                <p className="text-gray-600 animate-fade-in animation-delay-300">
                  Our team of dedicated professionals and volunteers work tirelessly to create a positive impact in areas 
                  such as reintegration, children&apos;s rights advocacy, community paralegal services, and disaster management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h3>
                <p className="text-gray-600">
                  To provide support, hope, and resources to individuals and communities in need, 
                  fostering positive change and empowering people to build better lives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every individual has access to the support and resources they need 
                  to thrive, and where communities are united in their efforts to create positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Compassion", "Integrity", "Respect", "Empowerment", "Collaboration", "Innovation"].map((value, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">{value}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Meet Our Team</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentTeamMember * 100}%)` }}>
                  {teamMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <Image src={member.image || "/placeholder.svg"} alt={member.name} width={200} height={200} className="rounded-full mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-green-700">{member.name}</h3>
                        <p className="text-gray-600 mb-4">{member.role}</p>
                        <p className="text-gray-600 text-center">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={prevTeamMember} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronLeft className="w-6 h-6 text-green-700" />
              </button>
              <button onClick={nextTeamMember} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <ChevronRight className="w-6 h-6 text-green-700" />
              </button>
            </div>
          </div>
        </section>

        {/* Our History & Achievements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Our History & Achievements</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
              <div className="space-y-12">
                {[
                  { year: 2000, title: "Founded", description: "Chaplains of Hope was established to provide support to those in need." },
                  { year: 2010, title: "Expanded Services", description: "We expanded our services to include community paralegal support." },
                  { year: 2020, title: "Awarded for Excellence", description: "We received recognition for our outstanding community service." },
                ].map((event, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} w-5/12`}>
                      <h3 className="text-xl font-semibold mb-2 text-green-700">{event.year}: {event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>00100 Muslim, Kawangware, Nairobi</p>
              <p>Phone: (+245) 728620614/ 100546840</p>
              <p>Email: chaplinofhopecbo@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-gray-300">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="hover:text-gray-300">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/donations" className="hover:text-gray-300">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-gray-300">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/muthioram.kuria/" className="hover:text-gray-300">
                  <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Chaplains of Hope. All rights reserved.</p>
            <p className="mt-2 text-lg font-semibold">"You Will Never Walk Alone"</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
