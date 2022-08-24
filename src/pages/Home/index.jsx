import useCatalog from '../../store/hooks/useCatalog';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import SectionProducts from '../../components/SectionProducts';

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
          <SectionProducts products={productsToDisplay} />
        </section>
      </main>
    </>
  )
}