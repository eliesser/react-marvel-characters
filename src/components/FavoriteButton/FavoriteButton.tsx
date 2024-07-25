import React from 'react';
import PropTypes from 'prop-types';

import favoriteActiveIcon from '../../assets/img/favorite-active.svg';
import favoriteInactiveIcon from '../../assets/img/favorite-inactive.svg';
import './styles.scss';

interface FavoriteButtonProps {
  favoritesLength?: number;
  isFavorite: boolean;
  numberVisible: boolean;
  onGoToFavorites?: () => void;
}

export const FavoriteButton = ({
  favoritesLength,
  isFavorite,
  numberVisible,
  onGoToFavorites,
}: FavoriteButtonProps) => {
  return (
    <>
      <article className='favorite' onClick={onGoToFavorites}>
        {isFavorite ? (
          <img src={favoriteActiveIcon} />
        ) : (
          <img src={favoriteInactiveIcon} />
        )}
        {numberVisible && (
          <span className='favorite__number'>{favoritesLength}</span>
        )}
      </article>
    </>
  );
};

FavoriteButton.propTypes = {
  favoritesLength: PropTypes.number,
  numberVisible: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  searchCharacters: PropTypes.func,
};
