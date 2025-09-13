import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Home, Search, ShoppingBag, Settings } from 'lucide-react';

const BottomNavigation = ({ className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalItems } = useCart();

  const cartItemsCount = getTotalItems();

  const navigationItems = [
    {
      id: 'home',
      icon: Home,
      label: 'Home',
      path: '/home',
      onClick: () => navigate('/home')
    },
    {
      id: 'search',
      icon: Search,
      label: 'Search',
      path: '/search',
      onClick: () => {
        alert('Search functionality coming soon!');
      }
    },
    {
      id: 'cart',
      icon: ShoppingBag,
      label: 'Cart',
      path: '/cart',
      badge: cartItemsCount > 0 ? cartItemsCount : null,
      onClick: () => navigate('/cart')
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings',
      path: '/settings',
      onClick: () => {
        alert('Settings functionality coming soon!');
      }
    }
  ];

  const isActiveRoute = (path) => {
    if (path === '/search' || path === '/settings') {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_20px_0px_rgba(0,0,0,0.08)] ${className}`}>
      <div className="flex items-center justify-center px-6 py-2">
        <div className="flex items-center justify-between w-full max-w-sm">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = isActiveRoute(item.path);
            
            return (
              <button 
                key={item.id}
                onClick={item.onClick}
                className="flex flex-col items-center justify-center py-3 px-6 transition-all duration-300 hover:scale-105 active:scale-95 relative"
              >
                {/* Icon Container */}
                <div className="relative mb-1.5">
                  <IconComponent 
                    size={24}
                    className={`transition-colors duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  
                  {/* Enhanced Badge for cart items - only show if items exist */}
                  {item.badge && item.badge > 0 && (
                    <div className="absolute -top-2 -right-2 flex items-center justify-center">
                      {/* Pulse animation background */}
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-75"></div>
                      
                      {/* Main badge */}
                      <div className="relative bg-gradient-to-br from-red-500 to-red-600 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center shadow-lg border border-red-400 transform scale-100 hover:scale-110 transition-transform">
                        <span className="drop-shadow-sm">
                          {item.badge > 99 ? '99+' : item.badge}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Label */}
                <span className={`text-[11px] font-medium tracking-wide transition-all duration-200 ${
                  isActive 
                    ? 'text-orange-500 scale-105' 
                    : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;