import { useState } from 'react';

import useCatalog from '../../hooks/useCatalog';
import useFilter from '../../hooks/useFilter';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import SectionProducts from '../../components/SectionProducts';

import { FilterProvider } from '../../store/FilterContext';

import "./style.css";

export default function Home() {
  // const [products, setProducts] = useState(useCatalog());
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

    const currentFilter = (
      (departments.length ? departments : null) || 
      (rating.length ? rating : null) || 
      (discount.length ? discount : null) ||
      (price.length ? price : null)
    );
    
    if (!currentFilter) {
      return products
    }

    const currentProducts = currentFilter.reduce((acc, { products }) => acc = [...acc, ...products], []);

    const othersProducts = [...rating, ...discount, ...price].reduce((acc, filter) =>
      acc = [...acc, ...filter.products], []);

    console.log(othersProducts);

    if (!othersProducts.length) {
      return currentProducts;
    }

    const commonProducts = currentProducts.filter(({ id }) => {
      const isCommonProduct = othersProducts.filter(product => product.id === id);

      if (rating.length && discount.length && price.length) {
        return isCommonProduct.length === 3;
      }

      if ((discount.length && rating.length) || (price.length && discount.length) || (rating.length && price.length)) {
        return isCommonProduct.length === 2;
      }

      if (discount.length || rating.length || price.length) {
        return isCommonProduct.length === 1;
      }

      return isCommonProduct
    });

    return commonProducts
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