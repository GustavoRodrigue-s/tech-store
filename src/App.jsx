// import { useState } from 'react';

import catalog from './components/assets/Catalog/catalog.json';

function App() {
  // const [products, setProducts] = useState(catalog);

  return (
    <div className="App">
      { 
        catalog.map(({ name, image, id }) => (
          <li key={id}>
            {name}
            <img src={image} alt="Product" />
          </li>
        )) 
      }
    </div>
  );
}

export default App;