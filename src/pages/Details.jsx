import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import Navbar from '../components/common/Navbar';
import ProductImage from '../components/details/ProductImage';
import SizeSelector from '../components/details/SizeSelector';
import AddToCartButton from '../components/details/AddToCartButton';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProduct } = useProducts();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProduct = getProduct(id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || 'Default');
      setIsLoading(false);
    } else {
      // Product not found, redirect to home
      navigate('/home');
    }
  }, [id, getProduct, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, selectedSize, 1, selectedColor);
      navigate('/cart');
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar
        title="Details"
        showBack={true}
        rightIcon={<Heart className="w-5 h-5" />}
      />

      <div className="px-6 py-8">
        {/* Product Image */}
        <ProductImage 
          product={product}
          className="mb-6"
        />

        {/* Product Info */}
        <div className="mb-6">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'fill-orange-400 text-orange-400' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.rating}) • {product.reviews} reviews</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`w-8 h-8 ${getColorClass(color)} rounded-full border-2 ${
                    selectedColor === color 
                      ? 'border-orange-500 ring-2 ring-orange-200' 
                      : 'border-gray-300'
                  } flex items-center justify-center transition-all`}
                >
                  {selectedColor === color && (
                    <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Size Selection */}
        <SizeSelector
          sizes={product.sizes || ['S', 'M', 'L', 'XL', 'XXL']}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
          className="mb-8"
        />

        {/* Price and Add to Cart */}
        <AddToCartButton
          price={`${product.price.toFixed(2)}`}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}