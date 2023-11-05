import { IProduct } from '../../../commons/types';
import { IOrderBy } from '../components/elements/customs/OrderBy';

type IsFavorite = (productId: number) => boolean;

const orders = {
  'asc name': (products: IProduct[]) => {
    products.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();

      return aName > bName ? 1 : aName < bName ? -1 : 0;
    });
  },
  'desc name': (products: IProduct[]) => {
    products.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();

      return aName < bName ? 1 : aName > bName ? -1 : 0;
    });
  },
  favorites: (products: IProduct[], isFavorite: IsFavorite) => {
    products.sort((a, b) => (isFavorite(a.id) ? -1 : isFavorite(b.id) ? 1 : 0));
  },
  'asc price': (products: IProduct[]) => {
    products.sort((a, b) =>
      a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    );
  },
  'desc price': (products: IProduct[]) => {
    products.sort((a, b) =>
      a.price > b.price ? 1 : a.price < b.price ? -1 : 0
    );
  },
};

export const handleProductSorts = (
  OrderBy: IOrderBy,
  products: IProduct[],
  isFavorite: IsFavorite
) => {
  orders[OrderBy]?.(products, isFavorite);
};
