import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const OnboardingCard = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <div className={`h-1/2 flex flex-col justify-center px-6 ${className}`} style={{fontFamily: 'Imprima, sans-serif'}}>
      
      {/* Text Content */}
      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3 tracking-tight">
          Find The<br />
          Best Collections
        </h1>
        
        <p className="text-gray-500 text-sm leading-relaxed px-4">
          Get your dream item easily with FashionHub and get other interesting offer
        </p>
      </div>

      {/* Action Buttons */}
      <div className="max-w-sm mx-auto w-full pb-8">
        <div className="flex gap-4">
          <Button
            variant="secondary"
            onClick={() => navigate('/home')}
            className="flex-1 py-3 text-sm"
          >
            Sign Up
          </Button>
          
          <Button
            variant="primary"
            onClick={() => navigate('/home')}
            className="flex-1 py-3 text-sm"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;