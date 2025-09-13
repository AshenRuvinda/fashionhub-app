import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import AppRoutes from './routes/AppRoutes';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;