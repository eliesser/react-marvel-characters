import React from 'react';

import { ICharacter } from '../../interfaces/character.interface';
import { CharactersCard } from '../CharactersCard/CharactersCard';
import './styles.scss';

interface CharactersListProps {
  isFavoritesPage?: boolean;
  characters: ICharacter[];
  favorites: ICharacter[];
  setFavorites: (characters: ICharacter[]) => void;
  setCharacters: (characters: ICharacter[]) => void;
}

export const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <section className='characters-list'>
      <section className='characters-list__content'>
        {characters.map((character: ICharacter) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </section>
    </section>
  );
};
