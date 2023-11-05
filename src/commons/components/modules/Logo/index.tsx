import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface LogoProps {
  isLink?: boolean;
}

const Container = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.sizes.headlingSeven};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.black100};

    span {
      color: ${theme.colors.primary};
    }
  `}
`;

const Template: React.FC = () => (
  <Container>
    Tech Store<span>.</span>
  </Container>
);

export const Logo: React.FC<LogoProps> = ({ isLink }) =>
  isLink ? (
    <Link to="/" reloadDocument>
      <Template />
    </Link>
  ) : (
    <Template />
  );
