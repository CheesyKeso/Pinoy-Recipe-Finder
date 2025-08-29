import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SurpriseRecipe.css';

const SurpriseRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleSurprise = () => {
    if (recipes.length === 0) return;
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    navigate(`/recipe/${random.id}`);
  };

  return (
    <div className="surprise-bg">
      <div className="surprise-inner">
        <h2 className="surprise-title">
          you don't know what to cook today?
        </h2>
        <div className="surprise-desc">
          Try a surprise recipe
        </div>
        <button
          className="surprise-btn"
          onClick={handleSurprise}
        >
          Surprise recipe
        </button>
      </div>
    </div>
  );
};

export default SurpriseRecipe;
