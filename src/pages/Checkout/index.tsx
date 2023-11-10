import { LayoutWithHeader } from '../../commons/components/layouts';
import { useBagContext } from '../../commons/contexts/BagContext';
import * as M from '../../modules/Checkout/components/modules';
import { EmptyMessage } from '../../modules/Checkout/components/modules/EmptyMessage';
import * as S from '../../modules/Checkout/styles';

export const CheckoutPage: React.FC = () => {
  const { bag } = useBagContext();

  const isEmptyBag = bag.length === 0;

  return (
    <LayoutWithHeader>
      <S.Container>
        <S.Content>
          {isEmptyBag ? (
            <EmptyMessage />
          ) : (
            <>
              <M.OrderProducts />
              <M.OrderSummary />
            </>
          )}
        </S.Content>
      </S.Container>
    </LayoutWithHeader>
  );
};
