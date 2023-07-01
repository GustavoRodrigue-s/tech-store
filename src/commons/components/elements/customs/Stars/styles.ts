import styled from 'styled-components';

interface StarWrapperProps {
  isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StarWrapper = styled.span<StarWrapperProps>`
  > svg {
    color: ${({ theme, isFilled }) =>
      isFilled ? theme.colors.orange : theme.colors.gray200};
  }
`;
