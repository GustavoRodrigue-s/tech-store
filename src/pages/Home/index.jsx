import useCatalog from '../../hooks/useCatalog';
import useFilter from '../../hooks/useFilter';

import Header from '../../components/Header';
import Main from './Main';

import "./style.css";

function Home() {
  const products = useCatalog();

  const filteredProducts = useFilter(products);

  return (
    <>
      <Header />
      <Main products={products} filteredProducts={filteredProducts} />
    </>
  )
}

export default Home