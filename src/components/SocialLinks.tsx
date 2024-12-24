import React from 'react';
import { Github, Linkedin, AudioLines, Mail, Ghost } from 'lucide-react';

const links = [
  {
    title: 'GitHub',
    icon: Github,
    url: 'https://github.com/RealBlissfulCode',
    color: 'hover:bg-gray-800',
  },
  {
    title: 'Spotify',
    icon: AudioLines,
    url: 'https://open.spotify.com/user/rq2x7pv28zqs6udkggbdtced4',
    color: 'hover:bg-green-800',
  },
  {
    title: 'Snapchat',
    icon: Ghost,
    url: 'https://www.snapchat.com/add/jaron21',
    color: 'hover:bg-yellow-700',
  },
  {
    title: 'Email',
    icon: Mail,
    url: '#',
    color: 'hover:bg-purple-800',
  },
 {
    title: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/jaron-norris-44b02133a/',
    color: 'hover:bg-blue-800',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-xs md:max-w-md mx-auto px-4">
      {links.map(({ title, icon: Icon, url, color }) => (
        <a
          key={title}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 p-3 md:p-4 rounded-lg bg-black/50 backdrop-blur-sm 
            border border-white/10 transition-all duration-300 w-full text-sm md:text-base
            ${color} hover:scale-105 hover:border-white/30`}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-medium">{title}</span>
        </a>
      ))}
    </div>
  );
}