import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProduct } = useProducts();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log('Details page loaded with ID:', id);
    
    const foundProduct = getProduct(id);
    console.log('Found product:', foundProduct);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || 'Default');
      setIsLoading(false);
    } else {
      console.log('Product not found, redirecting to home');
      // Add a small delay to prevent immediate redirect during navigation
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 100);
    }
  }, [id, getProduct, navigate]);

  const handleAddToCart = () => {
    if (product) {
      console.log('Adding to cart:', product.name, selectedSize, selectedColor);
      addToCart(product, selectedSize, 1, selectedColor);
      
      // Show success message
      alert(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
      
      // Navigate to cart
      navigate('/cart');
    }
  };

  const handleBackClick = () => {
    console.log('Back button clicked');
    navigate('/home');
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    console.log('Favorite toggled:', !isFavorite);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    console.log('Color selected:', color);
  };

  const getColorClass = (color) => {
    const colorClasses = {
      'orange': 'bg-orange-400',
      'beige': 'bg-yellow-200',
      'blue': 'bg-blue-300',
      'brown': 'bg-amber-600',
      'black': 'bg-gray-800',
      'tan': 'bg-yellow-600',
      'yellow': 'bg-yellow-400',
      'pink': 'bg-pink-400',
      'navy': 'bg-blue-800',
      'gray': 'bg-gray-400'
    };
    return colorClasses[color.toLowerCase()] || 'bg-gray-300';
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Product not found</p>
          <button 
            onClick={() => navigate('/home')}
            className="bg-orange-500 text-white px-6 py-2 rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Simple and clean */}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Title */}
        <h1 className="font-semibold text-gray-900 text-lg">Details</h1>
        
        {/* Bookmark/Save Icon - Custom SVG to match reference */}
        <button
          onClick={handleFavoriteClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg 
            className={`w-6 h-6 ${isFavorite ? 'fill-gray-700' : 'fill-none'} stroke-gray-700`} 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      <div className="px-6 pb-24">
        {/* Product Image - Large, rounded corners */}
        <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl relative overflow-hidden mb-6">
          <img 
            src={getProductImage(product?.image)}
            alt={product?.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback gradient if image fails to load
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Product Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Premium<br />
            {product.name}
          </h1>
          
          {/* Color Options - Right aligned circles */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex justify-end gap-2 mt-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`w-8 h-8 ${getColorClass(color)} rounded-full border-2 ${
                    selectedColor === color 
                      ? 'border-gray-800 ring-2 ring-gray-300' 
                      : 'border-gray-200'
                  } transition-all`}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>

        {/* Size Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
          <div className="flex gap-3">
            {(product.sizes || ['S', 'M', 'L', 'XL', 'XXL']).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full font-semibold transition-all min-w-[50px] ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price and Add to Cart - Bottom section */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex-1">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-200 shadow-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}