import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SearchBar.css';

const SearchBar = ({ filteredCategory }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading recipes:', error));
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !filteredCategory || recipe.category === filteredCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="searchbar-input-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="searchbar-input"
        />
      </div>
      <div className="searchbar-results">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="searchbar-card">
            <img src={recipe.image} alt={recipe.name} className="searchbar-card-img" />
            <div className="searchbar-card-content">
              <h3>{recipe.name}</h3>
              <p className="searchbar-card-desc">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="searchbar-card-link">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
