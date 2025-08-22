import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const useActiveRoute = () => {
  const location = useLocation();

  const isActive = useMemo(() => {
    return (path: string) => {
      // Remove language prefix for comparison
      const currentPath = location.pathname.replace(/^\/(fr|es|ar)/, '') || '/';
      const targetPath = path === '/' ? '/' : path;
      
      // Exact match for home page
      if (targetPath === '/' && currentPath === '/') {
        return true;
      }
      
      // Partial match for other pages
      if (targetPath !== '/' && currentPath.startsWith(targetPath)) {
        return true;
      }
      
      return false;
    };
  }, [location.pathname]);

  return { isActive, currentPath: location.pathname };
};