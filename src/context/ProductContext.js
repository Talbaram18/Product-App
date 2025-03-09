import React, { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productState = useProducts();
  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
};
