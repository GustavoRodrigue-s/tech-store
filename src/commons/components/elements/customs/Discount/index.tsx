import styled, { css } from 'styled-components';

interface DiscountProps {
  discount: number;
}

const Container = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: ${theme.sizes.semiSmaller};
    font-weight: ${theme.weights.semiBold};
  `}
`;

export const Discount: React.FC<DiscountProps> = ({ discount }) => (
  <Container>(↓{discount}%)</Container>
);
