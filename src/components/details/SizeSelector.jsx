import React from 'react';

const SizeSelector = ({ 
  sizes, 
  selectedSize, 
  onSizeSelect,
  className = '' 
}) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`w-12 h-12 rounded-lg font-semibold transition-all ${
              selectedSize === size
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;