import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <header style={{ background: '#2563eb', padding: '1rem', color: 'white' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Pinoy Recipe Finder
        </Link>
        <Link
          to="/favorites"
          style={{
            color: '#16a34a',
            background: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginLeft: '1rem'
          }}
        >
          View Favorites
          <span style={{ marginLeft: '0.5rem', color: '#2563eb' }}>
            ({favoriteCount})
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
