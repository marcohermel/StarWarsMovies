
import MockAdapter from 'axios-mock-adapter';
import api from './api';
import { getFilms, getFilm } from './filmService';

describe('filmsService', () => {
  const mock = new MockAdapter(api);

  it('getFilms should fetch /films', () => {
    const data = {
      count: 7,
      next: null,
      previous: null,
      results: [
        {
          title: 'A New Hope',
          episode_id: 4,
        },
      ],
    };
    mock.onGet('/films').reply(200, data);

    return getFilms().then((response) => {
      expect(response).toEqual(data);
    });
  });

  it('getFilm should get ById /films/:id', () => {
    const data = {
      title: 'A New Hope',
      episode_id: 4,
    };

    mock.onGet('/films/1').reply(200, data);

    return getFilm(1).then((response) => {
      expect(response).toEqual(data);
    });
  });
});
