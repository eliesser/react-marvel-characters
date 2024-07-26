import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../assets/img/search-icon.svg';
import { Loading } from '../UI/Loading/Loading';
import './styles.scss';

interface SearchWrapperProps {
  cantCharacters: number;
  searchCharacters: (value: string) => void;
  isLoading: boolean;
  isFavoritesPage?: boolean;
}

export const SearchWrapper = ({
  searchCharacters,
  cantCharacters,
  isLoading,
  isFavoritesPage,
}: SearchWrapperProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue('');
  }, [isFavoritesPage]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputValue.trim().toLowerCase();

    if (value.length < 1) return;

    searchCharacters(value);
  };

  return (
    <form aria-label='form' onSubmit={onSubmit}>
      <section className='search'>
        <section className='search__content'>
          <img className='search__icon' src={searchIcon} />
          <input
            className='search__input'
            type='text'
            placeholder='Search a character...'
            value={inputValue}
            onChange={onInputChange}
          />
        </section>
        <section className='search__results'>
          {isLoading ? <Loading /> : `${cantCharacters} RESULTS`}
        </section>
      </section>
    </form>
  );
};
