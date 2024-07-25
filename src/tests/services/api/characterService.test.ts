import axios from 'axios';
import mock from 'axios-mock-adapter';

import * as charactersApi from '../../../services/api/characterService';

const mockAxios = new mock(axios);

jest.setTimeout(240000);

describe('Test in characterService.ts', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('should fetch data successfully in getAll', async () => {
    const response = await charactersApi.getAll();

    expect(response.data.results.length).toBeGreaterThan(0);
  });

  test('should fetch data with query parameter in getAll', async () => {
    const response = await charactersApi.getAll('WOLVERINE');

    expect(response.data.results.length).toBeGreaterThan(0);
  });

  test('should fetch data successfully in getOne', async () => {
    const response = await charactersApi.getOne('1011066');

    expect(response.data.results.length).toBeGreaterThan(0);
  });

  test('should fetch data successfully in getAllComicsByCharacterId', async () => {
    const response = await charactersApi.getAllComicsByCharacterId('1011066');

    expect(response.data.results.length).toBeGreaterThan(0);
  });
});
