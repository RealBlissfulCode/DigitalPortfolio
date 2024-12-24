import React from 'react';
import { Music, PlayCircle } from 'lucide-react';

const playlists = [
  { name: "Main 🔥", url: "https://open.spotify.com/playlist/3aMm2kyCQiNYDchYDczhpI?si=52L6gTZ4RFqx7d4q-9Rnpw" },
  { name: "Seduction & Desire ❤️‍🔥", url: "https://open.spotify.com/playlist/02gjICPZPE8ykh8aqtlCi4?si=AhbcpyjWTFKd2B6uPI3Xsw" },
  { name: "2010's Nostalgia 🫡", url: "https://open.spotify.com/playlist/4coFNyx5sdjyfNvYHWtyo5?si=SevWICYoSiGdpV4bqP3htg" },
  { name: "Top Songs Of 2024 🎼", url: "https://open.spotify.com/playlist/2AqLaoJAT6OE9E3OMSoP7S?si=srPdBCqNRkWbcq-x7MccNg" }
];

export default function MusicSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-white 
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        Music
      </h2>
      <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
        <a 
          href="https://open.spotify.com/user/rq2x7pv28zqs6udkggbdtced4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-[#1DB954]/20 rounded-lg mb-8 
            hover:bg-[#1DB954]/30 transition-colors group"
        >
          <Music size={32} className="text-[#1DB954] group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="text-xl font-bold mb-1">Follow me on Spotify</h3>
            <p className="text-gray-300">Check out what I'm listening to</p>
          </div>
        </a>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-purple-400">My Playlists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {playlists.map((playlist) => (
              <a
                key={playlist.name}
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg
                  hover:bg-purple-900/30 transition-colors group"
              >
                <PlayCircle className="text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-200">{playlist.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}