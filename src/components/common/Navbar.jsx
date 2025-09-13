import React from 'react';
import { ArrowLeft, Bell } from 'lucide-react';

const IconWrapper = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
);

const Navbar = ({ 
  title, 
  showBack = false, 
  rightIcon = null, 
  leftContent = null, // New prop for custom left content
  onRightIconClick,
  onBackClick = () => console.log('Back clicked'),
  className = '',
  showNotification = false,
  notificationCount = 0
}) => {
  const defaultRightIcon = showNotification ? (
    <div className="relative">
      <Bell className="w-6 h-6 text-gray-700" />
      {notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {notificationCount > 9 ? '9+' : notificationCount}
        </span>
      )}
    </div>
  ) : null;

  return (
    <div className={`bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between ${className}`}>
      {/* Left side - Custom content, Back button, or spacer */}
      <div className="flex items-center">
        {leftContent ? (
          leftContent
        ) : showBack ? (
          <IconWrapper onClick={onBackClick}>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </IconWrapper>
        ) : (
          <div className="w-10" /> // Spacer for alignment when no left content
        )}
      </div>
      
      {/* Center - Title */}
      <div className="flex-1 flex justify-center">
        {title && (
          <h1 className="font-semibold text-gray-900 text-lg tracking-tight">
            {title}
          </h1>
        )}
      </div>
      
      {/* Right side - Icon */}
      <div className="flex items-center justify-end">
        {(rightIcon || defaultRightIcon) ? (
          <IconWrapper onClick={onRightIconClick}>
            {rightIcon || defaultRightIcon}
          </IconWrapper>
        ) : (
          <div className="w-10" /> // Spacer for alignment when no right content
        )}
      </div>
    </div>
  );
};

export default Navbar;