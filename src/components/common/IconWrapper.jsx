import React from 'react';

const IconWrapper = ({ 
  children, 
  size = 'md', 
  variant = 'default',
  className = '',
  onClick
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const variants = {
    default: 'bg-gray-100 text-gray-600',
    primary: 'bg-orange-100 text-orange-500',
    dark: 'bg-gray-900 text-white'
  };
  
  return (
    <div
      className={`${sizes[size]} ${variants[variant]} rounded-full flex items-center justify-center ${className} ${
        onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconWrapper;