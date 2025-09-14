import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Enhanced Order Item Component matching the reference exactly
const OrderItem = ({ 
  item,
  className = '' 
}) => {
  // Real fashion images from the internet
  const getProductImage = (type) => {
    const images = {
        shirt1: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        court: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        shirt2: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        court2: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        coat: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        blazer1: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        casual1: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg',
        coat2: 'https://dfcdn.defacto.com.tr/6/Y7677AZ_22SM_BN132_03_02.jpg'
    };
    return images[type] || 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=600&fit=crop&crop=center&q=80';
  };

  return (
    <div className={`bg-white rounded-3xl p-4 shadow-sm ${className}`}>
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="w-24 h-28 rounded-2xl overflow-hidden flex-shrink-0">
          <img 
            src={getProductImage(item.image)}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base mb-1">Premium</h3>
          <h3 className="font-semibold text-gray-900 text-base mb-1">{item.name}</h3>
          <p className="text-gray-500 text-sm mb-1">{item.color}</p>
          <p className="text-gray-500 text-sm mb-3">Size {item.size}</p>
          
          {/* Price */}
          <p className="font-bold text-gray-900 text-xl">${item.price.toFixed(2)}</p>
        </div>

        {/* Quantity Display */}
        <div className="flex flex-col items-center">
          <span className="font-bold text-gray-900 text-lg">{item.quantity}x</span>
        </div>
      </div>
    </div>
  );
};

export default function Cart() {
  const navigate = useNavigate();
  const { items, getCartSummary } = useCart();
  
  const summary = getCartSummary();

  const handleBackClick = () => {
    navigate('/home');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleBackClick}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="font-semibold text-gray-900 text-lg">Cart</h1>
          <div className="w-10"></div>
        </div>
        
        <div className="flex flex-col items-center justify-center h-96 px-6 pb-24">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 text-center mb-6">Add some products to your cart to see them here</p>
          <button 
            onClick={() => navigate('/home')}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <button
          onClick={handleBackClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="font-semibold text-gray-900 text-lg">Cart</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-6 pb-24">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6 mt-6">My Orders</h1>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {items.map((item, index) => (
            <OrderItem
              key={`${item.id}-${item.size}-${item.color}-${index}`}
              item={item}
            />
          ))}
        </div>

        {/* Summary Section */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-base">Total Items ({summary.totalItems})</span>
            <span className="font-bold text-gray-900 text-base">${summary.totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-base">Standard Delivery</span>
            <span className="font-bold text-gray-900 text-base">${summary.deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900 text-base">Total Payment</span>
            <span className="font-bold text-gray-900 text-base">${summary.finalTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold text-base hover:bg-orange-600 transition-colors"
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
}