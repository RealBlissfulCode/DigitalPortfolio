import { 
  Home,
  Code,
  Dumbbell,
  Music,
  Briefcase,
  FileText,
  Users,
  Image,
  Mail,
  FolderLock
} from 'lucide-react';
import { NavItem, NavFolder } from './types';

export const mainNav: NavItem[] = [
  { name: 'Root Directory', path: '/', icon: Home },
];

export const getFolders = () => [
  {
    name: 'My_Room',
    icon: Code,
    path: '/my-room',
    items: [
      {
        name: 'Top Hobbies',
        path: '/my-room#hobbies',
        icon: Code,
        subItems: [
          { name: 'Coding', path: '/my-room#coding', icon: Code },
          { name: 'Calisthenics', path: '/my-room#calisthenics', icon: Dumbbell },
          { name: 'Music', path: '/my-room#music', icon: Music }
        ]
      }
    ]
  },
  {
    name: 'Projects',
    icon: Briefcase,
    path: '/projects',
    items: [
      { name: 'View Projects', path: '/projects', icon: Briefcase }
    ]
  },
  {
    name: 'Resume',
    icon: FileText,
    path: '/resume',
    items: [
      { name: 'My_Resume', path: '/resume#view', icon: FileText }
    ]
  },
  {
    name: 'Friends',
    icon: Users,
    path: '/friends',
    items: [
      { name: 'Shared_Memories', path: '/friends#memories', icon: Image }
    ]
  },
  {
    name: 'Gallery',
    icon: Image,
    path: '/gallery',
    items: [
      { name: 'Photos', path: '/gallery#photos', icon: Image }
    ]
  },
  {
    name: 'Contact',
    icon: Mail,
    path: '/contact',
    items: [
      { name: 'Social Links', path: '/contact#social', icon: Users }
    ]
  },
  {
    name: 'Extras',
    icon: FolderLock,
    path: '/extras',
    items: [],
    requiresAuth: true
  }
];