import React, { forwardRef } from 'react';
import './styles.css';

interface SnapSectionProps {
  id: string;
  children: React.ReactNode;
}

const SnapSection = forwardRef<HTMLElement, SnapSectionProps>(({ id, children }, ref) => {
  return (
    <section id={id} ref={ref} className="snap-section">
      {children}
    </section>
  );
});

SnapSection.displayName = 'SnapSection';

export default SnapSection;