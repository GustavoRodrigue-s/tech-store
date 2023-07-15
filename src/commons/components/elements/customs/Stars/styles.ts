import styled from 'styled-components';

interface StarWrapperProps {
  isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StarWrapper = styled.span<StarWrapperProps>`
  display: flex;

  > svg {
    color: ${({ theme, isFilled }) =>
      isFilled ? theme.colors.orange : theme.colors.gray200};
  }
`;
