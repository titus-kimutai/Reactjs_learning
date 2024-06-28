
import './App.css'
import { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import FilterComponent from './components/FilterComponent';
import ProductListComponent from './components/ProductListComponent';
import { productsData } from './utils/productsData';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
    );
  });

  return (
    <div className="App">
      <h1>Product List</h1>
      <SearchComponent
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <FilterComponent
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
    </div>
  )
}

export default App
