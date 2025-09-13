import React from 'react';
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
      shirt1: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=600&fit=crop&crop=center&q=80',
      court: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop&crop=center&q=80',
      shirt2: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop&crop=center&q=80',
      court2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center&q=80',
      coat: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop&crop=center&q=80',
      blazer1: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop&crop=center&q=80',
      casual1: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop&crop=center&q=80',
      coat2: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center&q=80'
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
    
    console.log('Product card clicked:', product.name, 'ID:', product.id);
    if (onClick) {
      onClick();
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click
    console.log('Add to cart clicked:', product.name);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`bg-white cursor-pointer transition-all duration-300 hover:shadow-lg ${className} relative`}
      style={{
        borderRadius: '50px', // 50px border radius as requested
        overflow: 'hidden'
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

export default ProductCard;