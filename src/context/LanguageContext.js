import React, { createContext, useState, useCallback } from 'react';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants/labels';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);

  const switchLanguage = useCallback((newLang) => {
    if (SUPPORTED_LANGUAGES.includes(newLang)) {
      setLang(newLang);
    }
  }, []);

  const value = {
    lang,
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
