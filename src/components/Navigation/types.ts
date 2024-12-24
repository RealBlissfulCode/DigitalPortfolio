import { ElementType } from 'react';

export interface NavItem {
  name: string;
  path: string;
  icon: ElementType;
  subItems?: NavItem[];
}

export interface NavFolder {
  name: string;
  icon: ElementType;
  items: NavItem[];
}