import React from 'react';

interface ICharacterDetailComicsCardProps {
  comic: any;
}

export const CharacterDetailComicsCard = ({
  comic,
}: ICharacterDetailComicsCardProps) => {
  return (
    <article>
      <section className='img-content'>
        <article
          className='img'
          style={{
            backgroundImage: `url(${comic?.thumbnail?.path}.${comic?.thumbnail?.extension})`,
          }}
        ></article>
      </section>
      <section className='description'>
        <section className='description__title'>{comic.title}</section>
        <section className='year'>{comic.dates[0].date}</section>
      </section>
    </article>
  );
};
