import React from 'react';

const ProductImage = ({ 
  product, 
  className = '' 
}) => {
  const getImageGradient = (type) => {
    const gradients = {
      shirt1: 'from-orange-200 to-orange-300',
      shirt2: 'from-orange-200 to-orange-300',
      coat: 'from-yellow-200 to-yellow-300'
    };
    return gradients[type] || 'from-orange-200 to-orange-300';
  };

  return (
    <div className={`w-full h-80 bg-gradient-to-br ${getImageGradient(product?.image)} rounded-3xl relative overflow-hidden ${className}`}>
      {/* Mock shirt image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-52 bg-orange-400 rounded-2xl relative">
          {/* Shirt pattern */}
          <div className="absolute inset-4 bg-orange-300 rounded-xl opacity-80"></div>
          {/* Collar */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-orange-500 rounded-t-lg"></div>
          {/* Buttons */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 space-y-2">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;