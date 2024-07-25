import React from 'react';
import { FavoriteProvider } from './context/FavoriteContext';
import { AppRouter } from './routers/AppRouter';
import './assets/styles/styles.scss';

export const App = () => {
  return (
    <FavoriteProvider>
      <AppRouter />
    </FavoriteProvider>
  );
};
