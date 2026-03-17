import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../hooks/useLang';

export const CVHeader = ({ name, lastName, title, quote }) => {
  const { lang } = useLang();

  return (
    <header className="cv-header" role="banner">
      <h1>{name} {lastName}</h1>
      {title && <h2 className="cv-title">{title}</h2>}
      <p className="quote">{quote[lang]}</p>
    </header>
  );
};

CVHeader.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string,
  quote: PropTypes.shape({
    en: PropTypes.string.isRequired,
    da: PropTypes.string.isRequired,
  }).isRequired,
};
