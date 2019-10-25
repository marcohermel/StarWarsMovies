import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('<Loader />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('div.loaderAnimation')).toHaveLength(1);
    expect(wrapper.find('span.loaderText').text()).toEqual('A long time ago in a galaxy far, far away...');
  });
});
