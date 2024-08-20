// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q';

export const getProducts = async (companyName, categoryName, top) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/${companyName}/categories/${categoryName}/products`, {
      params: {
        top: top
      }
    });

    // Return the data if successful
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
