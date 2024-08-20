import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    fetchProducts(filters).then(setProducts);
  }, [filters]);

  return (
    <div>
      <FilterBar setFilters={setFilters} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination controls here */}
    </div>
  );
}

export default AllProducts;
