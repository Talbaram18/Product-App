import { useState, useEffect } from 'react';

const useProducts = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High performance laptop',
      price: 1200,
      creationDate: new Date().toISOString(),
      image: '/images/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model smartphone',
      price: 800,
      creationDate: new Date().toISOString(),
      image: '/images/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-canceling headphones',
      price: 200,
      creationDate: new Date().toISOString(),
      image: '/images/headphones.jpg',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Feature-rich smartwatch',
      price: 300,
      creationDate: new Date().toISOString(),
      image: '/images/smartwatch.jpg',
    },
  ];

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Load products from localStorage (or use initial data)
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      setProducts(initialProducts);
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }
  }, []);

  // Save products to localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    setSelectedProduct({
      id: Date.now(),
      name: '',
      description: '',
      price: 0,
      creationDate: new Date().toISOString(),
      image: '', // User can input an image URL manually
    });
  };

  const handleSaveProduct = () => {
    if (!selectedProduct?.name || selectedProduct.price <= 0) return;

    const updatedProducts = products.some((p) => p.id === selectedProduct.id)
      ? products.map((p) => (p.id === selectedProduct.id ? selectedProduct : p))
      : [...products, selectedProduct];

    setProducts(updatedProducts);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortBy === 'name'
        ? a.name.localeCompare(b.name)
        : new Date(a.creationDate) - new Date(b.creationDate)
    );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return {
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    handleAddProduct,
    handleSaveProduct,
    handleDeleteProduct,
    filteredProducts,
    totalPages,
    currentProducts,
  };
};

export default useProducts;
