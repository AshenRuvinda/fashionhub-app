import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 relative bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center p-8">
          <div className="w-80 h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Mock person image */}
            <div className="w-64 h-80 bg-gradient-to-b from-amber-800 to-orange-900 rounded-2xl relative">
              {/* Head */}
              <div className="w-16 h-16 bg-orange-300 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2"></div>
              {/* Body */}
              <div className="w-32 h-40 bg-orange-600 rounded-t-full absolute top-16 left-1/2 transform -translate-x-1/2"></div>
              {/* Jacket */}
              <div className="w-36 h-32 bg-orange-800 rounded-t-2xl absolute top-20 left-1/2 transform -translate-x-1/2"></div>
              {/* Pants */}
              <div className="w-24 h-32 bg-gray-200 absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
          <div className="max-w-md">
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
              <button 
                onClick={() => navigate('/home')}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Sign Up
              </button>
              <button 
                onClick={() => navigate('/home')}
                className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}