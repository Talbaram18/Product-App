import React from 'react';
import './App.css';
import { ProductProvider } from './context/ProductContext';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <ProductProvider>
      <div className="app-container">
        <ProductPage />
      </div>
    </ProductProvider>
  );
};

export default App;
