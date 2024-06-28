/* eslint-disable react/prop-types */
const SearchComponent = ({searchTerm, onSearchTermChange}) => {
    const handleInputChange = (event) => {
        onSearchTermChange(event.target.value);
      };
    
    
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchComponent