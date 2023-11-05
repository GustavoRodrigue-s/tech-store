import { useCartContext } from '../../../../../../commons/contexts/CartContext';
import { IProduct } from '../../../../../../commons/types';
import { toast } from '../../../../../../commons/utils/helpers';

import * as S from './styles';

interface AddProductButtonProps {
  productId: IProduct['id'];
}

export const AddProductButton: React.FC<AddProductButtonProps> = ({
  productId,
}) => {
  const { handleAdd, findProduct } = useCartContext();

  const product = findProduct(productId);

  const isAlreadyAdded = !!product;

  const handleClick = () => {
    if (isAlreadyAdded) {
      return toast({
        type: 'warning',
        message: 'Esse produto já foi adicionado no carrinho.',
      });
    }

    handleAdd(productId);
  };

  return (
    <S.Container
      onClick={handleClick}
      style={{ height: '40px' }}
      isDisabled={isAlreadyAdded}
      isFullWidth
    >
      {isAlreadyAdded ? 'Produto já adicionado' : 'Adicionar Produto'}
    </S.Container>
  );
};
