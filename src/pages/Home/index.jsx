import { useState } from 'react';

import useCatalog from '../../hooks/useCatalog';
import useFilter from '../../hooks/useFilter';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import SectionProducts from '../../components/SectionProducts';

import { FilterProvider } from '../../store/FilterContext';

import "./style.css";

export default function Home() {
  const products = useCatalog();

  const [filters, setFilters] = useState({
    departments: [],
    price: [],
    discount: [],
    rating: []
  });

  const handleFilterChange = (isChecked, { filterCategory, label, products }) => {
    isChecked
      ? setFilters({ ...filters, [filterCategory]: [...filters[filterCategory], { label, products }] })
      : setFilters(() => {
        const newFilter = filters[filterCategory].filter(filter => filter.label !== label);

        return { ...filters, [filterCategory]: newFilter };
      });
  }

  const returnCurrentProductsToDisplay = () => {
    const { departments, rating, discount, price } = filters;

    const allFilters = [departments, rating, discount, price];

    const mainFilter = allFilters.find(filter => filter.length ? filter : null);
    
    if (!mainFilter) {
      return products
    }

    const currentProducts = mainFilter.reduce((acc, { products }) => acc = [...acc, ...products], []);

    const commonProducts = [rating, discount, price].map(filter => 
      filter !== mainFilter 
        ? filter.reduce((acc, { products }) => acc = [...acc, ...products], []) 
        : []
    );

    const hasOthersFilters = commonProducts.find(filter => filter.length);
    
    if (!hasOthersFilters) {
      return currentProducts;
    }

    const filteredProducts = currentProducts.filter(({ id }) => 
      commonProducts.every(products => products.length 
        ? products.find(product => product.id === id) 
        : true
      )
    );

    return filteredProducts
  }

  const productsToDisplay = returnCurrentProductsToDisplay();

  const filteredProducts = useFilter(products);

  return (
    <>
      <Header />
      <main>
        <FilterProvider value={{ filteredProducts, handleFilterChange }}>
          <aside>
            <FilterBar />
          </aside>
          <section>
            <SectionProducts products={productsToDisplay} />
          </section>
        </FilterProvider>
      </main>
    </>
  )
}