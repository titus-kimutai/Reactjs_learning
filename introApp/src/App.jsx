import { useState } from 'react';
import './App.css';

import CardsComponent from './components/Cards/CardsComponent';
import { initialProducts } from './utils/ProductList';

function App() {
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='nav'>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <CardsComponent list={filteredProducts} />
    </div>
  );
}

export default App;
