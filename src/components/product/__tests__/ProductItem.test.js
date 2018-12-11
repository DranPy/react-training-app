import { shallow } from 'enzyme';
import React from 'react';

import ProductItem from '../ProductItem';

describe('<ProductItem />', () => {
  const defaultProps = {
    product: {
      id: '1',
      name: 'test name 1',
      category: 'category 1',
      price: '1$',
      imgUrl: 'src/1.img',
    },
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<ProductItem {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
