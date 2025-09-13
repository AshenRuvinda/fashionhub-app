import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from '../common/Button';

const AddToCartButton = ({ 
  price, 
  onAddToCart, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div>
        <span className="text-3xl font-bold text-gray-900">{price}</span>
      </div>
      <Button onClick={onAddToCart} className="flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;