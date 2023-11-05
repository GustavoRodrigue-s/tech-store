import { useCallback } from 'react';

import { useLocalStorage } from '../../../commons/hooks';

const FAVORITE_KEY = 'favoriteProducts';

export const useFavorite = () => {
  const [favoriteProductIds, setFavoriteProductIds] = useLocalStorage<number[]>(
    FAVORITE_KEY,
    []
  );

  const handleFavorite = useCallback(
    (productId: number) => {
      const productExists = favoriteProductIds.find(id => id === productId);

      const newFavoriteProducts = productExists
        ? favoriteProductIds.filter(id => id !== productId)
        : [...favoriteProductIds, productId];

      setFavoriteProductIds(newFavoriteProducts);
    },
    [favoriteProductIds, setFavoriteProductIds]
  );

  const isFavorite = useCallback(
    (productId: number) => {
      return favoriteProductIds.some(id => id === productId);
    },
    [favoriteProductIds]
  );

  return {
    handleFavorite,
    isFavorite,
  };
};
