import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/common/Navbar';
import AddressCard from '../components/checkout/AddressCard';
import PaymentMethods from '../components/checkout/PaymentMethods';
import SummaryCard from '../components/checkout/SummaryCard';
import Button from '../components/common/Button';

export default function Checkout() {
  const navigate = useNavigate();
  const { getCartSummary, clearCart, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const summary = getCartSummary();

  const address = {
    line1: '25A Housing Estate,',
    line2: 'Sylhet',
    deliveryTime: 'Delivered in next 7 days'
  };

  const handleBackClick = () => {
    navigate('/cart');
  };

  const handleChangeAddress = () => {
    // Address change logic here
    console.log('Change address clicked');
  };

  const handleAddVoucher = () => {
    // Add voucher logic here
    console.log('Add voucher clicked');
  };

  const handleCheckoutNow = () => {
    // Checkout logic here - redirect back to cart to review
    navigate('/cart');
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
      alert(`Payment successful! Order total: $${summary.finalTotal.toFixed(2)}\nOrder ID: #${Date.now()}`);
      
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
      {/* Enhanced Header */}
      <Navbar
        title="Checkout"
        showBack={true}
        onBackClick={handleBackClick}
      />

      <div className="p-6 pb-24"> {/* pb-24 for bottom navigation space */}
        {/* Delivery Address */}
        <AddressCard
          address={address}
          onChangeAddress={handleChangeAddress}
          className="mb-6"
        />

        {/* Payment Method */}
        <PaymentMethods
          onAddVoucher={handleAddVoucher}
          className="mb-6"
        />

        {/* Order Summary */}
        <SummaryCard
          summary={summary}
          className="mb-6"
        />

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            onClick={handleCheckoutNow}
            variant="outline"
            className="flex-1"
            size="lg"
            disabled={isProcessing}
          >
            Review Cart
          </Button>
          <Button 
            onClick={handlePayNow}
            className="flex-1"
            size="lg"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </Button>
        </div>
        
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