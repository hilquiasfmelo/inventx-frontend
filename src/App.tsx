import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Router } from './routes';

import { GlobalStyle } from './styles';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
