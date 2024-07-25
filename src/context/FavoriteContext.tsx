import React from 'react';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import { ICharacter } from '../interfaces/character.interface';

interface FavoriteContextType {
  favoritesCount: number;
  setFavoritesCount: (value: number) => void;
  favorites: ICharacter[];
  setFavorites: (characters: ICharacter[]) => void;
  onToggleFavorite: (
    event: React.MouseEvent<HTMLElement>,
    character: ICharacter
  ) => void;
  isFavorite: (character: ICharacter) => boolean;
}

const defaultContextValue: FavoriteContextType = {
  favoritesCount: 0,
  setFavoritesCount: () => {},
  favorites: [],
  setFavorites: () => {},
  onToggleFavorite: () => {},
  isFavorite: () => {
    return false;
  },
};

const FavoriteContext = createContext<FavoriteContextType>(defaultContextValue);

interface FavoriteProviderProps {
  children: ReactNode;
}

export function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    const storedFavoritesString = localStorage.getItem('favorites');

    const storedFavorites = storedFavoritesString
      ? JSON.parse(storedFavoritesString)
      : [];
    setFavorites(storedFavorites);
    setFavoritesCount(storedFavorites.length);
  };

  const onToggleFavorite = async (
    event: React.MouseEvent<HTMLElement>,
    character: ICharacter
  ) => {
    event.stopPropagation();

    let updatedFavorites;

    if (isFavorite(character)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
    } else {
      updatedFavorites = [...favorites, character];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    setFavorites(updatedFavorites);
    setFavoritesCount(updatedFavorites.length);
  };

  const isFavorite = (character: ICharacter) => {
    return favorites.some((fav) => fav.id === character.id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoritesCount,
        setFavoritesCount,
        favorites,
        setFavorites,
        onToggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}
