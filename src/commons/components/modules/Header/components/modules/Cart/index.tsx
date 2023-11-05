import { BsBag } from 'react-icons/bs';

import { useCartContext } from '../../../../../../contexts/CartContext';
import { Popover } from '../../../../Popover';
import { Empty } from '../../elements/customs';
import { CartProducts } from './components/modules';

import * as S from './styles';

const iconSize = 24;

export const Cart: React.FC = () => {
  const { cart, cartProducts, totalPrice } = useCartContext();

  const amount = cart.reduce((acc, { amount }) => (acc += amount), 0);

  return (
    <Popover.Root>
      <Popover.Target>
        <S.CartButton isWithHover>
          <BsBag size={iconSize} />
          <S.Amount>{amount}</S.Amount>
        </S.CartButton>
      </Popover.Target>

      <Popover.Content width={300}>
        <S.Content>
          {amount === 0 ? (
            <Empty>Seu carrinho está vazio!</Empty>
          ) : (
            <CartProducts price={totalPrice} products={cartProducts} />
          )}
        </S.Content>
      </Popover.Content>

      <Popover.Overlay />
    </Popover.Root>
  );
};
