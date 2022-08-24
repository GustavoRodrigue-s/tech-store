import { CatalogProvider } from './store/CatalogContext';

import RoutesApp from './routes';

import './index.css';

export default function App() {
  return (
    <CatalogProvider>
      <RoutesApp />
    </CatalogProvider>
  );
}