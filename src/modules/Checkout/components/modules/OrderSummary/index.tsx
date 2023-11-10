import { FormEvent, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { PrimaryButton } from '../../../../../commons/components/elements/buttons';
import { Discount as DiscountLabel } from '../../../../../commons/components/elements/customs';
import { Input } from '../../../../../commons/components/elements/forms';
import { useBagContext } from '../../../../../commons/contexts/BagContext';
import {
  priceFormatter,
  priceWithDiscountFormatter,
} from '../../../../../commons/utils/formatters';
import { toast } from '../../../../../commons/utils/helpers';

import * as S from './styles';

interface CouponFormFields {
  couponInput: HTMLInputElement;
}

interface Coupon {
  name: string;
  discount: number;
}

const freght = 15;

const coupon: Coupon = {
  name: 'perseverança',
  discount: 70,
};

export const OrderSummary: React.FC = () => {
  const [activatedCoupon, setActivatedCoupon] = useState<Coupon>();

  const { totalPrice, bagProducts, reset } = useBagContext();

  const totalPriceFormatted = priceWithDiscountFormatter(
    totalPrice,
    activatedCoupon?.discount ?? 0
  );

  const totalPriceWithFreght =
    priceWithDiscountFormatter(totalPrice, activatedCoupon?.discount ?? 0) +
    freght;

  const initialParcel = bagProducts[0]?.parcels ?? 0;

  const productWithLowerInstallment = bagProducts.reduce(
    (acc, { parcels }) => (parcels < acc ? parcels : acc),
    initialParcel
  );

  const handleCouponAdd = (e: FormEvent) => {
    e.preventDefault();

    const { couponInput } = e.target as unknown as CouponFormFields;

    if (couponInput.value === coupon.name) {
      setActivatedCoupon(coupon);

      toast({
        type: 'success',
        message: `Cupom de ${coupon.discount}% aplicado!`,
      });
    }
  };

  const handlePayment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      type: 'success',
      message: '09/11/23 - Tiago 1:3',
    });
    toast({
      type: 'success',
      message: 'Compra realizada com sucesso!',
    });

    reset();
  };

  return (
    <S.Container>
      <S.Header>
        <Link to="/">
          <BiArrowBack size={16} /> Voltar às compras
        </Link>
      </S.Header>

      <S.CouponWrapper>
        <h3>Cupom de desconto</h3>

        <form onSubmit={handleCouponAdd}>
          <Input name="couponInput" placeholder="Digite seu cupom aqui..." />
          <PrimaryButton>Aplicar</PrimaryButton>
        </form>
      </S.CouponWrapper>

      <S.Form onSubmit={handlePayment}>
        <div>
          <h2>Resumo</h2>

          <div>
            <strong>Subtotal</strong>
            <span>{priceFormatter(totalPriceFormatted)}</span>
          </div>
          <div>
            <strong>Frete</strong>
            <span>{priceFormatter(freght)}</span>
          </div>
          <div className="total">
            <strong>Total</strong>

            {activatedCoupon ? (
              <div className="discount-applied">
                <small>{priceFormatter(totalPrice + freght)}</small>
                <span>
                  {priceFormatter(totalPriceWithFreght)}{' '}
                  <DiscountLabel discount={activatedCoupon.discount} />
                </span>
              </div>
            ) : (
              <span>{priceFormatter(totalPriceWithFreght)}</span>
            )}
          </div>
        </div>

        <p>
          À vista:
          <br />
          <strong>
            {priceFormatter(
              priceWithDiscountFormatter(totalPriceWithFreght, 10)
            )}
          </strong>{' '}
          <S.Discount>(pix com 10% de desconto)</S.Discount> <br />
          ou
          <br />
          {productWithLowerInstallment > 1 && (
            <>
              {priceFormatter(totalPriceWithFreght)} em até{' '}
              {productWithLowerInstallment} x{' '}
            </>
          )}
          <strong>
            {priceFormatter(totalPriceWithFreght / productWithLowerInstallment)}{' '}
            sem juros
          </strong>
        </p>

        <PrimaryButton type="submit" isFullWidth>
          FINALIZAR PAGAMENTO
        </PrimaryButton>
      </S.Form>
    </S.Container>
  );
};
