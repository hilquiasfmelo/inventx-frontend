import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
