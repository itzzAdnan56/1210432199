// src/components/ProductCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.productName || 'No Name'}</Typography>
        <Typography>Price: ${product.price || 'N/A'}</Typography>
        <Typography>Rating: {product.rating || 'N/A'}</Typography>
        <Typography>Discount: {product.discount || 'N/A'}%</Typography>
        <Typography>Availability: {product.availability || 'N/A'}</Typography>
        <Button href={`/product/${product.productName || 'default'}`}>View Details</Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
