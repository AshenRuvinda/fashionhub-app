import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../common/Card';

const PaymentMethods = ({ 
  onAddVoucher,
  className = '' 
}) => {
  return (
    <Card className={className}>
      <h2 className="font-semibold text-gray-900 mb-4">Payment Method</h2>
      
      {/* Payment Icons Row */}
      <div className="flex gap-3 mb-4">
        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
          VISA
        </div>
        <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
          AMEX
        </div>
        <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
          MC
        </div>
        <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center text-white text-xs">
          PP
        </div>
        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white text-xs">
          AP
        </div>
      </div>

      <button 
        onClick={onAddVoucher}
        className="w-full bg-orange-100 text-orange-600 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-orange-200 transition-colors"
      >
        <Plus className="w-5 h-5" />
        Add Voucher
      </button>

      <div className="mt-4 p-3 bg-red-50 rounded-lg">
        <p className="text-red-600 text-sm">
          <strong>NOTE:</strong> Use your order id at the payment. Your id #154619 if you forget to put your order id we can&apos;t confirm the payment.
        </p>
      </div>
    </Card>
  );
};

export default PaymentMethods;