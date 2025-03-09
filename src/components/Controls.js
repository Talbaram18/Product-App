import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Controls = () => {
  const { handleAddProduct, searchTerm, setSearchTerm, sortBy, setSortBy } =
    useContext(ProductContext);

  return (
    <div className="controls">
      <button className="add-button" onClick={handleAddProduct}>
        + Add
      </button>
      <input
        type="text"
        className="search-box"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="sort-dropdown"
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
      >
        <option value="name">Sort by Name</option>
        <option value="creationDate">Sort by Date</option>
      </select>
    </div>
  );
};

export default Controls;
