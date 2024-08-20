import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, InputLabel, Select, FormControl } from '@mui/material';

function FilterBar({ setFilters }) {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [availability, setAvailability] = useState('');

  const handleFilterChange = () => {
    setFilters({
      category,
      company,
      rating,
      priceRange,
      availability,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="home">Home</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          label="Company"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          label="Rating"
          type="number"
          fullWidth
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <InputLabel>Availability</InputLabel>
          <Select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            label="Availability"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="in-stock">In Stock</MenuItem>
            <MenuItem value="out-of-stock">Out of Stock</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleFilterChange}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
}

export default FilterBar;

