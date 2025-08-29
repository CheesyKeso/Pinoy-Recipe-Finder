import React, { useEffect, useState } from 'react';
import '../css/CategoryFilter.css';

const CategoryFilter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map(recipe => recipe.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error('Error loading categories:', error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="category-filter-container">
      <button
        className={`category-btn${selectedCategory === '' ? ' active' : ''}`}
        onClick={() => handleCategoryChange('')}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-btn${selectedCategory === category ? ' active' : ''}`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
