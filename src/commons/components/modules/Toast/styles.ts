import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;

  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  z-index: ${({ theme }) => theme.layers.full};

  > .presence {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    > .presence-child {
      width: fit-content;
    }
  }
`;
