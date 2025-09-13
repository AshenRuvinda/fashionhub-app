import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingCart, Settings, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Men', 'Women', 'Kids', 'Other'];
  
  const products = [
    {
      id: 1,
      name: 'Togerine Shirt',
      price: '$240.32',
      image: 'shirt1',
      category: 'Women'
    },
    {
      id: 2,
      name: 'Leather Court',
      price: '$325.36',
      image: 'court',
      category: 'Men'
    },
    {
      id: 3,
      name: 'Togerine Shirt',
      price: '$126.47',
      image: 'shirt2',
      category: 'Women'
    },
    {
      id: 4,
      name: 'Leather Court',
      price: '$257.85',
      image: 'court2',
      category: 'Men'
    }
  ];

  const getProductImage = (type) => {
    const colors = {
      shirt1: 'from-orange-200 to-orange-300',
      court: 'from-red-200 to-red-300',
      shirt2: 'from-orange-200 to-orange-300',
      court2: 'from-yellow-200 to-yellow-300'
    };
    return colors[type] || 'from-gray-200 to-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6" />
          <Search className="w-6 h-6" />
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
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/details/${product.id}`)}
              className="bg-white rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className={`w-full h-32 bg-gradient-to-br ${getProductImage(product.image)} rounded-xl mb-3 relative`}>
                {/* Mock product visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-20 bg-white bg-opacity-30 rounded-lg"></div>
                </div>
                {/* Plus button */}
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold">
                  +
                </button>
              </div>
              
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
              <p className="text-orange-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center gap-1">
            <HomeIcon className="w-6 h-6 text-orange-500" />
            <span className="text-xs text-orange-500">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Search className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Search</span>
          </button>
          <button 
            onClick={() => navigate('/cart')}
            className="flex flex-col items-center gap-1"
          >
            <ShoppingCart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Settings className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}