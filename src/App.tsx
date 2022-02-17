import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ReactNotifications } from 'react-notifications-component';

import { Router } from './routes';

import { GlobalStyle } from './styles';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotifications />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
