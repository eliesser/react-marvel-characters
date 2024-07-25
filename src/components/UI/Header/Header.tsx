import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFavorites } from '../../../context/FavoriteContext';
import marvelLogo from '../../../assets/img/marvel-logo.svg';
import { FavoriteButton } from '../../FavoriteButton/FavoriteButton';
import './style.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { favoritesCount } = useFavorites();

  const onLogoClick = () => {
    navigate('/');
  };

  const onGoToFavorites = () => {
    navigate('/favorites');
  };

  return (
    <>
      <section className='header bg-primary'>
        <img
          className='cursor-pointer'
          src={marvelLogo}
          onClick={onLogoClick}
        />

        <FavoriteButton
          favoritesLength={favoritesCount}
          isFavorite={favoritesCount > 0}
          numberVisible={true}
          onGoToFavorites={onGoToFavorites}
        />
      </section>
    </>
  );
};
