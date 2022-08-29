import { useState } from 'react';

import OrderProductsBy from "../../components/OrderProductsBy";
import ListProducts from "../../components/ListProducts";

function SectionProducts({ products }) {
  const [listOrder, setListOrder] = useState('Nome A-Z');

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
        <ListProducts products={products} />
      </div>
    </>
  )
}

export default SectionProducts;