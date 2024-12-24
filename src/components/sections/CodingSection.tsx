import React from 'react';

export default function CodingSection() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-8 text-center text-white 
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        Coding
      </h2>
      <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-purple-500/20">
        <p className="text-gray-200 leading-relaxed mb-6">
          Coding has always been a big part of my life, and I've found my favorite time to work on it is late at night—especially with some good music playing and even during breaks between workout sets. I started learning coding back in middle school with Scratch, which eventually led me to HTML, and then Python.
        </p>
        <p className="text-gray-200 leading-relaxed mb-6">
          In high school, I took things further with classes like Computer Science Principles and Harvard CS50, where I learned about everything from computer networking and binary to programming in Python and C. In my free time, I built upon this and self taught some JavaScript, and Shaders for both my own personal projects and for fun. Right now, I'm diving into cybersecurity classes, which feel like an extension of what I covered in Computer Science Principles.
        </p>
        <p className="text-gray-200 leading-relaxed">
          While my main goal is to succeed as an entrepreneur, I've always kept a backup plan in mind: starting a career in cybersecurity and later transitioning into Software Engineering. Either way, coding is something I enjoy and see as a key part of my future.
        </p>
      </div>
    </div>
  );
}