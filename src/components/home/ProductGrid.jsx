import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductGrid = ({ 
  products, 
  onAddToCart,
  className = '' 
}) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/details/${product.id}`);
  };

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleProductClick(product)}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;