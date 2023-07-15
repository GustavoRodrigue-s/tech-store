import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1 1;
`;

export const Header = styled.header`
  justify-content: space-between;

  &,
  > div {
    display: flex;
    align-items: center;
  }

  > div {
    gap: 16px;
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 56px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
