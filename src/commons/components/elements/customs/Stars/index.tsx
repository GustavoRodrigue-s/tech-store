import { HiStar } from 'react-icons/hi';

import * as S from './styles';

interface StarsProps {
  filledStars: number;
}

export const Stars: React.FC<StarsProps> = ({ filledStars }) => (
  <S.Container>
    {[1, 2, 3, 4, 5].map(star => (
      <S.StarWrapper key={star} isFilled={filledStars >= star}>
        <HiStar size={20} />
      </S.StarWrapper>
    ))}
  </S.Container>
);
