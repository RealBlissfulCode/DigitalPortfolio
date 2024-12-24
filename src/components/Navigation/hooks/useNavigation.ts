import { useLocation } from 'react-router-dom';

export function useNavigation() {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const isActivePath = (path: string) => {
    const [routePath, hash] = path.split('#');
    if (!hash) {
      return location.pathname === routePath;
    }
    return location.pathname === routePath && location.hash === `#${hash}`;
  };

  return {
    scrollToSection,
    isActivePath,
    currentPath: location.pathname + location.hash
  };
}