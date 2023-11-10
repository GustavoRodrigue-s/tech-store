import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  flex: 1 1;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  flex: 1 1;

  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 1060px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1400px) {
    gap: 48px;
  }
`;
