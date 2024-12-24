import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import { Dumbbell, Briefcase, GamepadIcon, Music, Users } from 'lucide-react';

const interests = [
  { icon: Dumbbell, label: 'Calisthenics & Fitness' },
  { icon: Briefcase, label: 'Business & Entrepreneurship' },
  { icon: GamepadIcon, label: 'Gaming' },
  { icon: Music, label: 'Music' },
  { icon: Users, label: 'Social Life' },
];

export default function About() {
  return (
    <div className="min-h-screen relative">
      <CircuitBackground />
      <div className="relative z-10 container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I'm a passionate individual with diverse interests and ambitious goals. My journey has taken me from managing a fast food franchise to working as a kennel technician, all while pursuing my dreams in technology and entrepreneurship.
            </p>
            <p className="text-gray-300 text-lg">
              Currently focused on completing Google's Cyber Security certification, I'm building a strong foundation for my future in tech while nurturing my entrepreneurial spirit.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {interests.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="p-6 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-purple-900/50 transition-colors group"
              >
                <Icon size={32} className="text-purple-400 mb-4 group-hover:text-white" />
                <h3 className="text-white font-semibold">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}