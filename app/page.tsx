'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Email submitted:', email);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#00AF08]/5 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#00AF08]/10">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#00AF08]/10 to-transparent rounded-bl-full -z-10" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-tr from-[#00AF08]/10 to-transparent rounded-tr-full -z-10" />
        
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <Image
                  src="/Makaan_Logo_w_text.png"
                  alt="Makaan Logo"
                  width={300}
                  height={100}
                  className="mb-8"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#00AF08]/10 rounded-full -z-10 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Join Our <span className="text-[#00AF08]">Exclusive</span> Muslim Business Community
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Be part of our invite-only platform connecting you with amazing Muslim-owned businesses in your area. Access is limited - join the waitlist today.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#00AF08]/10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Early Access</h2>
                <p className="text-gray-600 mb-6">
                  Join the waitlist for your chance to receive an exclusive access code.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#00AF08] focus:ring-2 focus:ring-[#00AF08]/20 transition-all outline-none bg-white/90"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00AF08] to-[#00CF08] text-white px-8 py-4 rounded-xl hover:from-[#009507] hover:to-[#00BC08] transition-all shadow-lg shadow-[#00AF08]/20 hover:shadow-xl hover:shadow-[#00AF08]/30"
                  >
                    Get Notified!
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Join {Math.floor(Math.random() * 500 + 1500)} others waiting for launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white via-[#00AF08]/5 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Makaan?</h2>
            <p className="text-gray-600">Discover a platform built with the Muslim community in mind, offering unique features to enhance your shopping experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#00AF08]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00AF08] to-[#00CF08] rounded-2xl mb-6 flex items-center justify-center transform -rotate-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Discovery</h3>
              <p className="text-gray-600">Find Muslim-owned businesses near you with our intuitive search and filtering system.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#00AF08]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00AF08] to-[#00CF08] rounded-2xl mb-6 flex items-center justify-center transform -rotate-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Exclusive Community</h3>
              <p className="text-gray-600">Join our invite-only community. Members can invite others using exclusive access codes.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#00AF08]/10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00AF08] to-[#00CF08] rounded-2xl mb-6 flex items-center justify-center transform -rotate-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Exclusive Offers</h3>
              <p className="text-gray-600">Access special deals and discounts from participating businesses.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
