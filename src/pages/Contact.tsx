import React from 'react';
import PageLayout from '../components/PageLayout';
import GlitchText from '../components/GlitchText';
import { Mail, Linkedin, Github, AudioLines } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/RealBlissfulCode',
    color: 'hover:bg-gray-800'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jaron-norris-44b02133a/',
    color: 'hover:bg-blue-800'
  },
  {
    icon: AudioLines,
    label: 'Spotify',
    href: 'https://open.spotify.com/user/rq2x7pv28zqs6udkggbdtced4',
    color: 'hover:bg-green-800'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:jaronnorris7@gmail.com',
    color: 'hover:bg-purple-800'
  }
];

export default function Contact() {
  return (
    <PageLayout backgroundVideo="/AnimatedBackgrounds/Anime Coffeeshop Background.mp4">
      <div className="container mx-auto px-6 py-24">
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
          {/* Title Section */}
          <div className="w-full max-w-4xl mb-12">
            <div className="text-center space-y-4">
              <div className="text-2xl md:text-4xl">
                <GlitchText text="Get In Touch" />
              </div>
              <div className="relative">
                <div className="h-px md:h-1 w-16 md:w-32 bg-gradient-to-r from-purple-500 to-transparent absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
                <p className="text-white/90 font-mono text-sm md:text-base px-4 py-1
                  bg-black/40 backdrop-blur-sm rounded-full inline-block
                  border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  Let's create something amazing together
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto w-full space-y-8">
            {/* Social Links */}
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20
              hover:border-purple-500/30 transition-all duration-300
              shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg
                      bg-black/30 backdrop-blur-sm
                      border border-purple-500/20
                      transition-all duration-300
                      ${color} hover:scale-[1.02]
                      group`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20
              hover:border-purple-500/30 transition-all duration-300
              shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  jaronnorris7@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center text-purple-400">📞</span>
                  +1 (970) 580-9278
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}