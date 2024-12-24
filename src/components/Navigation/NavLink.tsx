import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavItem } from './types';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClose?: () => void;
}

export default function NavLink({ item, isActive, onClose }: NavLinkProps) {
  const Icon = item.icon;
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(item.path);
    if (item.path.includes('#')) {
      setTimeout(() => {
        const sectionId = item.path.split('#')[1];
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    if (onClose) onClose();
  };
  
  return (
    <Link
      to={item.path}
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all
        border-l-2 border-y border-r
        ${isActive 
          ? 'bg-purple-600/20 text-purple-400 border-purple-500/50' 
          : 'text-gray-400 hover:bg-purple-600/10 hover:text-purple-300 border-purple-500/10 hover:border-purple-500/30'}`}
    >
      <Icon size={16} />
      <span className="font-mono">{item.name}</span>
    </Link>
  );
}