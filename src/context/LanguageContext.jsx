import { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng) => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    const newPath = pathSegments.length > 1 ? pathSegments.slice(1).join('/') : '';
    i18n.changeLanguage(lng);
    
    navigate(`/${lng}/${newPath}`);
  };

  const getLocalizedPath = (path) => {
    return `/${i18n.language}${path}`;
  };

  useEffect(() => {
    const pathLng = location.pathname.split('/')[1];
    if (['en', 'th', 'zh', 'ja'].includes(pathLng) && pathLng !== i18n.language) {
      i18n.changeLanguage(pathLng);
    }
  }, [location.pathname, i18n]);

  return (
    <LanguageContext.Provider value={{ changeLanguage, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export { LanguageContext };

