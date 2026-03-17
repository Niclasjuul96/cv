import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../hooks/useLang';

export const AboutSection = ({ aboutText }) => {
  const { lang } = useLang();

  return (
    <section className="about-me" role="region" aria-label="About me">
      <p>{aboutText[lang]}</p>
    </section>
  );
};

AboutSection.propTypes = {
  aboutText: PropTypes.shape({
    en: PropTypes.string.isRequired,
    da: PropTypes.string.isRequired,
  }).isRequired,
};
