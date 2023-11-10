import { BiMinus, BiPlus, BiTrashAlt } from 'react-icons/bi';

import { IconButton } from '../../../../../commons/components/elements/buttons';
import { ProductImage } from '../../../../../commons/components/elements/customs';
import { Ellipsis } from '../../../../../commons/components/elements/texts';
import { useBagContext } from '../../../../../commons/contexts/BagContext';
import {
  priceFormatter,
  priceWithDiscountFormatter,
} from '../../../../../commons/utils/formatters';

import * as S from './styles';

export const OrderProducts: React.FC = () => {
  const { bagProducts, handleAdd, handleRemove } = useBagContext();

  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Produto</S.Th>
            <S.Th>Quantidade</S.Th>
            <S.Th>Preço</S.Th>
            <S.Th />
          </S.Tr>
        </S.Thead>

        <S.Tbody>
          {bagProducts.map(
            ({ id, name, amount, image, price, discount, parcels }) => (
              <S.Tr key={id}>
                <S.Td>
                  <div className="name">
                    <ProductImage size={86} src={image} />
                    <Ellipsis as="strong" lines={2}>
                      {name}
                    </Ellipsis>
                  </div>
                </S.Td>

                <S.Td>
                  <div className="amount">
                    <IconButton
                      isWithHover
                      onClick={() => handleRemove(id)}
                      disabled={amount === 1}
                    >
                      <BiMinus size={14} />
                    </IconButton>
                    {amount}
                    <IconButton isWithHover onClick={() => handleAdd(id)}>
                      <BiPlus size={14} />
                    </IconButton>
                  </div>
                </S.Td>

                {discount ? (
                  <S.Td>
                    <div className="price-with-discount">
                      <small className="old-price">
                        <del>{priceFormatter(price)}</del>
                      </small>
                      <S.Price>
                        {parcels} x{' '}
                        {priceFormatter(
                          priceWithDiscountFormatter(price / parcels, discount)
                        )}
                      </S.Price>
                      <small className="discount">
                        {discount}% de desconto aplicado!
                      </small>
                    </div>
                  </S.Td>
                ) : (
                  <S.Td>
                    <S.Price>
                      {parcels} x {priceFormatter(price)}
                    </S.Price>
                  </S.Td>
                )}

                <S.Td>
                  <IconButton
                    isWithHover
                    onClick={() => handleRemove(id, true)}
                  >
                    <BiTrashAlt size={24} />
                  </IconButton>
                </S.Td>
              </S.Tr>
            )
          )}
        </S.Tbody>
      </S.Table>
    </S.Container>
  );
};
