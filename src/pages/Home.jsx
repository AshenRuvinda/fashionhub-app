import React from 'react';
import { User } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/home/ProductGrid';
import BottomNavigation from '../components/common/BottomNavigation';

// Enhanced Category Tabs Component
const EnhancedCategoryTabs = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className = '' 
}) => {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 ${className}`} style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            activeCategory === category
              ? 'bg-orange-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Main Home Component
export default function Home() {
  // Use your existing context hooks
  const { 
    filteredProducts, 
    categories, 
    selectedCategory, 
    handleCategoryChange,
    isLoading 
  } = useProducts();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 'L', 1, product.colors?.[0] || 'Default');
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        {/* Left - Menu Icon (4-dot grid) */}
        <button 
          onClick={handleMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <div className="grid grid-cols-2 gap-1 w-5 h-5">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        </button>

        {/* Right - Profile Icon */}
        <button 
          onClick={handleProfileClick}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-20">
        {/* Explore Section */}
        <div className="mb-6 mt-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore</h1>
          <p className="text-gray-500 text-base">Best trendy collection!</p>
        </div>

        {/* Category Tabs */}
        <EnhancedCategoryTabs
          categories={categories}
          activeCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          className="mb-6"
        />

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          /* Product Grid - Using your existing component with navigation */
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}