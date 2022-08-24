import { useState } from 'react';

import OrderProductsBy from "../OrderProductsBy";
import Product from "../Product";

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
        <ul className="list-products">
          {
            products.map(({ id, ...props }) => <Product key={id} {...props} />)
          }
        </ul>
      </div>
    </>
  )
}

export default SectionProducts;