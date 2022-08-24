import { useContext } from 'react';

import { CatalogContext } from '../CatalogContext';

function useCatalog() {
  return useContext(CatalogContext);
}

export default useCatalog;