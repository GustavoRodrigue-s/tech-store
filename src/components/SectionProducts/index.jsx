import OrderProductsBy from "../OrderProductsBy";
import Product from "../Product";

function SectionProducts({ products }) {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Buscar por: "Todos os produtos"</h1>
          </div>
          <div>
            <OrderProductsBy />
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