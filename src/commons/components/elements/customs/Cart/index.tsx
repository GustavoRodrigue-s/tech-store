import { AiOutlineShoppingCart } from 'react-icons/ai';

import * as S from './styles';

export const Cart: React.FC = () => (
  <S.Container>
    <S.Amount>{7}</S.Amount>
    <AiOutlineShoppingCart size={36} />
  </S.Container>
);
