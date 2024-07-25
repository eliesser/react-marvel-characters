import React from 'react';

import { ICharacter } from '../../../../interfaces/character.interface';
import { useFavorites } from '../../../../context/FavoriteContext';
import { FavoriteButton } from '../../../../components/FavoriteButton/FavoriteButton';
import './styles.scss';

interface ICharacterDetailHeaderProps {
  character: ICharacter;
}

export const CharacterDetailHeader = ({
  character,
}: ICharacterDetailHeaderProps) => {
  const { isFavorite, onToggleFavorite } = useFavorites();
  return (
    <section className='comics-header bg-primary text-secondary'>
      <section className='comics-header__content'>
        <section className='comics-header__content__img-content'>
          <article
            className='comics-header__content__img-content__img'
            style={{
              backgroundImage: `url(${character?.thumbnail?.path}.${character?.thumbnail?.extension})`,
            }}
          ></article>
        </section>
        <section className='comics-header__content__info bg-primary text-secondary'>
          <section className='comics-header__content__info__content__name'>
            <article className='comics-header__content__info__name'>
              {character.name}
            </article>
            <article
              className='comics-header__content__info__favorite'
              onClick={(event) => onToggleFavorite(event, character)}
            >
              <FavoriteButton
                isFavorite={isFavorite(character)}
                numberVisible={false}
              />
            </article>
          </section>
          {character?.description && character?.description?.length > 0 && (
            <section className='comics-header__content__info__description'>
              {character.description}
            </section>
          )}
        </section>
      </section>
      <article className='comics-header__triangle'></article>
    </section>
  );
};
