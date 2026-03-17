import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../hooks/useLang';

export const SkillItem = ({ name, text }) => {
  const { lang } = useLang();

  const displayName = typeof name === 'string' ? name : name[lang];

  return (
    <div className="soft-skill">
      <h3>{displayName}</h3>
      <p>{text[lang]}</p>
    </div>
  );
};

SkillItem.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      en: PropTypes.string.isRequired,
      da: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  text: PropTypes.shape({
    en: PropTypes.string.isRequired,
    da: PropTypes.string.isRequired,
  }).isRequired,
};
