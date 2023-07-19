/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  useState,
  useContext,
  useCallback,
  createContext,
  ReactNode,
} from 'react';

import { useCatalog } from '../hooks';
import { ICart, IProduct } from '../types';
import { priceWithDiscountFormatter } from '../utils/formatters';

type ProductId = IProduct['id'];

interface CartContextProps {
  cart: ICart[];
  totalPrice: number;
  handleAdd: (id: ProductId) => void;
  handleRemove: (id: ProductId) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<ICart[]>([]);

  const products = useCatalog();

  const findOne = useCallback(
    (id: ProductId): ICart => {
      return cart.find(product => product.id === id)!;
    },
    [cart]
  );

  const update = useCallback((id: ProductId, amount: number) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === id ? { ...product, amount } : product
      )
    );
  }, []);

  const handleAdd = useCallback(
    (id: ProductId) => {
      const product = findOne(id);

      if (product) {
        return update(id, product?.amount + 1);
      }

      setCart(prevCart => [...prevCart, { id, amount: 1 }]);
    },
    [update, findOne]
  );

  const handleRemove = useCallback(
    (id: ProductId) => {
      const product = findOne(id);

      if (product?.amount > 1) {
        return update(id, product?.amount - 1);
      }

      setCart(prevCart => prevCart.filter(product => product.id === id));
    },
    [update, findOne]
  );

  const totalPrice = cart.reduce((acc, { id, amount }) => {
    const { price, discount } = products.find(product => product.id === id)!;

    const currentPrice = discount
      ? priceWithDiscountFormatter(price, discount)
      : price ?? 0;

    return (acc += currentPrice * amount);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, totalPrice, handleAdd, handleRemove }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
