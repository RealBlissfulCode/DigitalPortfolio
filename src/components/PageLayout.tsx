import React from 'react';
import ScrollProgress from './ScrollProgress';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundVideo?: string;
}

export default function PageLayout({ children, backgroundVideo }: PageLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen relative">
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          className="fixed inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      <div className="relative z-10 min-h-screen">
        <ScrollProgress />
        {children}
      </div>
    </div>
  );
}