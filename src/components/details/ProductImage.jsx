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
      {/* Mock shirt image matching the design */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-52 relative">
          {/* Shirt body - cream/beige color with pattern */}
          <div className="w-full h-full bg-gradient-to-b from-orange-100 to-orange-200 rounded-2xl relative overflow-hidden">
            {/* Floral pattern overlay */}
            <div className="absolute inset-0 opacity-60">
              {/* Mock floral pattern with small decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full opacity-70"></div>
              <div className="absolute top-8 right-6 w-2 h-2 bg-green-400 rounded-full opacity-70"></div>
              <div className="absolute top-12 left-8 w-4 h-2 bg-red-300 rounded-full opacity-70"></div>
              <div className="absolute top-16 right-4 w-2 h-3 bg-yellow-500 rounded-full opacity-70"></div>
              <div className="absolute top-20 left-6 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
              <div className="absolute top-24 right-8 w-2 h-2 bg-red-400 rounded-full opacity-70"></div>
              <div className="absolute top-28 left-4 w-2 h-4 bg-green-300 rounded-full opacity-70"></div>
              <div className="absolute top-32 right-6 w-3 h-2 bg-orange-400 rounded-full opacity-70"></div>
              <div className="absolute top-36 left-8 w-2 h-3 bg-red-300 rounded-full opacity-70"></div>
              <div className="absolute top-40 right-4 w-4 h-2 bg-yellow-400 rounded-full opacity-70"></div>
            </div>
            
            {/* Shirt collar */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              {/* V-neck collar */}
              <div className="w-8 h-6 border-l-2 border-r-2 border-orange-300 transform rotate-180" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
            </div>
            
            {/* Button placket */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 space-y-3">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            </div>
            
            {/* Side seams */}
            <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-orange-300 opacity-50"></div>
            <div className="absolute right-0 top-4 bottom-4 w-0.5 bg-orange-300 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;