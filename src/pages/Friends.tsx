import React from 'react';
import PageLayout from '../components/PageLayout';
import GlitchText from '../components/GlitchText';
import ComingSoon from '../components/ComingSoon';

export default function Friends() {
  return (
    <PageLayout backgroundVideo="/AnimatedBackgrounds/Sunny Patio Background.mp4">
      <div className="container mx-auto px-6 py-24">
        <section id="memories" className="min-h-screen flex flex-col items-center justify-start">
          {/* Title Section */}
          <div className="w-full max-w-4xl mb-12">
            <div className="text-center space-y-4">
              <div className="text-2xl md:text-4xl">
                <GlitchText text="Shared Memories" />
              </div>
              <div className="relative">
                <div className="h-px md:h-1 w-16 md:w-32 bg-gradient-to-r from-purple-500 to-transparent absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
                <p className="text-white/90 font-mono text-sm md:text-base px-4 py-1
                  bg-black/40 backdrop-blur-sm rounded-full inline-block
                  border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  Where moments become memories
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon Animation */}
          <ComingSoon />
        </section>
      </div>
    </PageLayout>
  );
}