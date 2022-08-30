import { useState } from 'react';

import OrderProductsBy from "../../components/OrderProductsBy";
import ListProducts from "../../components/ListProducts";

function SectionProducts({ products }) {
  const [listOrder, setListOrder] = useState('Nome A-Z');
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const handleFavorite = productId => {
    const shouldAddOrRemoveId = favoriteProducts.find(id => id === productId);

    shouldAddOrRemoveId
      ? setFavoriteProducts(prevProducts => prevProducts.filter(id => id !== productId))
      : setFavoriteProducts(prevProducts => [...prevProducts, productId]);
  }

  const acceptedOrders = {
    "Nome A-Z"() {
      products.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        return (aName > bName) ? 1 : ((bName > aName) ? -1 : 0);
      });
    },
    "Nome Z-A"() {
      products.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        return (aName > bName) ? 1 : ((bName > aName) ? -1 : 0)
      }).reverse();
    },
    "Favoritos"() {
      products.sort((a, b) => {
        const aIsFavorite = favoriteProducts.find(id => id === a.id);
        const bIsFavorite = favoriteProducts.find(id => id === b.id);

        return aIsFavorite ? -1 : (bIsFavorite ? 1 : 0);
      });
    },
    "Menor Preço"() {
      products.sort((a, b) => a.price - b.price);
    },
    "Maior Preço"() {
      products.sort((a, b) => a.price - b.price).reverse();
    }
  }
  
  if (acceptedOrders[listOrder]) {
    acceptedOrders[listOrder]();
  }

  return (
    <>
      <header>
        <div>
          <h1>Buscar por: "Todos os produtos"</h1>
        </div>
        <div>
          <OrderProductsBy listOrder={listOrder} setListOrder={setListOrder} />
        </div>
      </header>
      <div>
        <ListProducts products={products} handleFavorite={handleFavorite} />
      </div>
    </>
  )
}

export default SectionProducts;