import md5 from 'crypto-js/md5';

import { marvelApi } from './marvelApi';
import { charactersMock, characterMock, characterComicsMock } from '../mocks';
import { IResponseCharacterComics } from '../../interfaces/character-comics.interface';
import { IResponseMarvelApi } from '../../interfaces/character.interface';

const isMockActive = import.meta.env.VITE_MODE;

const apikey: any = import.meta.env.VITE_PUBLIC_KEY;
const privateKey: any = import.meta.env.VITE_PRIVATE_KEY;
const ts = new Date().getTime();
const hash = md5(`${ts}${privateKey}${apikey}`).toString();

interface IApyKeyParams {
  ts: number;
  hash: string;
  apikey: string;
}

interface IGetAllParams extends IApyKeyParams {
  limit: number;
  offset: number;
  nameStartsWith?: string;
}

const getAll = async (value?: string) => {
  try {
    const params: IGetAllParams = {
      ts,
      hash,
      apikey,
      limit: 50,
      offset: 0,
    };

    if (value?.length) {
      params.nameStartsWith = value;
    }

    let response: IResponseMarvelApi;

    if (isMockActive) {
      response = charactersMock;
    } else {
      const { data } = await marvelApi.get(`characters`, {
        params,
      });
      response = data;
    }

    return response;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

const getOne = async (characterId: string) => {
  try {
    const params: IApyKeyParams = {
      ts,
      hash,
      apikey,
    };

    let response: IResponseMarvelApi;

    if (isMockActive) {
      response = characterMock;
    } else {
      const { data } = await marvelApi.get(`characters/${characterId}`, {
        params,
      });
      response = data;
    }

    return response;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

const getAllComicsByCharacterId = async (characterId: string) => {
  try {
    const params: IApyKeyParams = {
      ts,
      hash,
      apikey,
    };

    let response: IResponseCharacterComics;

    if (isMockActive) {
      response = characterComicsMock;
    } else {
      const { data } = await marvelApi.get(`characters/${characterId}/comics`, {
        params,
      });
      response = data;
    }

    return response;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export { getAll, getOne, getAllComicsByCharacterId };
