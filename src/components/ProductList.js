import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList = () => {
  const { currentProducts, currentPage, setCurrentPage, totalPages } =
    useContext(ProductContext);

  return (
    <div className="product-list">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ProductList;
