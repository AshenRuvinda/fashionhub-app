import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onClick,
  className = ''
}) => {
  // Real fashion images from the internet - curated for better quality
  const getProductImage = (type) => {
    const images = {
        shirt1: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        court: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        shirt2: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        court2: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        coat: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        blazer1: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        casual1: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        coat2: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg'
    };
    return images[type] || 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=600&fit=crop&crop=center&q=80';
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `$${price.toFixed(2)}`;
    }
    return price;
  };

  const handleCardClick = (e) => {
    // Prevent navigation when clicking the add to cart button
    if (e.target.closest('.add-to-cart-btn')) {
      return;
    }
    
    if (onClick) {
      onClick();
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`bg-white cursor-pointer transition-all duration-300 hover:shadow-lg ${className} relative`}
      style={{
        borderRadius: '50px',
        overflow: 'hidden',
        breakInside: 'avoid'
      }}
    >
      {/* Product Image Container - 4/6 (66.67%) of the card */}
      <div className="relative w-full" style={{ height: '66.67%' }}>
        <img 
          src={getProductImage(product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          style={{
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px'
          }}
          onError={(e) => {
            // Fallback gradient if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        
        {/* Fallback gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 hidden items-center justify-center"
          style={{ 
            display: 'none',
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px'
          }}
        >
          <div className="w-20 h-24 bg-white bg-opacity-40 rounded-2xl"></div>
        </div>
      </div>
      
      {/* Product Info Container - 2/6 (33.33%) of the card */}
      <div className="h-1/3 px-6 py-4 flex flex-col justify-center">
        {/* Price - Large, bold text */}
        <div className="mb-2">
          <span 
            className="font-bold text-black"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.1',
              fontWeight: '700'
            }}
          >
            {formatPrice(product.price)}
          </span>
        </div>
        
        {/* Product Name - Gray text below price */}
        <h3 
          className="text-gray-600 font-normal"
          style={{
            fontSize: '16px',
            lineHeight: '1.2',
            fontWeight: '400'
          }}
          title={product.name}
        >
          {product.name}
        </h3>
      </div>

      {/* Add to Cart Button - Small shopping bag icon at the border */}
      <button 
        onClick={handleAddToCart}
        className="add-to-cart-btn absolute w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all duration-200"
        style={{
          borderRadius: '50%',
          top: '66.67%', // Positioned at the 4/6 mark (border between sections)
          right: '20px',
          transform: 'translateY(-50%)', // Center the button on the border
          zIndex: 10
        }}
        title="Add to cart"
      >
        <ShoppingBag className="w-4 h-4 stroke-2" />
      </button>
    </div>
  );
};

const ProductGrid = ({ 
  products, 
  onAddToCart,
  className = '' 
}) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
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
      {/* CSS Columns masonry layout matching the reference image */}
      <div className="columns-2 gap-3 space-y-3">
        {products.map((product, index) => {
          // Determine card height based on position to create staggered effect like in reference
          const heightVariants = ['h-72', 'h-80', 'h-64', 'h-76', 'h-84', 'h-68'];
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