"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Membership() {
const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Standard Membership',
      price: '$50/year',
      features: [
        'Access to exclusive events',
        'Quarterly newsletter',
        'Voting rights in annual meetings',
      ],
    },
    {
      name: 'Lifetime Membership',
      price: '$500',
      features: [
        'All Standard Membership benefits',
        'Lifetime access to all programs',
        'Special recognition on our website',
      ],
    },
    {
      name: 'Sponsorship Membership',
      price: '$1000/year',
      features: [
        'All Lifetime Membership benefits',
        'Sponsor a program of your choice',
        'Annual meeting with the board',
      ],
    },
  ];

const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Membership - Chaplains of Hope</title>
      </Head>

      {/* Header component (same as home page) */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/membership-hero.jpg')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Join Our Community</h1>
<p className="text-xl md:text-2xl animate-fade-in animation-delay-300">Become a member and make a lasting impact</p>
          </div>
        </section>

        {/* Membership Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Membership Overview</h2>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image src="/membership-overview.jpg" alt="Membership Overview" width={500} height={300} className="rounded-lg shadow-md" />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <p className="text-gray-600 mb-4">
                  Joining Chaplains of Hope as a member means becoming part of a dedicated community committed to making a positive impact. 
                  Our members play a crucial role in supporting our mission and programs, while also benefiting from exclusive opportunities and resources.
                </p>
                <p className="text-gray-600">
                  Whether you're passionate about social justice, community service, or spiritual growth, our membership program offers a way to 
                  engage more deeply with our work and connect with like-minded individuals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div key={plan.name} className={`bg-white p-6 rounded-lg shadow-md ${selectedPlan === plan.name ? 'ring-2 ring-green-500' : ''}`}>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">{plan.name}</h3>
                  <p className="text-2xl font-bold mb-6">{plan.price}</p>
                  <ul className="mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelection(plan.name)}
                    className={`w-full py-2 px-4 rounded-full ${
                      selectedPlan === plan.name
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white'
                    } transition-colors`}
                  >
                    {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Now CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-700">Ready to Make a Difference?</h2>
<p className="text-xl text-gray-600 mb-8">Join our community today and help us create positive change.</p>
            <button className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
              Become a Member
            </button>
          </div>
        </section>

        {/* Benefits of Being a Member */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Benefits of Being a Member</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Exclusive access to events and workshops',
                'Networking opportunities with like-minded individuals',
                'Regular updates on our programs and impact',
                'Opportunity to contribute ideas and shape our initiatives',
                'Discounts on merchandise and program fees',
                'Recognition in our annual report',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 mt-1" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer component (same as home page) */}
    </div>
  );
}
