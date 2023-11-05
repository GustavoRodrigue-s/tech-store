import { Routes, Route, BrowserRouter } from 'react-router-dom';

import * as P from './pages';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<P.HomePage />} />
      <Route path="*" element={<P.Error />} />
    </Routes>
  </BrowserRouter>
);
