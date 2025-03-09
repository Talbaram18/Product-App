import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductForm = () => {
  const { selectedProduct, setSelectedProduct, handleSaveProduct } =
    useContext(ProductContext);

  if (!selectedProduct) return null;

  return (
    <div className="details-panel">
      {selectedProduct.image ? (
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name || 'Product'}
          className="product-image"
        />
      ) : (
        <p className="placeholder-text">No image available</p>
      )}

      <input
        type="text"
        className="input-field"
        placeholder="Product Name (max 30 chars)"
        value={selectedProduct?.name || ''}
        onChange={(e) =>
          setSelectedProduct({ ...selectedProduct, name: e.target.value })
        }
        maxLength={30}
      />

      <textarea
        className="input-field"
        placeholder="Product Description (max 200 chars)"
        value={selectedProduct?.description || ''}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            description: e.target.value,
          })
        }
        maxLength={200}
      ></textarea>

      <input
        type="number"
        className="input-field"
        placeholder="Price"
        value={selectedProduct?.price || ''}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            price: parseFloat(e.target.value) || 0,
          })
        }
      />

      <input
        type="text"
        className="input-field"
        placeholder="Image URL"
        value={selectedProduct?.image || ''}
        onChange={(e) =>
          setSelectedProduct({ ...selectedProduct, image: e.target.value })
        }
      />

      <button
        className="save-button"
        onClick={handleSaveProduct}
        disabled={!selectedProduct?.name || selectedProduct?.price <= 0}
      >
        Save
      </button>
    </div>
  );
};

export default ProductForm;
