import { useState } from 'react';

import FilterBar from '../../components/FilterBar';
import SectionProducts from './SectionProducts';

import { FilterProvider } from '../../store/FilterContext';

function Main({ products, filteredProducts }) {
  const [filters, setFilters] = useState(() => ({
    departments: [],
    price: [],
    discount: [],
    rating: []
  }));

  const handleFilterChange = (isChecked, label, products, filter) => {
    isChecked
    ? setFilters({ ...filters, [filter]: [...filters[filter], { label, products }] })
    : setFilters(() => {
      const newFilter = filters[filter].filter(filter => filter.label !== label);
      
      return { ...filters, [filter]: newFilter };
    });
  }

  const getProductsWithId = productIds => {
    return productIds.map(productId => products.find(({ id }) => id === productId));
  }
  
  const getProductsToDisplay = () => {
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
      return getProductsWithId(currentProducts);
    }

    const filteredProducts = currentProducts.filter(id => 
      commonProducts.every(products => products.length 
        ? products.find(productId => productId === id) 
        : true
      )
    );

    return getProductsWithId(filteredProducts)
  }

  const productsToDisplay = getProductsToDisplay();

  return (
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
  )
}

export default Main