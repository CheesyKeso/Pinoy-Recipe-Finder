import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
        </Link>
      </nav>
    </header>
  );
};

export default Header;
