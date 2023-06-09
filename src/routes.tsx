import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Hello World! - Home</h1>} />
    </Routes>
  </BrowserRouter>
);
