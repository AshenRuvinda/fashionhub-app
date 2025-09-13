import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow-sm',
  hover = false,
  onClick
}) => {
  const baseStyles = 'bg-white rounded-2xl';
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${padding} ${shadow} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;