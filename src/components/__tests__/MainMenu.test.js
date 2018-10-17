import { shallow } from 'enzyme';
import React from 'react';

import MainMenu from '../MainMenu';

describe('<MainMenu />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
