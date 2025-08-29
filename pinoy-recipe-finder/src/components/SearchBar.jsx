import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
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
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
            
