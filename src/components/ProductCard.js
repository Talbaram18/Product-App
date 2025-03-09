import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import DeleteButton from './DeleteButton';

const ProductCard = ({ product }) => {
  const { setSelectedProduct, handleDeleteProduct } =
    useContext(ProductContext);

  return (
    <div className="product-card" onClick={() => setSelectedProduct(product)}>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <DeleteButton onDelete={() => handleDeleteProduct(product.id)} />
    </div>
  );
};

export default ProductCard;
