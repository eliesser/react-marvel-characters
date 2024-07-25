import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CharacterDetailPage } from '../pages/CharacterDetailPage/CharacterDetailPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { Header } from '../components/UI/Header/Header';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/favorites'
          element={<MainPage isFavoritesPage={true} />}
        />
        <Route
          path='/character/:characterId'
          element={<CharacterDetailPage />}
        />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </>
  );
};
