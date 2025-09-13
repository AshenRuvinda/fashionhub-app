import React from 'react';
import { MapPin, Truck } from 'lucide-react';
import Card from '../common/Card';

const AddressCard = ({ 
  address, 
  onChangeAddress,
  className = '' 
}) => {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900">Delivery Address</h2>
        <button 
          onClick={onChangeAddress}
          className="text-orange-500 text-sm font-medium"
        >
          Change
        </button>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
          <MapPin className="w-5 h-5 text-orange-500" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-900">{address.line1}</p>
          <p className="font-medium text-gray-900 mb-1">{address.line2}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Truck className="w-4 h-4" />
            <span>{address.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddressCard;