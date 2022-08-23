import { useState, useContext } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'

import CatalogContext from '../../store';

export default function FormSearchBar() {
  const catalog = useContext(CatalogContext);
  const [inputValue, setInputValue] = useState('');

  console.log(catalog);

  // fazer o filtro de pesquisa

  return (
    <form>
      <div className="container-search-bar">
        <input
          type="text"
          placeholder="Buscar produto..."
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button>
          <HiOutlineSearch size={30} />
        </button>
      </div>
    </form>
  )
}