import React from 'react';
import PageLayout from '../components/PageLayout';
import PhotoGrid from '../components/Gallery/PhotoGrid';
import GlitchText from '../components/GlitchText';
import DecryptionPopup from '../components/Gallery/DecryptionPopup';

export default function Gallery() {
  return (
    <PageLayout backgroundVideo="/AnimatedBackgrounds/Rainy Bedroom Background.mp4">
      <DecryptionPopup />
      <div className="container mx-auto px-6 py-24">
        <section id="photos" className="min-h-screen">
          {/* Title Section */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="text-center space-y-4">
              <div className="text-2xl md:text-4xl">
                <GlitchText text="Photo Gallery" />
              </div>
              <div className="relative">
                <div className="h-px md:h-1 w-16 md:w-32 bg-gradient-to-r from-purple-500 to-transparent absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
                <p className="text-white/90 font-mono text-sm md:text-base px-4 py-1
                  bg-black/40 backdrop-blur-sm rounded-full inline-block
                  border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  Fleeting moments in time
                </p>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <PhotoGrid />
        </section>
      </div>
    </PageLayout>
  );
}