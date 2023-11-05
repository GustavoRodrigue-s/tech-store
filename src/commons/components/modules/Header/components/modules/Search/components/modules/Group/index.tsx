import { PropsWithChildren } from 'react';

import { Strong } from '../../../../../elements/texts';

import * as S from './styles';

interface GroupProps extends PropsWithChildren {
  isShow: boolean;
  title: string;
}

export const Group: React.FC<GroupProps> = ({ isShow, title, children }) => {
  if (!isShow) return null;

  return (
    <S.Container className="group">
      <Strong>{title}</Strong>
      {children}
    </S.Container>
  );
};
