"use client";
import Head from 'next/head';
import { useState } from 'react';
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

      {/* Header component (same as home page) */}

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
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
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

      {/* Footer component (same as home page) */}
    </div>
  );
}
