import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Header from '../components/Header';
import Controls from '../components/Controls';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  const { products, selectedProduct } = useContext(ProductContext);

  return (
    <div className="product-page">
      <Header productCount={products.length} />
      <Controls />
      <div className="main-layout">
        <ProductList />
        {selectedProduct && <ProductForm />}
      </div>
    </div>
  );
};

export default ProductPage;
