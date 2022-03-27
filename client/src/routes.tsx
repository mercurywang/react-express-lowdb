import React from 'react';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

const RoutesConfig = (props: any) => (
  <BrowserRouter {...props}>
    <Routes>
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
      <Route path="*" element={<Navigate replace to="/articles" />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
