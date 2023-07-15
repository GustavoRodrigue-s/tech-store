import { IProduct } from '../../../../../commons/types';
import { IFilters } from '../../../hooks/useFilters';
import { IFilteredProducts } from '../../../types';
import { ProductCard } from '../../elements/cards';
import { OrderBy } from '../../elements/customs';
import { useProducts } from './useProducts';

import * as S from './styles';

export interface ProductsProps {
  filters: IFilters;
  products: IProduct[];
  filteredProducts: IFilteredProducts;
}

export const Products: React.FC<ProductsProps> = props => {
  const {
    formattedProducts,
    orderBy,
    handleOrderChange,
    handleFavorite,
    isFavorite,
  } = useProducts(props);

  return (
    <S.Container>
      <S.Header>
        <h2>
          Buscar por: <q>Todos os produtos</q>
        </h2>

        <OrderBy order={orderBy} handleOrderChange={handleOrderChange} />
      </S.Header>

      <S.ProductsWrapper>
        {formattedProducts?.map(product => (
          <ProductCard
            key={product?.id}
            isFavorite={isFavorite(product.id)}
            onFavorite={handleFavorite}
            {...product}
          />
        ))}
      </S.ProductsWrapper>
    </S.Container>
  );
};
