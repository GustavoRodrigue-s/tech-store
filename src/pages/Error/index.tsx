import { useNavigate } from 'react-router';

import { PrimaryButton } from '../../commons/components/elements/buttons';
import { LayoutWithHeader } from '../../commons/components/layouts';
import { Logo } from '../../commons/components/modules';
import * as S from '../../modules/Error/styles';

export const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <LayoutWithHeader>
      <S.Container>
        <S.Content>
          <Logo />
          <S.Strong>404</S.Strong>
          <p>Esta página não foi encontrada ou não está disponível</p>
          <PrimaryButton onClick={() => navigate(-1)} size="md">
            Voltar para a página anterior
          </PrimaryButton>
        </S.Content>
      </S.Container>
    </LayoutWithHeader>
  );
};
