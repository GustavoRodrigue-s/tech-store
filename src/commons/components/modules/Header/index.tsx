import { Logo } from '../Logo';
import { Cart, Search } from './components/modules';

import * as S from './styles';

export const Header: React.FC = () => (
  <S.Container>
    <Logo isLink />
    <div>
      <Search />
      <Cart />
    </div>
  </S.Container>
);
