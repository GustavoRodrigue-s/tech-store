import { useSearchParams } from 'react-router-dom';

import { Ellipsis } from '../../../../../commons/components/elements/texts';
import {
  LayoutTransition,
  Motion,
  Presence,
} from '../../../../../commons/components/modules';
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
  const [searchParams] = useSearchParams();

  const {
    formattedProducts,
    orderBy,
    handleOrderChange,
    handleFavorite,
    isFavorite,
  } = useProducts(props);

  const search = searchParams.get('search');

  return (
    <S.Container>
      <S.Header>
        <Ellipsis as="h2" lines={1}>
          Buscar por: <q>{search ? search : 'Todos os produtos'}</q>
        </Ellipsis>

        <OrderBy order={orderBy} handleOrderChange={handleOrderChange} />
      </S.Header>

      <S.ProductsWrapper>
        <Presence>
          {formattedProducts?.map(product => (
            <Motion
              key={product?.id}
              init={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, duration: 200 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <LayoutTransition duration={300}>
                <ProductCard
                  isFavorite={isFavorite(product.id)}
                  onFavorite={handleFavorite}
                  {...product}
                />
              </LayoutTransition>
            </Motion>
          ))}
        </Presence>
      </S.ProductsWrapper>
    </S.Container>
  );
};
