import { useState } from 'react';
import './App.css';

import CardsComponent from './components/Cards/CardsComponent';
import CartIcon from './components/Cards/CartIcon';
import CartDetails from './components/Cards/CartDetails';
import { initialProducts } from './utils/ProductList';
import { CartProvider } from './components/Cards/cartContext';

function App() {
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartProvider>
      <div className="nav">
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <CartIcon />
      </div>
      <CardsComponent list={filteredProducts} />
      <CartDetails />
    </CartProvider>
  );
}

export default App;
