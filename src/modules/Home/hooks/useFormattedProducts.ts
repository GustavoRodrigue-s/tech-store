import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IProduct } from '../../../commons/types';
import { matchSearch } from '../../../commons/utils/helpers';
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
  const [searchParams] = useSearchParams();

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

  const search = searchParams.get('search');

  if (search) {
    const matcher = (value: string) => matchSearch(search, value);

    return formattedProducts.filter(({ name, department }) =>
      [name, department].some(matcher)
    );
  }

  return formattedProducts;
};
