import { Cart } from '../../elements/customs';
import { SearchInput } from '../../elements/forms';
import { Logo } from '../Logo';

import * as S from './styles';

export const Header: React.FC = () => (
  <S.Container>
    <Logo isLink />
    <div>
      <SearchInput value="" placeholder="Buscar produto..." />
      <Cart />
    </div>
  </S.Container>
);
