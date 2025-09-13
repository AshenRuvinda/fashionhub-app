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
      <div className={`flex flex-col items-center justify-center py-16 ${className}`}>
        <div className="text-gray-400 text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl">📦</span>
          </div>
          <p className="text-xl font-medium text-gray-600 mb-2">No products found</p>
          <p className="text-sm text-gray-500">Try selecting a different category</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* Pinterest-style masonry grid matching the reference */}
      <div className="columns-2 gap-3 space-y-3">
        {products.map((product, index) => {
          // Determine card height based on position to create staggered effect
          const heightVariants = ['h-72', 'h-80', 'h-64', 'h-76'];
          const cardHeight = heightVariants[index % heightVariants.length];
          
          return (
            <div
              key={product.id}
              className={`break-inside-avoid mb-3 ${cardHeight}`}
            >
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
                onAddToCart={onAddToCart}
                className="h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;