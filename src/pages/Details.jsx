import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Heart, Star } from 'lucide-react';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('L');
  
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  
  const product = {
    id: id,
    name: 'Premium Togerine Shirt',
    price: '$257.85',
    colors: ['brown', 'beige', 'blue']
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
        <span className="font-semibold text-gray-900">Details</span>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Product Image */}
      <div className="px-6 py-8">
        <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl relative overflow-hidden mb-6">
          {/* Mock shirt image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-52 bg-orange-400 rounded-2xl relative">
              {/* Shirt pattern */}
              <div className="absolute inset-4 bg-orange-300 rounded-xl opacity-80"></div>
              {/* Collar */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-orange-500 rounded-t-lg"></div>
              {/* Buttons */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 space-y-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">(4.5)</span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          {/* Color Options */}
          <div className="flex gap-2 mb-6">
            <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-orange-500"></div>
            <div className="w-6 h-6 bg-yellow-200 rounded-full border-2 border-gray-300"></div>
            <div className="w-6 h-6 bg-blue-300 rounded-full border-2 border-gray-300"></div>
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
          <div className="flex gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
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

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900">{product.price}</span>
          </div>
          <button 
            onClick={() => navigate('/cart')}
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}