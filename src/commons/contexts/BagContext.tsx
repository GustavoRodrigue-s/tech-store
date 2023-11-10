/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, createContext, useCallback, ReactNode } from 'react';

import { useCatalog, useLocalStorage } from '../hooks';
import { IBag, IBagProduct, IProduct } from '../types';
import { priceWithDiscountFormatter } from '../utils/formatters';
import { toast } from '../utils/helpers';

type ProductId = IProduct['id'];
type CartProduct = IProduct & IBag;

interface BagContextProps {
  bag: IBag[];
  bagProducts: IBagProduct[];
  totalPrice: number;
  reset: () => void;
  findProduct: (id: ProductId) => CartProduct | undefined;
  handleAdd: (id: ProductId) => void;
  handleRemove: (id: ProductId, isReomve?: boolean) => void;
}

interface BagContextProviderProps {
  children: ReactNode;
}

const BagContext = createContext({} as BagContextProps);

const BAG_KEY = 'bag';

export const BagContextProvider: React.FC<BagContextProviderProps> = ({
  children,
}) => {
  const [bag, setBag] = useLocalStorage<IBag[]>(BAG_KEY, []);

  const products = useCatalog();

  const bagProducts = bag.map(({ id, amount }) => ({
    ...products.find(product => product.id === id)!,
    amount,
  }));

  const findProduct = (id: ProductId): CartProduct | undefined => {
    return bagProducts.find(product => product.id === id);
  };

  const reset = useCallback(() => {
    setBag([]);
  }, [setBag]);

  const create = useCallback(
    (id: ProductId) => {
      toast({
        type: 'success',
        message: 'Produto adicionado!',
      });

      setBag(prevCart => [...prevCart, { id, amount: 1 }]);
    },
    [setBag]
  );

  const remove = useCallback(
    (id: ProductId) => {
      toast({
        type: 'success',
        message: 'Produto removido!',
      });

      setBag(prevCart => prevCart.filter(product => product.id !== id));
    },
    [setBag]
  );

  const increment = useCallback(
    ({ id, amount, units }: CartProduct) => {
      const currentAmount = amount + 1;

      if (currentAmount > units) {
        return toast({
          type: 'error',
          message: `A quantidade máxima desse produto é de ${units} unidades!`,
        });
      }

      setBag(prevCart =>
        prevCart.map(product =>
          product.id === id ? { ...product, amount: currentAmount } : product
        )
      );
    },
    [setBag]
  );

  const decrement = useCallback(
    ({ id, amount }: CartProduct) => {
      const currentAmount = amount - 1;

      setBag(prevCart =>
        prevCart.map(product =>
          product.id === id ? { ...product, amount: currentAmount } : product
        )
      );
    },
    [setBag]
  );

  const handleAdd = (id: ProductId) => {
    const product = findProduct(id);

    if (product) {
      return increment(product);
    }

    create(id);
  };

  const handleRemove = (id: ProductId, isRemove?: boolean) => {
    const product = findProduct(id);

    if (!product) {
      return toast({
        type: 'error',
        message: 'Esse produto não existe na sacola!',
      });
    }

    if (product.amount > 1 && !isRemove) {
      return decrement(product);
    }

    remove(id);
  };

  const totalPrice = bag.reduce((acc, { id, amount }) => {
    const { price, discount } = products.find(product => product.id === id)!;

    const currentPrice = discount
      ? priceWithDiscountFormatter(price, discount)
      : price ?? 0;

    return (acc += currentPrice * amount);
  }, 0);

  return (
    <BagContext.Provider
      value={{
        bag,
        bagProducts,
        totalPrice,
        reset,
        handleAdd,
        handleRemove,
        findProduct,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => useContext(BagContext);
