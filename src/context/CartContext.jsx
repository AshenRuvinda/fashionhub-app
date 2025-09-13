import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // In a real app, load cart from localStorage
    // For now, we'll manage cart state in memory
    const savedCart = JSON.parse(localStorage.getItem('fashionhub_cart') || '[]');
    setItems(savedCart);
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever items change
    localStorage.setItem('fashionhub_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, size = 'L', quantity = 1, color = 'Default') => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: typeof product.price === 'number' ? product.price : parseFloat(product.price.toString().replace('$', '')),
          size: size,
          quantity: quantity,
          image: product.image || 'shirt1',
          color: color
        }];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id, size) => {
    setItems(prevItems =>
      prevItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getCartSummary = () => {
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();
    const deliveryFee = 12.00;
    const finalTotal = totalPrice + deliveryFee;

    return {
      totalItems,
      totalPrice,
      deliveryFee,
      finalTotal
    };
  };

  const value = {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getCartSummary
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};