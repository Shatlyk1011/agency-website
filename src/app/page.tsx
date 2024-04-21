'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import Approach from '@/widgets/Approach';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Approach />
      <div className="h-[100vh] bg-bg-2"></div>
    </main>
  );
}
