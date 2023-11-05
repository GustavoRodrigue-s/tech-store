import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { Strong } from '../texts';

const Container = styled.div`
  padding: 16px;
  white-space: nowrap;
  text-align: center;
`;

export const Empty: React.FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Strong>{children}</Strong>
  </Container>
);
