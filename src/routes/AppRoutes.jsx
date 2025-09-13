import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { ProductsProvider } from '../context/ProductsContext';
import BottomNavigation from '../components/common/BottomNavigation';
import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import Details from '../pages/Details';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

// Debug component to log route changes
function RouteLogger() {
  const location = useLocation();
  
  React.useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);
  
  return null;
}

// App content with conditional bottom navigation
function AppContent() {
  const location = useLocation();
  
  // Pages that should NOT show the bottom navigation
  const pagesWithoutBottomNav = ['/onboarding'];
  
  const shouldShowBottomNav = !pagesWithoutBottomNav.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <RouteLogger />
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Catch-all route for debugging */}
        <Route path="*" element={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
              <p className="text-gray-600 mb-4">The requested page does not exist.</p>
              <button 
                onClick={() => window.location.href = '/home'}
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
              >
                Go to Home
              </button>
            </div>
          </div>
        } />
      </Routes>
      
      {/* Global Bottom Navigation - shows on all pages except onboarding */}
      {shouldShowBottomNav && <BottomNavigation />}
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </Router>
  );
}