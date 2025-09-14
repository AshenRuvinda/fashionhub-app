import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { getCartSummary, clearCart, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const summary = getCartSummary();

  const handleBackClick = () => {
    navigate('/cart');
  };

  const handleChangeAddress = () => {
    console.log('Change address clicked');
  };

  const handleAddVoucher = () => {
    console.log('Add voucher clicked');
  };

  const handlePayNow = async () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart after successful payment
      clearCart();
      
      // Show success message
      alert(`Payment successful! Order total: $${summary.finalTotal.toFixed(2)}\nOrder ID: #154619`);
      
      // Redirect to home
      navigate('/home');
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Redirect if cart is empty
  if (items.length === 0) {
    navigate('/cart');
    return null;
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
        <h1 className="font-semibold text-gray-900 text-lg">Checkout</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-6 pb-24">
        {/* Delivery Address */}
        <div className="mb-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-500 text-sm">Delivery Address</h2>
            <button 
              onClick={handleChangeAddress}
              className="text-orange-500 text-sm font-medium"
            >
              Change
            </button>
          </div>
          
          <div className="flex items-start gap-4">
            {/* Map Icon/Image */}
            <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=200&h=200&fit=crop&crop=center&q=80"
                alt="Map location"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-base">25/3 Housing Estate,</p>
              <p className="font-medium text-gray-900 text-base mb-2">Sylhet</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Delivered in next 7 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-gray-500 text-sm mb-4">Payment Method</h2>
          
          {/* Payment Icons Row */}
          <div className="flex gap-3 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
              alt="Visa"
              className="w-12 h-8 object-contain bg-white rounded border p-1"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png"
              alt="American Express"
              className="w-12 h-8 object-contain bg-white rounded border p-1"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"
              alt="Mastercard"
              className="w-12 h-8 object-contain bg-white rounded border p-1"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"
              alt="PayPal"
              className="w-12 h-8 object-contain bg-white rounded border p-1"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/100px-Apple_logo_black.svg.png"
              alt="Apple Pay"
              className="w-12 h-8 object-contain bg-white rounded border p-1"
            />
          </div>

          <button 
            onClick={handleAddVoucher}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium text-base hover:bg-gray-200 transition-colors mb-4"
          >
            Add Voucher
          </button>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> Use your order id at the payment. Your id <strong>#154619</strong> if you forget to put your order id we cannot confirm the payment.
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6 space-y-3">
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

        {/* Pay Now Button */}
        <button 
          onClick={handlePayNow}
          disabled={isProcessing}
          className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold text-base hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
        
        {isProcessing && (
          <div className="mt-4 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
            <span className="ml-2 text-gray-600">Processing your payment...</span>
          </div>
        )}
      </div>
    </div>
  );
}