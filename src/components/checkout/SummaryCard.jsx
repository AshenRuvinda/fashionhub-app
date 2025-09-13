import React from 'react';
import Card from '../common/Card';

const SummaryCard = ({ 
  summary,
  className = '' 
}) => {
  return (
    <Card className={className}>
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
  );
};

export default SummaryCard;