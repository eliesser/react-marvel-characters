import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as charactersApi from '../../../../services/api/characterService';
import { IComic } from '../../../../interfaces/character-comics.interface';
import { Loading } from '../../../../components/UI/Loading/Loading';
import { CharacterDetailComicsCard } from '../CharacterDetailComicsCard/CharacterDetailComicsCard';
import './styles.scss';

export const CharacterDetailComics = () => {
  const [comics, setComics] = useState<IComic[]>([]);
  const { characterId } = useParams<{ characterId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (characterId) getCharacterComics();
  }, []);

  const getCharacterComics = async () => {
    setIsLoading(true);
    try {
      if (characterId) {
        const response = await charactersApi.getAllComicsByCharacterId(
          characterId
        );

        setComics(response.data.results);
      }
    } catch (error) {
      console.error('Error fetching characters', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='comics'>
      <section className='content'>
        <section className='title'>COMICS</section>
        <section className='list'>
          {isLoading ? (
            <Loading />
          ) : (
            comics.map((comic: any) => (
              <CharacterDetailComicsCard key={comic.id} comic={comic} />
            ))
          )}
        </section>
      </section>
    </section>
  );
};
