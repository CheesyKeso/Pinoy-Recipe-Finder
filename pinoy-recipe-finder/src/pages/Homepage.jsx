import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Homepage.css';
import SearchBar from '../components/SearchBar';
import SurpriseRecipe from '../components/SurpriseRecipe';
import CategoryFilter from '../components/CategoryFilter';


const Homepage = () => {
  const [filteredCategory, setFilteredCategory] = useState('');

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  return (
    <div className="homepage-container">
      <SurpriseRecipe />
      <div>
        <CategoryFilter onFilter={handleFilter} />
        <SearchBar filteredCategory={filteredCategory} />
      </div>
    </div>
  );
};

export default Homepage;
