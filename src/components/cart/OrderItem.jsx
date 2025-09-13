import React from 'react';
import { Plus, Minus } from 'lucide-react';
import Card from '../common/Card';

const OrderItem = ({ 
  item, 
  onUpdateQuantity,
  className = '' 
}) => {
  const getItemImage = (type) => {
    const colors = {
      shirt1: 'from-orange-200 to-orange-300',
      coat: 'from-yellow-200 to-yellow-300'
    };
    return colors[type] || 'from-gray-200 to-gray-300';
  };

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className={`w-20 h-20 bg-gradient-to-br ${getItemImage(item.image)} rounded-xl flex items-center justify-center flex-shrink-0`}>
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
            onClick={() => onUpdateQuantity(item.id, -1)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-semibold">{item.quantity}x</span>
          <button
            onClick={() => onUpdateQuantity(item.id, 1)}
            className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="font-bold text-gray-900">${item.price}</p>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;