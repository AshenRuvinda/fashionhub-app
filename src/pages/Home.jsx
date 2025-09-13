import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Home as HomeIcon, ShoppingCart, Settings } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import CategoryTabs from '../components/home/CategoryTabs';
import ProductGrid from '../components/home/ProductGrid';

export default function Home() {
  const navigate = useNavigate();
  const { 
    filteredProducts, 
    categories, 
    selectedCategory, 
    handleCategoryChange,
    isLoading 
  } = useProducts();
  const { addToCart, getTotalItems } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 'L', 1, product.colors?.[0] || 'Default');
  };

  const cartItemsCount = getTotalItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6" />
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Explore Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore</h1>
          <p className="text-gray-600">Best trendy collection!</p>
        </div>

        {/* Category Tabs */}
        <CategoryTabs
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
          /* Product Grid */
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            className="mb-20"
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <HomeIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-orange-500">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-xs text-gray-400">Search</span>
          </button>
          <button 
            onClick={() => navigate('/cart')}
            className="flex flex-col items-center gap-1 relative"
          >
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-gray-400" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-xs text-gray-400">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}