import { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useLang = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLang must be used within LanguageProvider');
  }

  const { lang, switchLanguage } = context;

  useEffect(() => {
    document.title = lang === 'en' ? "Niclas' CV" : "Niclas' CV";
  }, [lang]);

  return { lang, switchLanguage };
};
