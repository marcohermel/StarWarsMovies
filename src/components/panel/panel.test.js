import React from 'react';
import { shallow } from 'enzyme';
import Panel from './panel';

describe('<Panel />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Panel><div>test</div></Panel>);
    expect(wrapper.find('div.panel')).toHaveLength(1);
    expect(wrapper.find('div.panel-body')).toHaveLength(1);
  });

  it('Should render with header class fontJedi if fontHeaderJedi prop is true', () => {
    const wrapper = shallow(<Panel fontHeaderJedi><div>test</div></Panel>);
    expect(wrapper.find('header.fontJedi')).toHaveLength(1);
  });

  it('Should does not render with header class fontJedi if fontHeaderJedi prop is false', () => {
    const wrapper = shallow(<Panel><div>test</div></Panel>);
    expect(wrapper.find('header.fontJedi')).toHaveLength(0);
  });
});
