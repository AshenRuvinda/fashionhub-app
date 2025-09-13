import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import IconWrapper from './IconWrapper';

const Navbar = ({ 
  title, 
  showBack = false, 
  rightIcon = null, 
  onRightIconClick,
  className = '' 
}) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-white px-6 py-4 flex items-center justify-between ${className}`}>
      <div className="flex items-center">
        {showBack && (
          <IconWrapper onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft className="w-5 h-5" />
          </IconWrapper>
        )}
      </div>
      
      {title && (
        <span className="font-semibold text-gray-900 text-lg">{title}</span>
      )}
      
      <div className="flex items-center">
        {rightIcon && (
          <IconWrapper onClick={onRightIconClick}>
            {rightIcon}
          </IconWrapper>
        )}
      </div>
    </div>
  );
};

export default Navbar;