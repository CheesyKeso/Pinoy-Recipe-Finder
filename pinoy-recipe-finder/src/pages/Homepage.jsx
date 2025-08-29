import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Homepage.css';
import SearchBar from '../components/SearchBar';
import SurpriseRecipe from '../components/SurpriseRecipe';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <SurpriseRecipe />
      <div>
        <h1 className="homepage-title">Filipino Cuisine</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Homepage;
