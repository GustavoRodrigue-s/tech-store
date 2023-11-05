export const priceFormatter = (price: number) => {
  return price.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });
};
