import { useState, useEffect } from 'react';

import useCatalog from '../../hooks/useCatalog';
import useFilter from '../../hooks/useFilter';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import SectionProducts from '../../components/SectionProducts';

import { FilterProvider } from '../../store/FilterContext';

import "./style.css";

export default function Home() {
  const [products, setProducts] = useState(useCatalog());
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredProducts = useFilter(products);

  useEffect(() => {
    if (!selectedFilters.length) {
      return
    }

    const allProducts = [
      ...filteredProducts.sortedByDepartments,
      ...filteredProducts.sortedByDiscounts,
      ...filteredProducts.sortedByPrices,
      ...filteredProducts.sortedByStars
    ];

    const newFilteredProducts = selectedFilters.reduce((acc, filter) => {
      const currentProducts = allProducts.find(({ label }) => label === filter)?.products;

      if (currentProducts.length) {
        acc = [...acc, ...currentProducts];
      }

      return acc
    }, []);

    setProducts(newFilteredProducts);
  }, [products, selectedFilters]);

  return (
    <>
      <Header />
      <main>
        <FilterProvider value={{ filteredProducts, setSelectedFilters }}>
          <aside>
            <FilterBar />
          </aside>
          <section>
            <SectionProducts products={products} />
          </section>
        </FilterProvider>
      </main>
    </>
  )
}