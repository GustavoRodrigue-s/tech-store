import { useState } from 'react';

import useCatalog from '../../hooks/useCatalog';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import SectionProducts from '../../components/SectionProducts';

import "./style.css";

export default function Home() {
  const [filterOptions, setFilterOptions] = useState([]);

  const products = useCatalog();

  const returnFilteredProducts = () => {
    // todos os filtros do filter bar

    if (!filterOptions.length) {
      return products
    }

    const newProducts = filterOptions.reduce((acc, option) => {
      const departmentProducts = products.filter(({ department }) => department === option);

      acc = [...acc, ...departmentProducts];

      return acc
    }, []);

    return newProducts
  } 

  const productsToDisplay = returnFilteredProducts();

  return (
    <>
      <Header />
      <main>
        <aside>
          <FilterBar products={products} setFilterOptions={setFilterOptions} />
        </aside>
        <section>
          <SectionProducts products={productsToDisplay} />
        </section>
      </main>
    </>
  )
}