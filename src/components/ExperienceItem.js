import React from 'react';
import PropTypes from 'prop-types';
import { useLang } from '../hooks/useLang';
import { renderDate } from '../utils/helpers';

export const ExperienceItem = ({ company, date, description }) => {
  const { lang } = useLang();

  return (
    <div className="experience-item avoid-break">
      <h3>{company}</h3>
      <h4>{renderDate(date)}</h4>
      <p>{description[lang]}</p>
    </div>
  );
};

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  description: PropTypes.shape({
    en: PropTypes.string.isRequired,
    da: PropTypes.string.isRequired,
  }).isRequired,
};
