import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { RoleProvider } from './context/RoleContext';
import { CV } from './components/CV';

export const App = () => {
  return (
    <RoleProvider>
      <LanguageProvider>
        <CV />
      </LanguageProvider>
    </RoleProvider>
  );
};

export default App;
