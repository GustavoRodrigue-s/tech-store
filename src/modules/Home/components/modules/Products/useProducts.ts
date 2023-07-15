import { useState } from 'react';

import { ProductsProps } from '.';
import { useFavorite, useFormattedProducts } from '../../../hooks';
import { handleProductSorts } from '../../../utils';
import { IOrderBy } from '../../elements/customs/OrderBy';

export const useProducts = ({
  filters,
  products,
  filteredProducts,
}: ProductsProps) => {
  const [orderBy, setOrderBy] = useState<IOrderBy>('asc name');

  const { isFavorite, handleFavorite } = useFavorite();

  const handleOrderChange = (order: IOrderBy) => setOrderBy(order);

  const formattedProducts = useFormattedProducts(
    filters,
    products,
    filteredProducts
  );

  handleProductSorts(orderBy, formattedProducts, isFavorite);

  return {
    formattedProducts,
    orderBy,
    handleOrderChange,
    handleFavorite,
    isFavorite,
  };
};
