import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as charactersApi from '../../services/api/characterService';
import { ICharacter } from '../../interfaces/character.interface';
import { CharacterDetailHeader } from './components/CharacterDetailHeader/CharacterDetailHeader';
import { CharacterDetailComics } from './components/CharacterDetailComics/CharacterDetailComics';
import { Loading } from '../../components/UI/Loading/Loading';
import './styles.scss';

export const CharacterDetailPage = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<ICharacter>({});

  useEffect(() => {
    if (characterId) getCharacter();
  }, [characterId]);

  const getCharacter = async () => {
    setIsLoading(true);
    try {
      if (characterId) {
        const response = await charactersApi.getOne(characterId);
        setCharacter(response.data.results[0]);
      }
    } catch (error) {
      console.error('Error fetching characters', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='character-detail'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <CharacterDetailHeader character={character} />
              <CharacterDetailComics />
            </>
          )}
        </>
      )}
    </section>
  );
};
