import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Header = () => {
  const { products } = useContext(ProductContext);

  return (
    <header className="header">
      <h1 className="store-title">Tal's Store</h1>
      <span className="product-count">Products: {products.length}</span>
    </header>
  );
};

export default Header;
