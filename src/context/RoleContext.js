import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export const RoleContext = createContext();

export const ROLES = {
  DEVELOPER: 'developer',
  IT_SUPPORT: 'it-support',
};

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(ROLES.DEVELOPER);

  const switchRole = useCallback((newRole) => {
    if (Object.values(ROLES).includes(newRole)) {
      setRole(newRole);
    }
  }, []);

  const value = {
    role,
    switchRole,
    isDeveloper: role === ROLES.DEVELOPER,
    isITSupport: role === ROLES.IT_SUPPORT,
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};

RoleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
