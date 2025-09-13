import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Truck, Plus } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();

  const orderSummary = {
    totalItems: 3,
    totalPrice: 1116.00,
    deliveryFee: 12.00,
    finalTotal: 1126.00
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => navigate('/cart')}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-semibold text-gray-900">Checkout</span>
        <div className="w-10 h-10"></div>
      </div>

      <div className="p-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Delivery Address</h2>
            <button className="text-orange-500 text-sm font-medium">Change</button>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">25A Housing Estate,</p>
              <p className="font-medium text-gray-900 mb-1">Sylhet</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-4 h-4" />
                <span>Delivered in next 7 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Payment Method</h2>
          
          {/* Payment Icons Row */}
          <div className="flex gap-3 mb-4">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
            <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">AMEX</div>
            <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
            <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs">PP</div>
            <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white text-xs">AP</div>
          </div>

          <button className="w-full bg-orange-100 text-orange-600 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Add Voucher
          </button>

          <div className="mt-4 p-3 bg-red-50 rounded-lg">
            <p className="text-red-600 text-sm">
              <strong>NOTE:</strong> Use your order id at the payment. Your id #154619 if you forget to put your order id we can&apos;t confirm the payment.
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Items ({orderSummary.totalItems})</span>
              <span className="font-semibold">${orderSummary.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Standard Delivery</span>
              <span className="font-semibold">${orderSummary.deliveryFee.toFixed(2)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <span className="font-semibold text-gray-900">Total Payment</span>
              <span className="font-bold text-gray-900">${orderSummary.finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/cart')}
            className="flex-1 bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Checkout Now
          </button>
          <button 
            onClick={() => alert('Payment processing...')}
            className="flex-1 bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}