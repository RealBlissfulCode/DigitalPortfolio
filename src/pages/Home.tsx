import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import SocialLinks from '../components/SocialLinks';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <AnimatedTitle />
        <SocialLinks />
      </div>
    </section>
  );
}