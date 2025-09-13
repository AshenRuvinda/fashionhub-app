import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/common/Navbar';
import OrderItem from '../components/cart/OrderItem';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, getCartSummary, removeFromCart } = useCart();
  
  const summary = getCartSummary();

  const handleUpdateQuantity = (id, change) => {
    updateQuantity(id, change);
  };

  const handleRemoveItem = (id, size) => {
    removeFromCart(id, size);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar
          title="Cart"
          showBack={true}
        />
        
        <div className="flex flex-col items-center justify-center h-96 px-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 text-center mb-6">Add some products to your cart to see them here</p>
          <Button onClick={() => navigate('/home')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar
        title="Cart"
        showBack={true}
      />

      <div className="p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {items.map((item, index) => (
            <OrderItem
              key={`${item.id}-${item.size}-${item.color}-${index}`}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={() => handleRemoveItem(item.id, item.size)}
            />
          ))}
        </div>

        {/* Order Summary */}
        <Card className="mb-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Items ({summary.totalItems})</span>
              <span className="font-semibold">${summary.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Standard Delivery</span>
              <span className="font-semibold">${summary.deliveryFee.toFixed(2)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900">Total Payment</span>
              <span className="font-bold text-gray-900">${summary.finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        {/* Checkout Button */}
        <Button 
          onClick={() => navigate('/checkout')}
          className="w-full"
          size="lg"
        >
          <ShoppingBag className="w-5 h-5" />
          Checkout Now
        </Button>
      </div>
    </div>
  );
}