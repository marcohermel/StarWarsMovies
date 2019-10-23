import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    console.log(component.debug());
    expect(component.find('div')).toHaveLength(1);
  });
});