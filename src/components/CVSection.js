import React from 'react';
import PropTypes from 'prop-types';

export const CVSection = ({ title, children, testId }) => {
  return (
    <section className="cv-section" data-testid={testId}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};

CVSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};

CVSection.defaultProps = {
  testId: undefined,
};
