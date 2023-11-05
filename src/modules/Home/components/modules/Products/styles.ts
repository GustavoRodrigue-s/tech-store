import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1;
`;

export const Header = styled.header`
  justify-content: space-between;

  gap: 32px;

  &,
  > div {
    display: flex;
    align-items: center;
  }

  > div {
    gap: 16px;
    flex: 0 0 250px;
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 56px;
  width: 100%;

  .presence {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`;
