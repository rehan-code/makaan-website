'use client';

import Features from './components/Features';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#00AF08]/5 to-white">
      <Hero />
      <Features />
    </main>
  );
}
