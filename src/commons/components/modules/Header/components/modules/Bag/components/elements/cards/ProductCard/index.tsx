import { BiPlus, BiMinus, BiTrashAlt } from 'react-icons/bi';

import { useBagContext } from '../../../../../../../../../../contexts/BagContext';
import { IBagProduct } from '../../../../../../../../../../types';
import {
  priceFormatter,
  priceWithDiscountFormatter,
} from '../../../../../../../../../../utils/formatters';
import { IconButton } from '../../../../../../../../../elements/buttons';
import { ProductImage } from '../../../../../../../../../elements/customs';
import { Ellipsis } from '../../../../../../../../../elements/texts';
import { JustifySpaceBetween } from '../../../../../../../../../elements/wrappers';

import * as S from './styles';

type ProductCardProps = IBagProduct;

const ICON_SIZE = 14;

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  units,
  amount,
  price,
  discount,
}) => {
  const { handleAdd, handleRemove } = useBagContext();

  return (
    <S.Container>
      <ProductImage src={image} size={46} />
      <div>
        <Ellipsis lines={2} as="strong">
          {name}
        </Ellipsis>
        <JustifySpaceBetween>
          <S.AmountWrapper>
            <IconButton isWithHover onClick={() => handleRemove(id)}>
              {amount > 1 ? (
                <BiMinus size={ICON_SIZE} />
              ) : (
                <BiTrashAlt size={ICON_SIZE} />
              )}
            </IconButton>

            <small>{amount}</small>

            <IconButton isWithHover onClick={() => handleAdd(id)}>
              <BiPlus size={ICON_SIZE} />
            </IconButton>
          </S.AmountWrapper>
          <small>
            {priceFormatter(
              discount ? priceWithDiscountFormatter(price, discount) : price
            )}
          </small>
        </JustifySpaceBetween>
      </div>
    </S.Container>
  );
};
