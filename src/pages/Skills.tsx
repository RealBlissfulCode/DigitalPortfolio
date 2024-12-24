import React from 'react';
import CircuitBackground from '../components/CircuitBackground';
import { Shield, Code, Brain, Target } from 'lucide-react';

const skills = [
  {
    category: 'Cyber Security',
    icon: Shield,
    items: ['Network Security', 'Threat Analysis', 'Security Protocols', 'Risk Management'],
  },
  {
    category: 'Technical',
    icon: Code,
    items: ['Programming Basics', 'Web Development', 'System Administration', 'Problem Solving'],
  },
  {
    category: 'Business',
    icon: Brain,
    items: ['Team Management', 'Customer Service', 'Operations', 'Leadership'],
  },
  {
    category: 'Personal',
    icon: Target,
    items: ['Time Management', 'Communication', 'Adaptability', 'Goal Setting'],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen relative">
      <CircuitBackground />
      <div className="relative z-10 container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ category, icon: Icon, items }) => (
            <div
              key={category}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:transform hover:scale-105 transition-all"
            >
              <Icon size={32} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}