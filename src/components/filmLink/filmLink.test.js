import React from 'react';
import { shallow } from 'enzyme';
import FilmLink from './filmLink';

describe('<FilmLink />', () => {
  it('Renders without crashing', () => {
    const film = {
      title: 'A New Hope',
      episode_id: 4,
      url: 'https://swapi.co/api/films/1/',
    };

    const wrapper = shallow(<FilmLink film={film} />);
    expect(wrapper.find('article.film')).toHaveLength(1);
  });
});
