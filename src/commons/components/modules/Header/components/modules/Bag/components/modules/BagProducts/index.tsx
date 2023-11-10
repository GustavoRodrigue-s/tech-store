import { Link } from 'react-router-dom';

import { IBagProduct } from '../../../../../../../../../types';
import { priceFormatter } from '../../../../../../../../../utils/formatters';
import { PrimaryButton } from '../../../../../../../../elements/buttons';
import { JustifySpaceBetween } from '../../../../../../../../elements/wrappers';
import { Strong } from '../../../../../elements/texts';
import { ProductCard } from '../../elements/cards/ProductCard';

import * as S from './styles';

interface ProductsContentProps {
  price: number;
  products: IBagProduct[];
}

export const BagProducts: React.FC<ProductsContentProps> = ({
  price,
  products,
}) => (
  <S.Container>
    <header>
      <Strong>Minha Sacola</Strong>
    </header>

    <S.ProductsWrapper>
      {products?.map(props => (
        <ProductCard key={props.id} {...props} />
      ))}
    </S.ProductsWrapper>

    <footer>
      <JustifySpaceBetween>
        <Strong>Valor Total:</Strong>
        <Strong>{priceFormatter(price)}</Strong>
      </JustifySpaceBetween>

      <Link to="/checkout">
        <PrimaryButton isFullWidth>Ver Sacola</PrimaryButton>
      </Link>
    </footer>
  </S.Container>
);
