import React from 'react';
import PageLayout from '../components/PageLayout';
import GlitchText from '../components/GlitchText';
import SnapSection from '../components/SnapSection';
import ScrollProgress from '../components/ScrollProgress';
import CodingSection from '../components/sections/CodingSection';
import CalisthenicsSection from '../components/sections/CalisthenicsSection';
import MusicSection from '../components/sections/MusicSection';

export default function MyRoom() {
  return (
    <PageLayout backgroundVideo="/AnimatedBackgrounds/Cyberpunk Room Background.mp4">
      <ScrollProgress />
      <div className="min-h-screen overflow-y-auto snap-y snap-mandatory">
        <div className="w-full py-12">
          <SnapSection id="title">
            <div className="max-w-4xl mx-auto px-4">
              <GlitchText text="Welcome to My Room" className="mb-8" />
              <p className="text-center text-lg bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg 
                border border-white/10 inline-block mx-auto
                text-white/90 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                Scroll down to explore my interests
              </p>
            </div>
          </SnapSection>

          <SnapSection id="coding">
            <div className="w-full px-4">
              <CodingSection />
            </div>
          </SnapSection>

          <SnapSection id="calisthenics">
            <div className="w-full px-4">
              <CalisthenicsSection />
            </div>
          </SnapSection>

          <SnapSection id="music">
            <div className="w-full px-4">
              <MusicSection />
            </div>
          </SnapSection>
        </div>
      </div>
    </PageLayout>
  );
}