import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import {
  IconButton,
  PrimaryButton,
} from '../../../../../../commons/components/elements/buttons';
import { Stars } from '../../../../../../commons/components/elements/customs';
import { useCartContext } from '../../../../../../commons/contexts/CartContext';
import { IProduct } from '../../../../../../commons/types';
import {
  priceFormatter,
  priceWithDiscountFormatter,
} from '../../../../../../commons/utils/formatters';

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
}) => {
  const { handleAdd } = useCartContext();

  return (
    <S.Container>
      <S.FavoriteWrapper isFavorite={isFavorite}>
        <IconButton
          title={isFavorite ? 'Desfavoritar produto' : 'Favoritar produto'}
          onClick={() => onFavorite(id)}
        >
          {isFavorite ? (
            <AiFillHeart size={24} />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </IconButton>
      </S.FavoriteWrapper>

      <S.ImageWrapper>
        <img src={image} alt="Imagem do produto" />
      </S.ImageWrapper>

      <S.Content>
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          <small>{units} unidades restantes</small>
        </div>
      </S.Content>

      <Stars filledStars={filledStars ?? 0} />

      <S.PriceWrapper>
        <div>
          {discount && (
            <small>
              De <del>{priceFormatter(price)}</del> <span>(↓{discount}%)</span>{' '}
              por:
            </small>
          )}
        </div>
        <div>
          <strong>
            {discount
              ? priceFormatter(priceWithDiscountFormatter(price, discount))
              : priceFormatter(price)}
          </strong>
        </div>
      </S.PriceWrapper>

      <S.ButtonWrapper>
        <PrimaryButton
          onClick={() => handleAdd(id)}
          style={{ height: '40px' }}
          isFullWidth
        >
          Adicionar Produto
        </PrimaryButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};
