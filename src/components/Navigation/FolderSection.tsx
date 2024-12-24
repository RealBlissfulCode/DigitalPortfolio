import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Lock } from 'lucide-react';
import { NavFolder, NavItem } from './types';
import NavLink from './NavLink';
import { useAuthStore } from '../../store/useAuthStore';
import AuthDialog from './AuthDialog';

interface FolderSectionProps {
  folder: NavFolder;
  isExpanded: boolean;
  isOpen: boolean;
  currentPath: string;
  onToggle: () => void;
  onNavClick: () => void;
}

export default function FolderSection({
  folder,
  isExpanded,
  isOpen,
  currentPath,
  onToggle,
  onNavClick
}: FolderSectionProps) {
  const Icon = folder.icon;
  const navigate = useNavigate();
  const { isExtrasUnlocked } = useAuthStore();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  
  const isLocked = folder.requiresAuth && !isExtrasUnlocked;

  const handleToggle = () => {
    if (isLocked) {
      setShowAuthDialog(true);
    } else {
      onToggle();
    }
  };

  return (
    <div className="px-3">
      <div className="flex">
        <button
          className="p-2 text-gray-400 hover:text-purple-300"
          onClick={handleToggle}
          aria-label="Toggle folder"
        >
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        
        <Link
          to={folder.path}
          className={`flex-1 flex items-center gap-2 px-4 py-2 text-sm 
            rounded-lg transition-all border-l-2 border-y border-r
            ${isExpanded 
              ? 'text-purple-300 border-purple-500/30 bg-purple-600/10' 
              : 'text-gray-400 hover:text-purple-300 border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-600/5'}`}
          onClick={(e) => {
            e.preventDefault();
            if (isLocked) {
              setShowAuthDialog(true);
            } else {
              navigate(folder.path);
              onNavClick();
            }
          }}
        >
          <Icon size={16} />
          {isOpen && (
            <>
              <span className="font-mono">{folder.name}</span>
              {isLocked && <Lock size={12} className="text-purple-400" />}
            </>
          )}
        </Link>
      </div>

      {!isLocked && isExpanded && folder.items.length > 0 && (
        <div className="ml-4 mt-1 space-y-1">
          {folder.items.map(item => (
            <NavLink
              key={item.path}
              item={item}
              isActive={currentPath === item.path}
              onClose={onNavClick}
            />
          ))}
        </div>
      )}

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </div>
  );
}