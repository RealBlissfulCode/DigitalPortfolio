import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import GlitchText from '../components/GlitchText';
import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PageLayout backgroundVideo="/AnimatedBackgrounds/Botanica Background.mp4">
      <div className="container mx-auto px-2 sm:px-6 py-8 sm:py-24">
        <section id="view" className="min-h-screen flex flex-col items-center">
          {/* Animated Title Section */}
          <div className="w-full max-w-4xl mb-6 sm:mb-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="text-lg sm:text-2xl md:text-4xl px-2">
                <GlitchText text="Professional Resume" />
              </div>
              <div className="relative">
                <div className="h-px sm:h-1 w-16 sm:w-32 bg-gradient-to-r from-purple-500 to-transparent absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2" />
                <p className="text-white/90 font-mono text-[10px] sm:text-sm md:text-base px-4 py-1
                  bg-black/40 backdrop-blur-sm rounded-full inline-block
                  border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  A glimpse into my professional journey
                </p>
              </div>
            </div>
          </div>

          {/* Resume Display */}
          <div className="w-full max-w-4xl bg-black/40 backdrop-blur-sm p-2 sm:p-6 rounded-lg border border-purple-500/20 
            hover:border-purple-500/40 transition-all duration-300 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-purple-500" />
              </div>
            )}
            <iframe
              src="/Images/JaronNorris_Professional-Resume.pdf"
              className="w-full h-[400px] sm:h-[600px] md:h-[800px] rounded-lg"
              title="Resume PDF"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-4xl px-2 sm:px-4">
            <a
              href="/Images/JaronNorris_Professional-Resume.pdf"
              download
              className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg
                transition-colors duration-300 flex items-center justify-center gap-2 group text-[10px] sm:text-sm md:text-base"
            >
              <Download className="h-3 w-3 sm:h-5 sm:w-5" />
              <span>Download Resume</span>
            </a>
            
            <a
              href="/Images/JaronNorris_Professional-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg
                transition-colors duration-300 flex items-center justify-center gap-2 group text-[10px] sm:text-sm md:text-base"
            >
              <ExternalLink className="h-3 w-3 sm:h-5 sm:w-5" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}