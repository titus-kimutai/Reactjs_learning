/* eslint-disable react/prop-types */
const FilterComponent = ({selectedCategories, onCategoryChange}) => {
    const categories = ['Electronics', 'Clothing', 'Books'];

    const handleCheckboxChange = (event) => {
      onCategoryChange(event.target.name);
    };
  return (
    <div className="filter">
    <div className="categories">
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            name={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCheckboxChange}
          />
          {category}
        </label>
      ))}
    </div>
  </div>
  )
}

export default FilterComponent