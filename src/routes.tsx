import { Routes, Route, BrowserRouter } from 'react-router-dom';

import * as P from './pages';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<P.HomePage />} />
      <Route path="/checkout" element={<P.CheckoutPage />} />
      <Route path="*" element={<P.ErrorPage />} />
    </Routes>
  </BrowserRouter>
);
