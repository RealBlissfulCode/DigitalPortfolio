import React from 'react';
import PageLayout from '../components/PageLayout';
import GlitchText from '../components/GlitchText';
import ComingSoon from '../components/ComingSoon';
import { useAuthStore } from '../store/useAuthStore';

export default function Extras() {
  const { isExtrasUnlocked } = useAuthStore();

  if (!isExtrasUnlocked) {
    return (
      <PageLayout backgroundVideo="/AnimatedBackgrounds/Anime Coffeeshop Background.mp4">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-black/50 backdrop-blur-sm p-8 rounded-lg
            border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <h2 className="text-2xl font-bold text-center mb-6">Access Required</h2>
            <p className="text-center text-gray-400">
              This section requires authentication to view its contents.
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout backgroundVideo="/AnimatedBackgrounds/Anime Coffeeshop Background.mp4">
      <div className="container mx-auto px-6 py-24">
        <section id="hidden" className="min-h-screen flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-5xl mb-8">
                <GlitchText text="Hidden Files" />
              </div>
            </div>
          </div>
          <ComingSoon />
        </section>
      </div>
    </PageLayout>
  );
}