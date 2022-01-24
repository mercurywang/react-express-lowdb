import React from 'react';
import { Route, Navigate, Routes, HashRouter } from 'react-router-dom';
import Articles from './pages/Articles';

const RoutesConfig = (props: any) => (
  <HashRouter {...props}>
    <Routes>
      <Route path="/articles" element={<Articles />} />
      <Route path="*" element={<Navigate replace to="/articles" />} />
    </Routes>
  </HashRouter>
);

export default RoutesConfig;
