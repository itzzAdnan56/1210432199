// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductCard from '../components/ProductCard'; 

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('AMZ', 'Laptop', 10);
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Top Products</h1>
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.productName} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductsPage;
