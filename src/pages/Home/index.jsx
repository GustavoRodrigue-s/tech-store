import useCatalog from '../../hooks/useCatalog';
import useFilter from '../../hooks/useFilter';

import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import SectionProducts from '../../components/SectionProducts';

import { FilterProvider } from '../../store/FilterContext';

import "./style.css";

export default function Home() {
  // const [filterOptions, setFilterOptions] = useState([]);

  // passar o produto pesquisado para este hook
  const products = useCatalog();
  const filteredProducts = useFilter(products);

  return (
    <>
      <Header />
      <main>
        <FilterProvider value={filteredProducts}>
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