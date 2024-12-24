import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileExplorerNav from './components/Navigation/FileExplorerNav';
import Home from './pages/Home';
import MyRoom from './pages/MyRoom';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Friends from './pages/Friends';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Extras from './pages/Extras';
import AudioControls from './components/AudioControls';
import { AudioProvider } from './contexts/AudioContext';

export default function App() {
  return (
    <AudioProvider>
      <Router>
        <div className="relative">
          <FileExplorerNav />
          <main className="md:pl-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-room/*" element={<MyRoom />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/resume/*" element={<Resume />} />
              <Route path="/friends/*" element={<Friends />} />
              <Route path="/gallery/*" element={<Gallery />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route path="/extras/*" element={<Extras />} />
            </Routes>
          </main>
          <AudioControls />
        </div>
      </Router>
    </AudioProvider>
  );
}