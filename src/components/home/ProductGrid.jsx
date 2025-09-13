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
    console.log('Navigating to product:', product.id);
    navigate(`/details/${product.id}`);
  };

  if (!products || products.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
        <div className="text-gray-400 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">📦</span>
          </div>
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm">Try selecting a different category</p>
        </div>
      </div>
    );
  }

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