import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../hooks/useLang';
import './LanguageToggle.scss';

export const LanguageToggle = () => {
  const { lang, switchLanguage } = useLang();

  return (
    <div className="lang-toggle no-print" role="group" aria-label="Language selection">
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => switchLanguage('en')}
        aria-pressed={lang === 'en'}
      >
        English
      </button>
      <button
        type="button"
        className={lang === 'da' ? 'active' : ''}
        onClick={() => switchLanguage('da')}
        aria-pressed={lang === 'da'}
      >
        Dansk
      </button>
    </div>
  );
};

LanguageToggle.propTypes = {};
