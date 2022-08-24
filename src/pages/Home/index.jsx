import useCatalog from '../../store/hooks/useCatalog';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import Product from '../../components/Product';

import "./style.css";

export default function Home() {
  const products = useCatalog();

  const returnFilteredProducts = () => {
    // todos os filtros do filter bar
    return products
  } 

  const productsToDisplay = returnFilteredProducts();

  return (
    <>
      <Header />
      <main>
        <aside>
          <FilterBar />
        </aside>
        <section>
          <div>
            <div>
              <div>
                <h1>Buscar por: "Todos os produtos"</h1>
              </div>
              <div>
                {/* <FormOrderBy /> */}
              </div>
            </div>
          </div>
          <div>
            <ul className="list-products">
              {
                productsToDisplay.map(({ id, ...props }) => <Product key={id} {...props} />)
              }
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}