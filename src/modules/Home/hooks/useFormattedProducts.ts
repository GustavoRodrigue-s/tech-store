import { useMemo } from 'react';

import { IProduct } from '../../../commons/types';
import { IFilteredProducts, ILabel } from '../types';
import { formatFiltersForProducts } from '../utils/formatters';
import { IFilters } from './useFilters';

const isCommonProduct = (filters: IProduct[][], productId: IProduct['id']) => {
  return filters.every(products => products.some(({ id }) => id === productId));
};

export const useFormattedProducts = (
  filters: IFilters,
  products: IProduct[],
  filteredProducts: IFilteredProducts
) => {
  const allFilteredProducts = useMemo(
    () => [
      ...filteredProducts.sortedByDepartments,
      ...filteredProducts.sortedByDiscounts,
      ...filteredProducts.sortedByPrices,
      ...filteredProducts.sortedByStars,
    ],
    [filteredProducts]
  );

  const formattedProducts = useMemo(() => {
    const filtersExists: ILabel[][] = Object.values(filters).filter(
      products => products.length
    );

    if (!filtersExists.length) {
      return products;
    }

    const formattedFilters = formatFiltersForProducts(
      filtersExists,
      allFilteredProducts
    );

    const filterWithLessProducts = formattedFilters.reduce(
      (acc, products) =>
        !acc.length || products.length < acc.length ? products : acc,
      []
    );

    const otherFilters = formattedFilters.filter(
      products => products !== filterWithLessProducts
    );

    return filterWithLessProducts.filter(({ id }) =>
      isCommonProduct(otherFilters, id)
    );
  }, [filters, products, allFilteredProducts]);

  return formattedProducts;
};
