"use client";
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CreditCard, DollarSign, Gift } from 'lucide-react';

export default function Donations() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');

  const handleDonationTypeChange = (type: string) => {
    setDonationType(type);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle donation submission logic here
    console.log('Donation submitted:', { type: donationType, amount });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Donate - Chaplains of Hope</title>
      </Head>

      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={150} height={150} className="mr-2 transform scale-150" />
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
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/donation-hero.jpg')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Make a Difference Today</h1>
            <p className="text-xl md:text-2xl animate-fade-in animation-delay-300">Your donation can change lives and bring hope to those in need</p>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Why Donate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                  <DollarSign className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Our Programs</h3>
                <p className="text-gray-600">Your donation helps fund our various programs and initiatives.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                  <Gift className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Change Lives</h3>
                <p className="text-gray-600">Your generosity directly impacts the lives of those we serve.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                  <CreditCard className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy and Secure</h3>
                <p className="text-gray-600">Our donation process is simple, safe, and transparent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Make Your Donation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Choose Donation Type</h3>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-full ${donationType === 'one-time' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                      onClick={() => handleDonationTypeChange('one-time')}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-full ${donationType === 'monthly' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                      onClick={() => handleDonationTypeChange('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['10', '25', '50', '100', '250', '500'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`py-2 px-4 rounded-full ${amount === value ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setAmount(value)}
                      >
                        ${value}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Other amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Donate Now
                </button>
              </form>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Donate in Kenyan Shillings</h3>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {['1000', '2500', '5000', '10000', '25000', '50000'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`py-2 px-4 rounded-full ${amount === value ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setAmount(value)}
                      >
                        KES {value}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Other amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">1,000+</h3>
                <p className="text-gray-600">Lives touched annually</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">5</h3>
                <p className="text-gray-600">Active programs</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">20+</h3>
                <p className="text-gray-600">Years of service</p>
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
              <p>Email: chaplinsofhopecbo@gmail.com</p>
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
                  <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Chaplains of Hope. All rights reserved.</p>
            <p className="mt-2 text-lg font-semibold">&quot;We Have Walked With You&quot;</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
