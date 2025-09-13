import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import AppRoutes from './routes/AppRoutes';
import BottomNavigation from './components/common/BottomNavigation';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
}

// Separate component to access useLocation hook
function AppContent() {
  const location = useLocation();
  
  // Pages that should NOT show the bottom navigation
  const pagesWithoutBottomNav = ['/onboarding'];
  
  const shouldShowBottomNav = !pagesWithoutBottomNav.includes(location.pathname);

  return (
    <>
      <AppRoutes />
      {shouldShowBottomNav && <BottomNavigation />}
    </>
  );
}

export default App;