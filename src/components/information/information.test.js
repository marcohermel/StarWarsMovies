import React from 'react';
import { shallow } from 'enzyme';
import Information from './information';

describe('<Information />', () => {
  it('Renders without crashing', () => {
    const title = 'director';
    const content = 'George Lucas';

    const wrapper = shallow(<Information title={title} content={content} />);
    expect(wrapper.find('.information span.title').text()).toEqual(`${title}: `);
    expect(wrapper.find('.information span.content').text()).toEqual(content);
  });
});
