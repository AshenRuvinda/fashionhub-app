import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/home');
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col" style={{fontFamily: 'Imprima, sans-serif'}}>
      
      {/* Image Section - 50% of screen */}
      <div className="h-3/5 w-full">
        <img 
          src="https://melvinjones.in/cdn/shop/articles/image-1693990438-scaled.jpg?v=1700156677&width=1100"
          alt="Fashion model sitting casually"
          className="w-full h-full object-cover object-top rounded-b-3xl"
          style={{
            filter: 'sepia(20%) saturate(120%) brightness(110%) contrast(95%)',
            objectPosition: 'center top'
          }}
        />
      </div>

      {/* Content Section - 50% of screen */}
      <div className="h-1/2 flex flex-col justify-center px-6">
        
        {/* Text Content */}
        <div className="text-center mb-8 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
            Find The<br />
            Best Collections
          </h1>
          
          <p className="text-gray-500 text-base leading-relaxed px-2">
            Get your dream item easily with FashionHub and get other interesting offer
          </p>
        </div>

        {/* Action Buttons */}
        <div className="max-w-sm mx-auto w-full pb-8">
          <div className="flex gap-4">
            <button 
              onClick={handleSignUp}
              className="flex-1 border-2 border-gray-900 text-gray-900 py-3 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Sign Up
            </button>
            
            <button 
              onClick={handleSignIn}
              className="flex-1 bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}