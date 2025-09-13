import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const OnboardingCard = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <div className={`max-w-md ${className}`}>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Find The
      </h1>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
        Best Collections
      </h1>
      
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        Get your dream item easily with FashionHub and get other interesting offer
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="secondary"
          onClick={() => navigate('/home')}
        >
          Sign Up
        </Button>
        <Button 
          variant="primary"
          onClick={() => navigate('/home')}
        >
          Sign In
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default OnboardingCard;