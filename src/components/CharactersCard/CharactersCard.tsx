import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFavorites } from '../../context/FavoriteContext';
import { ICharacter } from '../../interfaces/character.interface';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import './styles.scss';

interface CharactersCardProps {
  character: ICharacter;
}

export const CharactersCard = ({ character }: CharactersCardProps) => {
  const navigate = useNavigate();
  const { isFavorite, onToggleFavorite } = useFavorites();

  const onGoToCharacterDetail = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <section
      className='characters-card'
      onClick={() => onGoToCharacterDetail()}
    >
      <section className='characters-card__img-content'>
        <article
          className='characters-card__img-content__img'
          style={{
            backgroundImage: `url(${character?.thumbnail?.path}.${character?.thumbnail?.extension})`,
          }}
        ></article>
      </section>
      <section className='characters-card__info bg-primary text-secondary'>
        <article className='characters-card__info__name'>
          {character.name}
        </article>
        <article
          className='characters-card__info__favorite'
          onClick={(event) => onToggleFavorite(event, character)}
        >
          <FavoriteButton
            isFavorite={isFavorite(character)}
            numberVisible={false}
          />
        </article>
        <article className='characters-card__info__triangle'></article>
      </section>
    </section>
  );
};
