import React from 'react';

import { Home } from './pages/Home';

import { GlobalStyle } from './styles';

export const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}
