/**
 * Format a number as a price string
 * @param {number} price - The price number
 * @param {string} currency - Currency symbol (default: '$')
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, currency = '$', decimals = 2) => {
    if (typeof price !== 'number') {
      return `${currency}0.00`;
    }
    
    return `${currency}${price.toFixed(decimals)}`;
  };
  
  /**
   * Parse a price string to number
   * @param {string} priceString - Price string like '$25.99'
   * @returns {number} Parsed price number
   */
  export const parsePrice = (priceString) => {
    if (typeof priceString !== 'string') {
      return 0;
    }
    
    // Remove currency symbols and parse
    const numericValue = priceString.replace(/[^0-9.]/g, '');
    return parseFloat(numericValue) || 0;
  };
  
  /**
   * Calculate discount percentage
   * @param {number} originalPrice - Original price
   * @param {number} discountedPrice - Discounted price
   * @returns {number} Discount percentage
   */
  export const calculateDiscount = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice <= 0) {
      return 0;
    }
    
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };
  
  /**
   * Apply discount to price
   * @param {number} price - Original price
   * @param {number} discountPercent - Discount percentage
   * @returns {number} Price after discount
   */
  export const applyDiscount = (price, discountPercent) => {
    if (price <= 0 || discountPercent <= 0) {
      return price;
    }
    
    return price * (1 - discountPercent / 100);
  };