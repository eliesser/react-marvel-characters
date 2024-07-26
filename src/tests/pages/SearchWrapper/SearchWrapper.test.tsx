import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { SearchWrapper } from '../../../components/SearchWrapper/SearchWrapper';

describe('Test in SearchWrapper.tsx', () => {
  const searchCharacters = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call searchCharacters if the input has a value', async () => {
    const value = 'wolverine';
    render(
      <SearchWrapper
        searchCharacters={searchCharacters}
        cantCharacters={0}
        isLoading={false}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: value } });

    fireEvent.submit(form);

    expect(input.value).toBe(value);

    expect(searchCharacters).toHaveBeenCalled();

    expect(searchCharacters).toHaveBeenCalledTimes(1);

    expect(searchCharacters).toHaveBeenCalledWith(value);
  });
});
