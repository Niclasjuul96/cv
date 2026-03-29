import React from 'react';
import { useRole } from '../hooks/useRole';
import { ROLES } from '../context/RoleContext';
import PropTypes from 'prop-types';
import './RoleToggle.scss';

export const RoleToggle = () => {
  const { role, switchRole, isDeveloper, isITSupport, isGeneral } = useRole();

  return (
    <div className="role-toggle">
      <label htmlFor="role-select" className="role-label">View as:</label>
      <div className="role-buttons">
        <button
          type="button"
          className={`role-btn ${isDeveloper ? 'active' : ''}`}
          onClick={() => switchRole(ROLES.DEVELOPER)}
          aria-pressed={isDeveloper}
        >
          💻 Software Engineer
        </button>
        <button
          type="button"
          className={`role-btn ${isITSupport ? 'active' : ''}`}
          onClick={() => switchRole(ROLES.IT_SUPPORT)}
          aria-pressed={isITSupport}
        >
          🛠️ IT Support
        </button>
        <button
          type="button"
          className={`role-btn ${isGeneral ? 'active' : ''}`}
          onClick={() => switchRole(ROLES.GENERAL)}
          aria-pressed={isGeneral}
        >
          👤 General Profile
        </button>
      </div>
    </div>
  );
};

RoleToggle.propTypes = {};
