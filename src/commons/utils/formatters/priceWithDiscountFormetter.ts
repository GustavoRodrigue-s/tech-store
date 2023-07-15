export const priceWithDiscountFormatter = (price: number, discount: number) => {
  return price - price * (discount / 100);
};
