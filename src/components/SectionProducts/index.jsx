import { useState } from 'react';

import OrderProductsBy from "../OrderProductsBy";
import ListProducts from "../ListProducts";

function SectionProducts({ products }) {
  const [listOrder, setListOrder] = useState('Nome A-Z');

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Buscar por: "Todos os produtos"</h1>
          </div>
          <div>
            <OrderProductsBy listOrder={listOrder} setListOrder={setListOrder} />
          </div>
        </div>
      </div>
      <div>
        <ListProducts products={products} />
      </div>
    </>
  )
}

export default SectionProducts;