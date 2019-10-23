
import MockAdapter from 'axios-mock-adapter';
import { getFilms, getFilm } from './apiService';
import api from './api';

describe('filmsService', () => {
  const mock = new MockAdapter(api);
  it('getAll should fetch /films', (done) => {
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
      done();
    });
  });
  it('getById should get ById /films/:id', (done) => {
    const data = {
      title: 'A New Hope',
      episode_id: 4,
    };

    mock.onGet('/film/4').reply(200, data);

    return getFilm(4).then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });
});
