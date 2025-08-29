import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavoriteCount(favorites.length);
    };
    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, []);

  // Optional: update count on every render (in case of in-app changes)
  useEffect(() => {
    const interval = setInterval(() => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavoriteCount(favorites.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-title">
          Pinoy Recipe Finder
        </Link>
        <Link to="/favorites" className="favorites-link">
          View Favorites
          <span className="favorites-count">
            ({favoriteCount})
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
         
