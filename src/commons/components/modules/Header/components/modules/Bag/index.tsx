import { BsBag } from 'react-icons/bs';

import { useBagContext } from '../../../../../../contexts/BagContext';
import { Popover } from '../../../../Popover';
import { Empty } from '../../elements/customs';
import { BagProducts } from './components/modules';

import * as S from './styles';

const iconSize = 24;

export const Bag: React.FC = () => {
  const { bag, bagProducts, totalPrice } = useBagContext();

  const amount = bag.reduce((acc, { amount }) => (acc += amount), 0);

  return (
    <Popover.Root>
      <Popover.Target>
        <S.BagButton isWithHover>
          <BsBag size={iconSize} />
          <S.Amount>{amount}</S.Amount>
        </S.BagButton>
      </Popover.Target>

      <Popover.Content width={300}>
        <S.Content>
          {amount === 0 ? (
            <Empty>Sua sacola está vazia!</Empty>
          ) : (
            <BagProducts price={totalPrice} products={bagProducts} />
          )}
        </S.Content>
      </Popover.Content>

      <Popover.Overlay />
    </Popover.Root>
  );
};
