import React from 'react';

const CategoryTabs = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className = '' 
}) => {
  return (
    <div className={`flex gap-2 overflow-x-auto ${className}`}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            activeCategory === category
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;