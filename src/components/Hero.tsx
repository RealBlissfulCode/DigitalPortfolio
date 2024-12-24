import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import SocialLinks from './SocialLinks';
import ParticleBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <AnimatedTitle />
        <SocialLinks />
      </div>
    </section>
  );
}