import { HiStar } from 'react-icons/hi';

import { IProduct } from '../../../../types';

import * as S from './styles';

interface StarsProps {
  filledStars: IProduct['filledStars'] | 0;
  size?: keyof typeof sizes;
}

const sizes = {
  sm: 14,
  md: 16,
  lg: 20,
};

export const Stars: React.FC<StarsProps> = ({
  filledStars = 0,
  size = 'lg',
}) => (
  <S.Container>
    {[1, 2, 3, 4, 5].map(star => (
      <S.StarWrapper key={star} isFilled={filledStars >= star}>
        <HiStar size={sizes[size]} />
      </S.StarWrapper>
    ))}
  </S.Container>
);
