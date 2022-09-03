import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'

import Popup from '../Popup';

export default function FormSearchBar() {
  const [inputValue, setInputValue] = useState('');

  return (
    <form>
      <div className="container-search-bar">
        <input
          type="text"
          placeholder="Buscar produto..."
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />

        <Popup className="popup-suggestions">
          Sem sugestões
        </Popup>

        <button>
          <HiOutlineSearch size={30} />
        </button>
      </div>
    </form>
  )
}