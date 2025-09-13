// src/data/products.js
export const products = [
    {
      id: 1,
      name: 'Togerine Shirt',
      price: 240.32,
      originalPrice: 300.00,
      image: 'shirt1',
      category: 'Women',
      colors: ['orange', 'beige', 'blue'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.5,
      reviews: 128,
      description: 'Premium quality shirt with beautiful floral pattern. Made from soft, breathable fabric for all-day comfort.',
      inStock: true
    },
    {
      id: 2,
      name: 'Leather Court',
      price: 325.36,
      originalPrice: 380.00,
      image: 'court',
      category: 'Men',
      colors: ['brown', 'black', 'tan'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.7,
      reviews: 95,
      description: 'Classic leather court jacket for sophisticated look. Genuine leather with premium finish and modern fit.',
      inStock: true
    },
    {
      id: 3,
      name: 'Togerine Shirt',
      price: 126.47,
      originalPrice: 150.00,
      image: 'shirt2',
      category: 'Women',
      colors: ['orange', 'yellow', 'pink'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.3,
      reviews: 73,
      description: 'Comfortable casual shirt for everyday wear. Perfect blend of style and comfort for any occasion.',
      inStock: true
    },
    {
      id: 4,
      name: 'Leather Court',
      price: 257.85,
      originalPrice: 295.00,
      image: 'court2',
      category: 'Men',
      colors: ['tan', 'brown', 'navy'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      rating: 4.6,
      reviews: 112,
      description: 'Designer leather jacket with premium finish. Crafted with attention to detail for the modern gentleman.',
      inStock: true
    },
    {
      id: 5,
      name: 'Vintage Blazer',
      price: 189.99,
      originalPrice: 220.00,
      image: 'coat',
      category: 'Unisex',
      colors: ['blue', 'black', 'gray'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.4,
      reviews: 89,
      description: 'Classic vintage style blazer. Timeless design with durable construction and comfortable fit.',
      inStock: true
    },
    {
      id: 6,
      name: 'Cotton Blazer',
      price: 178.50,
      originalPrice: 210.00,
      image: 'blazer1',
      category: 'Women',
      colors: ['beige', 'white', 'navy'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.2,
      reviews: 64,
      description: 'Elegant cotton blazer perfect for professional and casual occasions.',
      inStock: true
    },
    {
      id: 7,
      name: 'Casual Shirt',
      price: 98.75,
      originalPrice: 120.00,
      image: 'casual1',
      category: 'Men',
      colors: ['white', 'blue', 'gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.1,
      reviews: 156,
      description: 'Comfortable casual shirt for everyday wear with premium cotton fabric.',
      inStock: true
    },
    {
      id: 8,
      name: 'Designer Coat',
      price: 445.20,
      originalPrice: 520.00,
      image: 'coat2',
      category: 'Unisex',
      colors: ['black', 'gray', 'camel'],
      sizes: ['M', 'L', 'XL'],
      rating: 4.8,
      reviews: 42,
      description: 'Luxury designer coat with premium materials and exceptional craftsmanship.',
      inStock: true
    }
  ];
  
  export const categories = ['All', 'Men', 'Women', 'Kids', 'Unisex'];
  
  // Helper functions with improved error handling
  export const getProductById = (id) => {
    console.log('Looking for product with ID:', id, 'Type:', typeof id);
    
    // Convert string ID to number for comparison
    const numericId = parseInt(id);
    
    if (isNaN(numericId)) {
      console.log('Invalid ID provided:', id);
      return null;
    }
    
    const product = products.find(product => product.id === numericId);
    console.log('Found product:', product);
    
    return product;
  };
  
  export const getProductsByCategory = (category) => {
    console.log('Filtering products by category:', category);
    
    if (category === 'All') return products;
    
    const filtered = products.filter(product => product.category === category);
    console.log('Filtered products:', filtered.length);
    
    return filtered;
  };
  
  export const searchProducts = (query) => {
    console.log('Searching products with query:', query);
    
    if (!query || query.trim() === '') return products;
    
    const searchTerm = query.toLowerCase().trim();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      (product.description && product.description.toLowerCase().includes(searchTerm))
    );
    
    console.log('Search results:', results.length);
    return results;
  };