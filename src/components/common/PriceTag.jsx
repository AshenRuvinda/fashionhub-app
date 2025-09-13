import React from 'react';

const PriceTag = ({ 
  price, 
  originalPrice = null, 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`font-bold text-gray-900 ${sizes[size]}`}>
        {price}
      </span>
      {originalPrice && (
        <span className={`text-gray-500 line-through ${sizes.sm}`}>
          {originalPrice}
        </span>
      )}
    </div>
  );
};

export default PriceTag;