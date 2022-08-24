import { createContext } from 'react';

import catalog from '../assets/catalog.json';

const CatalogContext = createContext();

function CatalogProvider({ children }) {
  return (
    <CatalogContext.Provider value={catalog}>
      {children}
    </CatalogContext.Provider>
  )
}

export { CatalogContext, CatalogProvider }; 