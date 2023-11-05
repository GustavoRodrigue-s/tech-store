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

const initialFilters: IFilters = {
  departments: [],
  price: [],
  discount: [],
  rating: [],
};

export const useFilters = (products: IProduct[]) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const filteredProducts = useMemo(
    () => handleProductFilters(products),
    [products]
  );

  const handleSetFilters = useCallback(
    (label: ILabel, type: keyof IFilters) => {
      setFilters(prevFilters => {
        const labels = prevFilters[type];
        const isAdd = !labels.includes(label);

        const newLabels = isAdd
          ? [...labels, label]
          : labels.filter(currentLabel => currentLabel !== label);

        return {
          ...prevFilters,
          [type]: newLabels,
        };
      });
    },
    []
  );

  return {
    filters,
    filteredProducts,
    handleSetFilters,
  };
};
