import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1;
`;

export const Header = styled.header`
  justify-content: space-between;
  flex-direction: column;
  gap: 32px;

  &,
  > div {
    display: flex;
  }

  > div {
    gap: 8px;
    width: 100%;
    max-width: 216px;
    align-items: center;
    margin-left: auto;

    @media screen and (min-width: 1280px) {
      margin-left: initial;
      max-width: 250px;
      gap: 16px;
    }
  }

  @media screen and (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 8px;
  width: 100%;

  .presence {
    display: grid;
    gap: 16px;

    grid-template-columns: repeat(1, 1fr);

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 640px) {
    margin-top: 56px;
  }
`;
