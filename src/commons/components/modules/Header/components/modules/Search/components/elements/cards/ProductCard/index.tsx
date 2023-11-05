import { IProduct } from '../../../../../../../../../../types';
import {
  Discount,
  ProductPrice,
  Stars,
} from '../../../../../../../../../elements/customs';
import { Ellipsis } from '../../../../../../../../../elements/texts';
import { createSearchUrl } from '../../../../utils';

import * as S from './styles';

type ProductCardProps = Omit<IProduct, 'id'>;

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  filledStars,
  discount,
}) => (
  <S.Container to={createSearchUrl(name)}>
    <img src={image} alt="Imagem do produto" />
    <div>
      <Ellipsis as="strong" lines={2}>
        {name}
      </Ellipsis>
      <Stars filledStars={filledStars} size="md" />
      <S.PriceWrapper>
        <ProductPrice price={price} discount={discount} />
        {!!discount && <Discount discount={discount} />}
      </S.PriceWrapper>
    </div>
  </S.Container>
);
