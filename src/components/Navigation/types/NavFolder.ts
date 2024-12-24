import { ElementType } from 'react';
import { NavItem } from './NavItem';

export interface NavFolder {
  name: string;
  icon: ElementType;
  path: string;
  items: NavItem[];
  requiresAuth?: boolean;
}