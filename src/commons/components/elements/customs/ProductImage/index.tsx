import { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

interface ProductImageProps extends HTMLAttributes<HTMLImageElement> {
  size: number;
  src: string;
}

interface ContainerProps {
  size: number;
}

const modifiers = {
  size: (size: number) => css`
    width: 100%;
    max-width: ${size}px;
  `,
};

const Container = styled.img<ContainerProps>`
  ${({ size }) => css`
    ${size && modifiers.size(size)};
  `}
`;

export const ProductImage: React.FC<ProductImageProps> = props => (
  <Container {...props} alt="Imagem do Produto" />
);
