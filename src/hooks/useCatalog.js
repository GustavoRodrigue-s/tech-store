import { useContext } from 'react';

import { CatalogContext } from '../store/CatalogContext';

function useCatalog() {
  return useContext(CatalogContext);
}

export default useCatalog;