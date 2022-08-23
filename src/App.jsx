import CatalogContext from './store';

import RoutesApp from './routes';

import './index.css';

import catalog from './assets/catalog/catalog.json';

export default function App() {
  return (
    <CatalogContext.Provider value={catalog}>
      <RoutesApp />
    </CatalogContext.Provider>
  );
}