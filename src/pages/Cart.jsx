import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Premium Togerine Shirt',
      color: 'Yellow',
      size: 'L',
      price: 257.85,
      quantity: 1,
      image: 'shirt1'
    },
    {
      id: 2,
      name: 'Leather Togerine Coat',
      color: 'Yellow',
      size: 'L',
      price: 257.85,
      quantity: 1,
      image: 'coat'
    }
  ]);

  const updateQuantity = (id, change) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 12.00;
  const finalTotal = totalPrice + deliveryFee;

  const getItemImage = (type) => {
    const colors = {
      shirt1: 'from-orange-200 to-orange-300',
      coat: 'from-yellow-200 to-yellow-300'
    };
    return colors[type] || 'from-gray-200 to-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => navigate('/home')}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-semibold text-gray-900">Cart</span>
        <div className="w-10 h-10"></div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 flex items-center gap-4">
              {/* Product Image */}
              <div className={`w-20 h-20 bg-gradient-to-br ${getItemImage(item.image)} rounded-xl flex items-center justify-center`}>
                <div className="w-12 h-14 bg-white bg-opacity-30 rounded-lg"></div>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.color}</p>
                <p className="text-gray-500 text-sm">Size: {item.size}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold">{item.quantity}x</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="font-bold text-gray-900">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Items ({totalItems})</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Standard Delivery</span>
              <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900">Total Payment</span>
              <span className="font-bold text-gray-900">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Checkout Now
        </button>
      </div>
    </div>
  );
}