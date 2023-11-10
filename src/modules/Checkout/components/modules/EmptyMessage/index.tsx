import { Link } from 'react-router-dom';

import * as S from './styles';

export const EmptyMessage: React.FC = () => (
  <S.Container>
    <h1>Sacola Vazia!</h1>
    <p>
      Você ainda não possuí itens adicionados a sua sacola, acesse a página de{' '}
      <Link to="/">produtos</Link> para prosseguir com as suas compras.
    </p>
  </S.Container>
);
