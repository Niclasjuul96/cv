import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../hooks/useLang';
import { renderDate } from '../utils/helpers';

export const EducationItem = ({ name, date, description }) => {
  const { lang } = useLang();

  const displayName = typeof name === 'string' ? name : name[lang];

  return (
    <div className="education-item avoid-break">
      <h3>{displayName}</h3>
      <h4>{renderDate(date)}</h4>
      <p>{description[lang]}</p>
    </div>
  );
};

EducationItem.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      en: PropTypes.string.isRequired,
      da: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  description: PropTypes.shape({
    en: PropTypes.string.isRequired,
    da: PropTypes.string.isRequired,
  }).isRequired,
};
