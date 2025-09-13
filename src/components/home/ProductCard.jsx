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

  return (
    <Card 
      hover 
      onClick={onClick}
      className={`p-4 ${className}`}
    >
      {/* Product Image */}
      <div className={`w-full h-32 bg-gradient-to-br ${getProductImage(product.image)} rounded-xl mb-3 relative`}>
        {/* Mock product visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-20 bg-white bg-opacity-30 rounded-lg"></div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart && onAddToCart(product);
          }}
          className="absolute bottom-2 right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      {/* Product Info */}
      <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
      <PriceTag price={formatPrice(product.price)} size="sm" />
    </Card>
  );
};

export default ProductCard;