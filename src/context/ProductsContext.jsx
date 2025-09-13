// src/context/ProductsContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { products, categories, getProductById, getProductsByCategory, searchProducts } from '../data/products';

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [allProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter products when category or search query changes
  useEffect(() => {
    setIsLoading(true);
    
    let result = allProducts;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = getProductsByCategory(selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      result = searchProducts(searchQuery);
    }
    
    // Simulate loading delay
    setTimeout(() => {
      setFilteredProducts(result);
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, searchQuery, allProducts]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when changing category
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('All'); // Reset category when searching
  };

  const getProduct = (id) => {
    return getProductById(id);
  };

  const value = {
    // Data
    allProducts,
    filteredProducts,
    categories,
    
    // State
    selectedCategory,
    searchQuery,
    isLoading,
    
    // Actions
    handleCategoryChange,
    handleSearch,
    getProduct
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};