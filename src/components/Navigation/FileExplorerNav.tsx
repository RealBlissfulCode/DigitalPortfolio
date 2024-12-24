import React, { useState, useEffect } from 'react';
import { getFolders, mainNav } from './config';
import NavLink from './NavLink';
import FolderSection from './FolderSection';
import DesktopToggle from './components/DesktopToggle';
import MobileToggle from './components/MobileToggle';
import { useActiveSection } from './hooks/useActiveSection';
import { useAuthStore } from '../../store/useAuthStore';

export default function FileExplorerNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const isExtrasUnlocked = useAuthStore((state) => state.isExtrasUnlocked);
  const [folders, setFolders] = useState(getFolders());

  // Update folders when extras are unlocked
  useEffect(() => {
    setFolders(getFolders());
    // Initialize expanded folders
    setExpandedFolders(getFolders().map(f => f.name));
  }, [isExtrasUnlocked]);

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderName)
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    );
  };

  return (
    <>
      <MobileToggle 
        isOpen={isMobileMenuOpen} 
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
      <DesktopToggle 
        isOpen={isOpen} 
        onToggle={() => setIsOpen(!isOpen)} 
      />

      <div 
        className={`fixed top-0 left-0 h-full bg-black/40 backdrop-blur-sm 
          border-r border-purple-500/20 overflow-hidden
          transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'md:w-64' : 'md:w-0'}
          ${isMobileMenuOpen ? 'w-64' : 'w-0'}
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="h-full py-20 overflow-y-auto min-w-64">
          <div className="space-y-1 px-3">
            {mainNav.map(item => (
              <NavLink
                key={item.path}
                item={item}
                isActive={activeSection === item.path}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>

          <div className="mt-6 space-y-2">
            {folders.map(folder => (
              <FolderSection
                key={folder.name}
                folder={folder}
                isExpanded={expandedFolders.includes(folder.name)}
                isOpen={isOpen || isMobileMenuOpen}
                currentPath={activeSection}
                onToggle={() => toggleFolder(folder.name)}
                onNavClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}