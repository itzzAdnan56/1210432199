import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function ProductDetails({ product }) {
  if (!product) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Company: {product.company}</Typography>
            <Typography variant="body1">Category: {product.category}</Typography>
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Typography variant="body1">Rating: {product.rating} stars</Typography>
            <Typography variant="body1">Discount: {product.discount}%</Typography>
            <Typography variant="body1">
              Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProductDetails;
