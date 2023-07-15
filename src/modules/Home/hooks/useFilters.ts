import { useState, useMemo, useCallback } from 'react';

import { IProduct } from '../../../commons/types';
import { ILabel } from '../types';
import { handleProductFilters } from '../utils';

export interface IFilters {
  departments: ILabel[];
  price: ILabel[];
  discount: ILabel[];
  rating: ILabel[];
}

export const useFilters = (products: IProduct[]) => {
  const [filters, setFilters] = useState<IFilters>({
    departments: [],
    price: [],
    discount: [],
    rating: [],
  });

  const filteredProducts = useMemo(
    () => handleProductFilters(products),
    [products]
  );

  const handleSetFilters = useCallback(
    (isAdd: boolean, label: ILabel, type: keyof IFilters) => {
      const add = (oldLabels: ILabel[]) => [...oldLabels, label];

      const remove = (oldLabels: ILabel[]) =>
        oldLabels.filter(currentLabel => currentLabel !== label);

      setFilters(filters => ({
        ...filters,
        [type]: isAdd ? add(filters[type]) : remove(filters[type]),
      }));
    },
    []
  );

  return {
    filters,
    filteredProducts,
    handleSetFilters,
  };
};
