import { Logo } from '../Logo';
import { Bag, Search } from './components/modules';

import * as S from './styles';

export const Header: React.FC = () => (
  <S.Container>
    <Logo isLink />
    <div>
      <Search />
      <Bag />
    </div>
  </S.Container>
);
