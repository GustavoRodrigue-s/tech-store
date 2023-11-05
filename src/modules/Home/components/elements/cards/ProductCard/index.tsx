import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { IconButton } from '../../../../../../commons/components/elements/buttons';
import {
  Discount,
  ProductPrice,
  Stars,
} from '../../../../../../commons/components/elements/customs';
import { Ellipsis } from '../../../../../../commons/components/elements/texts';
import { IProduct } from '../../../../../../commons/types';
import { priceFormatter } from '../../../../../../commons/utils/formatters';
import { AddProductButton } from '../../buttons';

import * as S from './styles';

interface ProductCardProps extends IProduct {
  isFavorite: boolean;
  onFavorite: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  discount,
  units,
  filledStars,
  isFavorite,
  onFavorite,
}) => (
  <S.Container>
    <S.FavoriteWrapper isFavorite={isFavorite}>
      <IconButton
        title={isFavorite ? 'Desfavoritar produto' : 'Favoritar produto'}
        onClick={() => onFavorite(id)}
      >
        {isFavorite ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      </IconButton>
    </S.FavoriteWrapper>

    <S.ImageWrapper>
      <img src={image} alt="Imagem do produto" />
    </S.ImageWrapper>

    <S.Content>
      <div>
        <Ellipsis lines={2} as="strong">
          {name}
        </Ellipsis>
      </div>
      <div>
        <small>{units} unidades restantes</small>
      </div>
    </S.Content>

    <Stars filledStars={filledStars} />

    <S.PriceWrapper>
      <div>
        {discount && (
          <small>
            De <del>{priceFormatter(price)}</del>{' '}
            <Discount discount={discount} /> por:
          </small>
        )}
      </div>
      <div>
        <ProductPrice price={price} discount={discount} />
      </div>
    </S.PriceWrapper>

    <S.ButtonWrapper>
      <AddProductButton productId={id} />
    </S.ButtonWrapper>
  </S.Container>
);
