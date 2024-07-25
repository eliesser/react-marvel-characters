import React, { useState, useEffect } from 'react';

import * as charactersApi from '../../services/api/characterService';
import { ICharacter } from '../../interfaces/character.interface';
import { useFavorites } from '../../context/FavoriteContext';
import { CharactersList } from '../../components/CharactersList/CharactersList';
import { SearchWrapper } from '../../components/SearchWrapper/SearchWrapper';
import './styles.scss';

interface CharactersListProps {
  isFavoritesPage?: boolean;
}

export const MainPage = ({ isFavoritesPage }: CharactersListProps) => {
  const { favorites, setFavorites } = useFavorites();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [cantCharacters, setCantCharacters] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isFavoritesPage) {
      setCharacters(favorites);
      setIsLoading(false);
      setCantCharacters(favorites.length);
    } else {
      getCharacters();
    }
  }, [isFavoritesPage]);

  const getCharacters = async (value?: string) => {
    setIsLoading(true);
    try {
      const response = await charactersApi.getAll(value);
      setCharacters(response.data.results);
      setCantCharacters(response.data.count);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching characters', error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchCharacters = (value: string) => {
    getCharacters(value);
  };

  return (
    <section className='main'>
      {isFavoritesPage && (
        <section className='main__title-favorites'>favorites</section>
      )}
      <SearchWrapper
        searchCharacters={searchCharacters}
        cantCharacters={cantCharacters}
        isLoading={isLoading}
        isFavoritesPage={isFavoritesPage}
      />
      {!isLoading && (
        <CharactersList
          isFavoritesPage={isFavoritesPage}
          characters={characters}
          setCharacters={setCharacters}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </section>
  );
};
