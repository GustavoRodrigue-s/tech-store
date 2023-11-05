/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, createContext, useCallback, ReactNode } from 'react';

import { useCatalog, useLocalStorage } from '../hooks';
import { ICart, ICartProduct, IProduct } from '../types';
import { priceWithDiscountFormatter } from '../utils/formatters';
import { toast } from '../utils/helpers';

type ProductId = IProduct['id'];
type CartProduct = IProduct & ICart;

interface CartContextProps {
  cart: ICart[];
  cartProducts: ICartProduct[];
  totalPrice: number;
  findProduct: (id: ProductId) => CartProduct | undefined;
  handleAdd: (id: ProductId) => void;
  handleRemove: (id: ProductId) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

const CART_KEY = 'cart';

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useLocalStorage<ICart[]>(CART_KEY, []);

  const products = useCatalog();

  const cartProducts = cart.map(({ id, amount }) => ({
    ...products.find(product => product.id === id)!,
    amount,
  }));

  const findProduct = (id: ProductId): CartProduct | undefined => {
    return cartProducts.find(product => product.id === id);
  };

  const create = useCallback(
    (id: ProductId) => {
      toast({
        type: 'success',
        message: 'Produto adicionado!',
      });

      setCart(prevCart => [...prevCart, { id, amount: 1 }]);
    },
    [setCart]
  );

  const remove = useCallback(
    (id: ProductId) => {
      toast({
        type: 'success',
        message: 'Produto removido!',
      });

      setCart(prevCart => prevCart.filter(product => product.id !== id));
    },
    [setCart]
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

      setCart(prevCart =>
        prevCart.map(product =>
          product.id === id ? { ...product, amount: currentAmount } : product
        )
      );
    },
    [setCart]
  );

  const decrement = useCallback(
    ({ id, amount }: CartProduct) => {
      const currentAmount = amount - 1;

      setCart(prevCart =>
        prevCart.map(product =>
          product.id === id ? { ...product, amount: currentAmount } : product
        )
      );
    },
    [setCart]
  );

  const handleAdd = (id: ProductId) => {
    const product = findProduct(id);

    if (product) {
      return increment(product);
    }

    create(id);
  };

  const handleRemove = (id: ProductId) => {
    const product = findProduct(id);

    if (!product) {
      return toast({
        type: 'error',
        message: 'Esse produto não existe no carrinho!',
      });
    }

    if (product.amount > 1) {
      return decrement(product);
    }

    remove(id);
  };

  const totalPrice = cart.reduce((acc, { id, amount }) => {
    const { price, discount } = products.find(product => product.id === id)!;

    const currentPrice = discount
      ? priceWithDiscountFormatter(price, discount)
      : price ?? 0;

    return (acc += currentPrice * amount);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartProducts,
        totalPrice,
        handleAdd,
        handleRemove,
        findProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
