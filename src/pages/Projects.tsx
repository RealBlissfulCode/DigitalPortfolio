import React from 'react';
import ProjectBackground from '../components/ProjectBackground';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Digital Portfolio',
    description: 'Digital Portfolio for personal and professional identity',
    tags: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/RealBlissfulCode/DigitalPortfolio/tree/main',
    liveUrl: 'https://JaronNorris.com',
  },
  {
    title: 'Project Ubiquitous',
    description: 'Confidential 🔒',
    tags: ['Instagram', 'Snapchat', 'Partners']
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <ProjectBackground />
      <div className="relative z-10 container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-black/30 backdrop-blur-sm p-6 rounded-lg
                border border-purple-500/20 hover:border-purple-500/40
                transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-900/30 rounded text-sm text-purple-200
                      border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300
                    transition-colors group-hover:translate-x-1 duration-300"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300
                    transition-colors group-hover:translate-x-1 duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}