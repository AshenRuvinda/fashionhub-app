// src/data/products.js
export const products = [
    {
      id: 1,
      name: 'Premium Togerine Shirt eka',
      price: 257.85,
      originalPrice: 300.00,
      image: 'shirt1',
      category: 'Women',
      colors: ['orange', 'beige', 'blue'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.5,
      reviews: 128,
      description: 'Premium quality shirt with beautiful floral pattern.',
      inStock: true
    },
    {
      id: 2,
      name: 'Leather Court Jacket',
      price: 325.36,
      originalPrice: 380.00,
      image: 'court',
      category: 'Men',
      colors: ['brown', 'black', 'tan'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.7,
      reviews: 95,
      description: 'Classic leather court jacket for sophisticated look.',
      inStock: true
    },
    {
      id: 3,
      name: 'Casual Togerine Shirt',
      price: 126.47,
      originalPrice: 150.00,
      image: 'shirt2',
      category: 'Women',
      colors: ['orange', 'yellow', 'pink'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.3,
      reviews: 73,
      description: 'Comfortable casual shirt for everyday wear.',
      inStock: true
    },
    {
      id: 4,
      name: 'Designer Leather Court',
      price: 257.85,
      originalPrice: 295.00,
      image: 'court2',
      category: 'Men',
      colors: ['tan', 'brown', 'navy'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      rating: 4.6,
      reviews: 112,
      description: 'Designer leather jacket with premium finish.',
      inStock: true
    },
    {
      id: 5,
      name: 'Vintage Denim Jacket',
      price: 189.99,
      originalPrice: 220.00,
      image: 'coat',
      category: 'Unisex',
      colors: ['blue', 'black', 'gray'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.4,
      reviews: 89,
      description: 'Classic vintage style denim jacket.',
      inStock: true
    }
  ];
  
  export const categories = ['All', 'Men', 'Women', 'Kids', 'Unisex'];
  
  // Helper functions
  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  export const getProductsByCategory = (category) => {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
  };
  
  export const searchProducts = (query) => {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  };