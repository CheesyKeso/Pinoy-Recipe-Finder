import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Homepage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Filipino Cuisine</h1>
      <SearchBar />
    </div>
  );
};

export default Homepage;
