import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../common/Card';
import PriceTag from '../common/PriceTag';

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onClick,
  className = '' 
}) => {
  const getProductImage = (type) => {
    const colors = {
      shirt1: 'from-orange-200 to-orange-300',
      court: 'from-red-200 to-red-300',
      shirt2: 'from-orange-200 to-orange-300',
      court2: 'from-yellow-200 to-yellow-300',
      coat: 'from-yellow-200 to-yellow-300'
    };
    return colors[type] || 'from-gray-200 to-gray-300';
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
    <Card 
      hover 
      onClick={handleCardClick}
      className={`p-4 cursor-pointer ${className}`}
    >
      {/* Product Image */}
      <div className={`w-full h-32 bg-gradient-to-br ${getProductImage(product.image)} rounded-xl mb-3 relative`}>
        {/* Mock product visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-20 bg-white bg-opacity-30 rounded-lg"></div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-btn absolute bottom-2 right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
          title="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1" title={product.name}>
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <PriceTag price={formatPrice(product.price)} size="sm" />
          
          {/* Category badge */}
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        {/* Rating (if available) */}
        {product.rating && (
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.rating})</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;