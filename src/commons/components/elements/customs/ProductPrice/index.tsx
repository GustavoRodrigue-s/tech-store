import styled, { css } from 'styled-components';

import { IProduct } from '../../../../types';
import {
  priceFormatter,
  priceWithDiscountFormatter,
} from '../../../../utils/formatters';

interface ProductPriceProps {
  price: IProduct['price'];
  discount: IProduct['discount'];
}

const Container = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.weights.semiBold};
  `}
`;

export const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  discount,
}) => (
  <Container>
    {discount
      ? priceFormatter(priceWithDiscountFormatter(price, discount))
      : priceFormatter(price)}
  </Container>
);
