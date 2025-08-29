import { usePWA } from './hooks/usePWA';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';

export default function App() {
  const { isInstallable, installApp, isOnline } = usePWA();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}